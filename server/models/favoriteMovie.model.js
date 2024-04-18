const mongoose = require('mongoose');

const favoriteMovieSchema = new mongoose.Schema({
    title: String,
    director: String,
    releaseYear: Number,
    userId: String // ou mongoose.Schema.Types.ObjectId quand je vais gèrer les utilisateurs
});
const FavoriteMovie = mongoose.model('FavoriteMovie', favoriteMovieSchema);
module.exports = FavoriteMovie;