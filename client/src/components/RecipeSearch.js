// client/src/components/RecipeSearch.js
/*Lets the user type comma-separated ingredients

Sends them via POST to /api/recipes/search

Displays results returned from your backend*/
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RecipeSearch() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!ingredients.trim()) return;

    try {
      setError('');
      const response = await axios.get('http://localhost:5000/api/recipes/search', {
        params: {
          ingredients: ingredients.split(',').map(i => i.trim()).join(',')
        },
        withCredentials: true,
      });
      setRecipes(response.data);
    } catch (err) {
      console.error('API call error:', err);
      setError('Failed to fetch recipes. Please try again.');
    }
  };

  return (
    <div>
      <h2>Search Recipes by Ingredients</h2>
      <input
        type="text"
        placeholder="Enter ingredients, separated by commas"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {recipes.length === 0 && <li>No recipes found.</li>}
        {recipes.map(recipe => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
        <p>{recipe.title}</p>
        </Link>
        ))}

      </ul>
    </div>
  );
}

export default RecipeSearch;





