const findMyState = () => {
    const status = document.querySelector('.status');
    const place = document.querySelector('.place');
    var lon;
    var lan;

    fetch('https://ipapi.co/json/')
    .then(function(response) {
    response.json().then(jsonData => {
        lon = jsonData.longitude
        lan = jsonData.latitude

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lan}&longitude=${lon}&localityLanguage=en`;
        
        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
            status.textContent = data.principalSubdivision + ", "
            place.textContent = data.locality
        })
    });
})

        
}

document.querySelector('.find-state').addEventListener('click', findMyState);

// findMyState()