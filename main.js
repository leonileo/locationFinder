const findMyState = () => {

    const status = document.querySelector('.status');
    const place = document.querySelector('.place');
//     navigator.permissions
//     .query({ name: "geolocation" })
//     .then((permissionStatus) => {
//       console.log(`geolocation permission status is ${permissionStatus.state}`);
//       permissionStatus.state = "granted"
//     //   navigator.geolocation.getCurrentPosition(success, error)
// });

const success = (position) => {
        console.log(position)
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
        
        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            status.textContent = data.principalSubdivision + ", "
            place.textContent = data.locality
        })
    }
    const error = () => {
        status.textContent = 'Unable to retrieve your location';
    }         
    console.log(navigator.geolocation.watchPosition(success))
    }
    document.querySelector('.find-state').addEventListener('click', findMyState);
    findMyState()
