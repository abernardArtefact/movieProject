const Favorite = require('../models/favoriteMovie.model.js');

const getFavorites = async (req, res) => {
    try {
    const Favorites = await Favorite.find({});
    res.status(200).json(Favorites);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

const getFavoriteMovie = async (req, res) => {
    try {
    const { id } = req.params;
    const favorite = await Favorite.findById(id);
    res.status(200).json();
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

const createFavoriteMovie = async (req, res) => {
    try {
    const favorite = await Favorite.create(req.body);
    res.status(200).json(favorite);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

const updateFavoriteMovie = async (req, res) => {
    try {
    const { id } = req.params;

    const favorite = await Favorite.findByIdAndUpdate(id, req.body);

    if (!favorite) {
        return res.status(404).json({ message: "Favorite not found" });
    }

    const updateFavoriteMovie = await Favorite.findById(id);
    res.status(200).json(updateFavoriteMovie);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

const deleteFavoriteMovie = async (req, res) => {
    try {
    const { id } = req.params;

    const favorite = await Favorite.findByIdAndDelete(id);

    if (!favorite) {
        return res.status(404).json({ message: "Favorite not found" });
    }

    res.status(200).json({ message: "Favorite deleted successfully" });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getFavorites,
    getFavoriteMovie,
    createFavoriteMovie,
    updateFavoriteMovie,
    deleteFavoriteMovie,
};