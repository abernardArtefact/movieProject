
// const yoyoyo = 1;
// console.log(yoyoyo);

const express = require('express');
const mongoose = require('mongoose');
const FavoriteMovie = require('./models/favoriteMovie.model.js');



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


app.post('/api/favorites', async (req, res) => {
try {
    const { title, director, releaseYear, userId } = req.body;
    const newFavorite = new FavoriteMovie({ title, director, releaseYear, userId });
    await newFavorite.save();
    res.status(201).send(newFavorite);
} catch (error) {
    res.status(500).send("An error occurred while saving the movie :/");
}
});
