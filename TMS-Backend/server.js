const express = require('express');
const mongoose = require("mongoose");
const auth = require('./middleware/auth');
const router = express.Router();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World, I am Youssouf Mansour');
});
app.listen(3005, ()=>{
    console.log("Server is running on 3005");
});

app.post('/', auth, createTask);
app.get('/', auth, getTasks);
app.put('/:id', auth, updateTask);
app.delete('/:id', auth, deleteTask);


mongoose.connect("mongodb+srv://mansoureh225:1eomTfi0gbTkCsXb@cluster0.qbw1j.mongodb.net/Mansour?retryWrites=true&w=majority&appName=Cluster0"
).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Failed to connect to MongoDB", err);
});
module.exports = router;
// // username: mansoureh225
// // password:  1eomTfi0gbTkCsXb

// // mongodb+srv://mansoureh225:1eomTfi0gbTkCsXb@cluster0.qbw1j.mongodb.net/
// // mongodb+srv://mansoureh225:<db_password>@cluster0.qbw1j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// 
