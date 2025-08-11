import React from 'react';

function Home() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to RecipeAI</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Home;
