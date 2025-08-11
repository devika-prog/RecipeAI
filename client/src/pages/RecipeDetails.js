/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/recipes/${id}`, {
          withCredentials: true
        });
        setRecipe(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} width="300" />
      <h3>Instructions</h3>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
    </div>
  );
}

export default RecipeDetails;*/

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/recipes/${id}`, {
          withCredentials: true,
        });
        setRecipe(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load recipe details.');
      }
    };

    fetchRecipe();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!recipe) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} style={{ width: '100%', maxWidth: '400px' }} />
      
      <h2>Ingredients</h2>
      <ul>
        {recipe.extendedIngredients.map(ing => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />

    </div>
  );
}

export default RecipeDetails;

