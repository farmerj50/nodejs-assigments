const express = require("express");
const app = express();
const ejs = require('ejs');
const Usermodel = require('../nodejs-assigments/model/user')
const axios = require("axios").default;
app.use(express.static('public'));
const bodyParser = require('body-parser');
const request = require('request');
const apiKey = '352ea4b11dbb5457e7ce2afdab53395a';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a6fb09a35e5346c2a96b5ae918cc1b4b');
const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://localhost:27017/news", { useNewUrlParser: true })
const user = require("./routes/user")
newsapi.v2.topHeadlines({
  q: 'trump',
  category: 'politics',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  (error,result)=>{
    {
        if(error){
          console.log(error);
        }
        else{  
          if(result.totalResults != 0){
      console.log(articlesarray(result.articles));
      }
      else
      {
      console.log(`\x1b[31m`,"No results for that keyword within that time, or try again with the right spelling of the key word");
        }
    
      }
  



app.set("view engine", "ejs");

app.use(bodyParser.json({ type : "application/json" }))
app.use(bodyParser.text({ type : "text/html" }))
app.use(bodyParser.urlencoded({ extended : true }))


app.get('/', (req, res)=>{
    res.render('index', {weather: null, error: null});
}) 
  app.post('/', (req, res)=>{
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  request(url, (err, response, body)=>{
    if(err){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weather = JSON.parse(body)
        if(weather.main == undefined){
          res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
          let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
          res.render('index', {weather: weatherText, error: null});
        }
      }
    });

  }) 




app.use("/user", user);

app.listen(9500, ()=>{
    console.log("Server Started...")
})
}
}

        
});