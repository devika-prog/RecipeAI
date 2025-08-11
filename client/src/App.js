//The main React component setting up 
//frontend routing with React Router.
//Defines pages/components like Home, Dashboard, and RecipeDetails.
//Manages which UI shows based on URL

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

