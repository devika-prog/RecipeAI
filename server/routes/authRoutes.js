//defines authentication routes

const express = require('express');
const passport = require('passport');
const router = express.Router();

// Start Google OAuth login flow (sign in)
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Handle callback from Google (OAuth response)
router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login-failure',
    successRedirect: 'http://localhost:3000/dashboard', // frontend dashboard after success
    session: true
  })
);

// Optional: Logout route
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('http://localhost:3000');
  });
});

// Optional: Failure redirect route
router.get('/login-failure', (req, res) => {
  res.send('Failed to authenticate..');
});

module.exports = router;
