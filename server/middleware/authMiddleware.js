// Protect routes middleware example
//protect routes so only logged-in users 
//can access recipe or favorites endpoints.
function ensureAuth(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ message: 'Unauthorized' });
  }
  
  module.exports = { ensureAuth };
  

