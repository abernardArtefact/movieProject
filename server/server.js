
// const yoyoyo = 1;
// console.log(yoyoyo);

const express = require('express');
const mongoose = require('mongoose');
const FavoriteMovie = require('./models/favoriteMovie.model.js');
const favoriteMovieRoute = require("./routes/favoriteMovieRoute.route.js");
const app = express()


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/favorites", favoriteMovieRoute);

app.get('/', (req, res) => {
    res.send("envoyé depuis node api gogogo")
})

mongoose.connect('mongodb+srv://anneflower:hlBOy1tH7iDW498N@backenddb.vo6dccc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
    console.log("Server is running on port 3000 hihihaha");
    });
})
.catch(() => {
    console.log("Connection failed :/");
});
