function locate(){
    const key="353c71c729022ee7eb2c89bda7e1a853";

    const place = document.getElementById("place").value;
    
    const api = "https://api.openweathermap.org/data/2.5/weather?q="+place+"&appid="+key;

    const quote_api="https://dummyjson.com/quotes"
    
    Promise.all([
        fetch(api),
        fetch(quote_api)
    ])
    .then(async ([response1,response2])=>{
        const weather_data= await response1.json();
        const quote_data= await response2.json();
      
        console.log(weather_data);
        document.getElementById("place_name").innerHTML=weather_data.name;
        
        //display feel like temp
        var temp = parseFloat(weather_data.main.feels_like);
        var temp_result = temp-273;
        document.getElementById("feels_alike").innerHTML="Feels a like "+temp_result.toFixed(1)+"<sup>o</sup>C";

        //display original temp
        var org_temp = parseFloat(weather_data.main.temp);
        var org_temp_result = org_temp-273;
        document.getElementById("original_temp").innerHTML=org_temp_result.toFixed(1)+"<sup>o</sup>C";

        //display max_temp
        var max_temp = parseFloat(weather_data.main.temp_max);
        var max_temp_res = temp-273;
        document.getElementById("max_temp").innerHTML=max_temp_res.toFixed(1)+"<sup>o</sup>C";

        //display min_temp
        var min_temp = parseFloat(weather_data.main.temp_min);
        var min_temp_res = temp-273;
        document.getElementById("min_temp").innerHTML=min_temp_res.toFixed(1)+"<sup>o</sup>C";

        //display sea_level
        document.getElementById("sea_level").innerHTML=weather_data.main.sea_level+" hPa";

        //display ground_level
        document.getElementById("ground_level").innerHTML=weather_data.main.grnd_level+" hPa";
    
        //quote_data.quotes[].quote
        var quote_random_val = Math.floor(Math.random() * 31);
        document.getElementById("quote_result").innerHTML=quote_data.quotes[quote_random_val].quote + " — " +quote_data.quotes[quote_random_val].author;
    
        //display sunrise
        const sunrise=weather_data.sys.sunrise;
        
        const sunrise_date = new Date(sunrise * 1000);
        const sunrise_time = sunrise_date.toLocaleTimeString("en-IN", {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        document.getElementById("sunrise_result").innerHTML = sunrise_time;

        //display sunset
        const sunset=weather_data.sys.sunset;
        
        const sunset_date = new Date(sunset * 1000);
        const sunset_time = sunset_date.toLocaleTimeString("en-IN", {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        document.getElementById("sunset_result").innerHTML = sunset_time;

        //air conditions
        //real feel
        document.getElementById("real_feel").innerHTML = temp_result.toFixed(1)+"<sup>o</sup>C";

        //wind Speed
        document.getElementById("wind_speed").innerHTML = weather_data.wind.speed+" m/s";

        //mositure conditions
        //humidity
        document.getElementById("humidity").innerHTML = weather_data.main.humidity+"%";

        //pressure
        document.getElementById("pressure").innerHTML = weather_data.main.pressure+" hPa";
    })
    .catch(error => {
        console.error("API error:", error);
    });

}