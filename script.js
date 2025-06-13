// function locate(){
//     // find.preventDefault();
//     const key="353c71c729022ee7eb2c89bda7e1a853";
//     var p = document.getElementById("place").value;
//     var api = "http://api.openweathermap.org/geo/1.0/direct?q="+p+"&appid="+key;
//     fetch(api).then(function(response)
//         {
//             return response.json();
//         })
//         .then(function(data)
//         {
//             const latitude=data[0].lat;
//             const longitude=data[0].lon;
//             // console.log(data);
//             document.getElementById("result").innerHTML=data[0].name;
//             var weather_api="https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+key;
//             fetch(weather_api).then(function(get_data)
//                 {
//                     return get_data.json();
//                 })
//                 .then(function(val)
//                 {
//                     console.log(val)
//                     document.getElementById("state").innerHTML=val.name;
//                     const quote="https://dummyjson.com/quotes"
//                     fetch(quote).then(function(get_quotes)
//                         {
//                             return get_quotes.json();
//                         })
//                         .then(function(ans_quote){
//                             // console.log(ans_quote)
//                             let random_quote=Math.floor(Math.random() * 10);
//                             document.getElementById("quote").innerHTML=ans_quote.quotes[random_quote].quote+"<br><br>"+"- "+ans_quote.quotes[random_quote].author;
//                         })
//                 })
//                 .catch(err => console.log("Error:", err));
//         })
//         .catch(err => console.log("Error:", err));
    
//     document.getElementById("place").value="";
// }

