/*React component for the home page.

Contains a button to start Google login by redirecting 
to backend /api/auth/google.
*/

import React from 'react';
import RecipeSearch from '../components/RecipeSearch';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <RecipeSearch />
    </div>
  );
}

export default Dashboard;



