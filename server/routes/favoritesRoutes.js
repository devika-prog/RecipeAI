const express = require('express');
const { ensureAuth } = require('../middleware/authMiddleware');
const User = require('../models/User');
const router = express.Router();

// Get all favorites for logged-in user
router.get('/', ensureAuth, async (req, res) => {
  res.json(req.user.favorites);
});

// Add a favorite
router.post('/', ensureAuth, async (req, res) => {
  const { id, title, image } = req.body;
  
  if (!id || !title) {
    return res.status(400).json({ message: 'Recipe id and title required' });
  }

  // Avoid duplicates
  const exists = req.user.favorites.some(fav => fav.id === id);
  if (!exists) {
    req.user.favorites.push({ id, title, image });
    await req.user.save();
  }
  
  res.json(req.user.favorites);
});

// Remove a favorite
router.delete('/:id', ensureAuth, async (req, res) => {
  const recipeId = parseInt(req.params.id, 10);
  req.user.favorites = req.user.favorites.filter(fav => fav.id !== recipeId);
  await req.user.save();
  res.json(req.user.favorites);
});

module.exports = router;
