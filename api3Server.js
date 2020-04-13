const request = require("request");
const axios = require("axios").default;
const util = require("util");


axios.get("https://localhost:3000").then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})