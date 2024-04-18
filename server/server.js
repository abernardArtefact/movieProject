
// const yoyoyo = 1;
// console.log(yoyoyo);

const express = require('express');
const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://anneflower:hlBOy1tH7iDW498N@backenddb.vo6dccc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => console.log('Connected to database!'));
const app = express()

app.use(express.json());

app.listen(3000, () => {
    console.log("ca marche sur 3000");
})
app.get('/', (req, res) => {
    res.send("envoyé depuis node api gogo")
})