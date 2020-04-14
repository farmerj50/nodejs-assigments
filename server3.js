const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ type : "application/json" }))

app.use(bodyParser.text({ type : "text/html" }))


const MongoClient = require("mongodb").MongoClient;
const MongoURL = "mongodb://localhost:27017";


app.get("/movies", (req, res)=>{
    
    MongoClient.connect(MongoURL, (err, client)=>{
        const db = client.db("movie"); // Your Database name
        const collection = db.collection("movie"); // Your collection name
        collection.find({}).toArray((err, docs)=>{
            res.send(docs);
            client.close();
        })
    })
})

app.post("/movies", (req, res)=>{
    MongoClient.connect(MongoURL, (err, client)=>{
        const db = client.db("movies");
        const collection = db.collection("movie");
        collection.save(req.body, function(err, response){
            res.send("inserted.")
            client.close();
        })
    })
})

app.get("/movies/:name", (req, res)=>{
    console.log(req.params.id);
    MongoClient.connect(MongoURL, (err, client)=>{
        const db = client.db("movie");
        const collection = db.collection("movie");
        collection.findone({ name : req.params.name } ,function(err, response){
            console.log(err);
            res.send("response")
            client.close();
       })
    })
})
app.get("/movies/:rates", (req, res)=>{
    console.log(req.params.id);
    MongoClient.connect(MongoURL, (err, client)=>{
        const db = client.db("movie");
        const collection = db.collection("movie");
        collection.find().sort({rates:-1}).limit(3) // for MAX
            client.close();
       })
    })
    app.put("/movies/:id", (req, res)=>{
        console.log(req.params.id);
        MongoClient.connect(MongoURL, (err, client)=>{
            const db = client.db("movies");
            const collection = db.collection("movie");
            collection.update({ name : "xmen" }, { $set : { achie : "Super Hit" } } ,function(err, response){
                console.log(err);
                res.send("updated.")
                client.close();
            })
        })
    })
    app.put("/movies/:id", (req, res)=>{
        console.log(req.params.id);
        MongoClient.connect(MongoURL, (err, client)=>{
            const db = client.db("movies");
            const collection = db.collection("movie");
            collection.update({ name : "superman" }, { $set : { achiev : "Super Duper Hit" } } ,function(err, response){
                console.log(err);
                res.send("updated.")
                client.close();
            })
        })
    })
    app.get("/movies/:achiev", (req, res)=>{
        console.log(req.params.id);
        MongoClient.connect(MongoURL, (err, client)=>{
            const db = client.db("movie");
            const collection = db.collection("movie");
            collection.find().sort({achiev:-1}).limit(3) // for MAX
                client.close();
           })
        })
        app.get("/movies/:achiev", (req, res)=>{
            console.log(req.params.id);
            MongoClient.connect(MongoURL, (err, client)=>{
                const db = client.db("movie");
                const collection = db.collection("movie");
                collection.findone({ achiev : req.params.achiev } ,function(err, response){
                    console.log(err);
                    res.send("response")
                    client.close();
               })
            })
        })
    
    


app.listen(6500);