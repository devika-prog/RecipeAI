//Defines your recipe-related API endpoints

const express = require('express');
const axios = require('axios');
const { ensureAuth } = require('../middleware/authMiddleware');
const { USE_MOCK_DATA } = require('../config');

const router = express.Router();
const API_BASE = 'https://api.spoonacular.com';

// Search recipes by ingredients
//takes ingredients, calls Spoontacular API (or mocks), returns matching recipes
router.post('/search', ensureAuth, async (req, res) => {
  try {
    const { ingredients } = req.body;

    if (USE_MOCK_DATA) {
      // Mock response
      const recipes = [
        { id: 1, name: 'Tomato Pasta', ingredients: ['tomato', 'pasta', 'garlic'] },
        { id: 2, name: 'Garlic Bread', ingredients: ['bread', 'garlic', 'butter'] },
      ];

      const filtered = recipes.filter(recipe =>
        ingredients.some(ing => recipe.ingredients.includes(ing.toLowerCase()))
      );

      return res.json({ recipes: filtered });
    }

    // Real API call
    const response = await axios.get(`${API_BASE}/recipes/findByIngredients`, {
      params: {
        ingredients: ingredients.join(','),
        number: 10,
        apiKey: process.env.SPOONACULAR_API_KEY
      }
    });

    res.json({ recipes: response.data });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ message: 'Error fetching recipes' });
  }
});





/*const express = require('express');
const axios = require('axios');
const { ensureAuth } = require('../middleware/authMiddleware');

const router = express.Router();
const API_BASE = 'https://api.spoonacular.com';*/

// Search recipes by ingredients
//Acts as a secure proxy so your API key stays on the backend.
//TODO: will add back later
/*router.get('/search', ensureAuth, async (req, res) => {
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
//fetches full recipe details by ID from Spoonacular
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
});*/

// For now, mock some recipes or integrate AI call later
/*router.post('/search', (req, res) => {
    const { ingredients } = req.body;
  
    // Simple mock response: recipes containing the ingredients
    const recipes = [
      { id: 1, name: 'Tomato Pasta', ingredients: ['tomato', 'pasta', 'garlic'] },
      { id: 2, name: 'Garlic Bread', ingredients: ['bread', 'garlic', 'butter'] },
    ];
  
    // Filter mock recipes by whether ingredients overlap (demo)
    const filtered = recipes.filter(recipe =>
      ingredients.some(ing => recipe.ingredients.includes(ing.toLowerCase()))
    );
  
    res.json({ recipes: filtered });
  });

module.exports = router;*/
