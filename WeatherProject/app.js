const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}))



app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");   
})

app.post('/', function(req,res){
    const query = req.body.cityName;
    const apiKEY = "32e1f3a667c2876cccee2e6574714264"
    const units = "Imperial"

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid="+ apiKEY+ "&units=" + units;
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"

            console.log(temp);
            console.log(weatherDescription);


            res.write("<html></html><h2>The temp in " + query + " is " + temp + "</h2></html>");
            res.write("<p>The weather description is " + weatherDescription + "</p>");
            res.write("<img src=" + imageURL + ">")
            res.send();
        })
    });
})

app.listen(port, function(){
    console.log("Server is up and running on port " + port)
})