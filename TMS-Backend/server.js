const express = require('express');
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World, I am Youssouf Mansour');
});
app.listen(3005, ()=>{

    console.log("Server is running on 3005");
    
});

// // username: mansoureh225
// // password:  1eomTfi0gbTkCsXb

// // mongodb+srv://mansoureh225:1eomTfi0gbTkCsXb@cluster0.qbw1j.mongodb.net/
// // mongodb+srv://mansoureh225:<db_password>@cluster0.qbw1j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// 
