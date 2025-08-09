const express = require('express');
const axios = require('axios');
const { ensureAuth } = require('../middleware/authMiddleware');

const router = express.Router();
const API_BASE = 'https://api.spoonacular.com';

// Search recipes by ingredients
router.get('/search', ensureAuth, async (req, res) => {
  try {
    const ingredients = req.query.ingredients; // comma-separated
    const response = await axios.get(`${API_BASE}/recipes/findByIngredients`, {
      params: {
        ingredients,
        number: 10,
        apiKey: process.env.SPOONACULAR_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes' });
  }
});

// Get full recipe details
router.get('/:id', ensureAuth, async (req, res) => {
  try {
    const recipeId = req.params.id;
    const response = await axios.get(`${API_BASE}/recipes/${recipeId}/information`, {
      params: { apiKey: process.env.SPOONACULAR_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipe details' });
  }
});

module.exports = router;
