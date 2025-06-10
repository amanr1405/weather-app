function find(){
    // find.preventDefault();
    const key="353c71c729022ee7eb2c89bda7e1a853";
    var p = document.getElementById("place").value;
    var api = "http://api.openweathermap.org/geo/1.0/direct?q="+p+"&appid="+key;
    fetch(api).then(function(response)
        {
            return response.json();
        })
        .then(function(data)
        {
            const latitude=data[0].lat;
            const longitude=data[0].lon;
            // console.log(data);
            document.getElementById("lan").innerHTML="<strong>Latitude </strong>"+latitude;
            document.getElementById("lat").innerHTML="<strong>Longitude </strong>"+longitude;

            var weather_api="https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+key;
            fetch(weather_api).then(function(get_data)
                {
                    return get_data.json();
                })
                .then(function(val)
                {
                    // console.log(val)
                    document.getElementById("result").innerHTML="<strong>Place </strong>"+val.name+"<br><strong>Weather </strong>"+val.weather[0].main+"<br><strong>Description </strong>"+val.weather[0].description;
                })
        })
    
    document.getElementById("place").value="";
}