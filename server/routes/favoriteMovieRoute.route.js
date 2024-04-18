const express = require("express");
const Favorite = require('../models/favoriteMovie.model.js');
// server/models/favoriteMovie.model.js
const router = express.Router();
const {getFavorites, getFavoriteMovie, createFavoriteMovie, updateFavoriteMovie, deleteFavoriteMovie} = require('../controllers/favoriteMovie.controller.js');


router.get('/', getFavorites);
router.get("/:id", getFavoriteMovie);

router.post("/", createFavoriteMovie);

// update a FavoriteMovie
router.put("/:id", updateFavoriteMovie);

// delete a FavoriteMovie
router.delete("/:id", deleteFavoriteMovie);

module.exports = router;