const request = require("request");
const axios = require("axios").default;
const util = require("util");


axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})