//backend entry point — sets up Express server.
const express = require('express');
const cors = require('cors');

//Loads environment variables (dotenv)
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const session = require('express-session');
const passport = require('passport');

// Load env variables ASAP
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

//Configures middleware 
//like CORS, JSON parsing, sessions, and Passport for authentication
// Passport config
require('./config/passport');

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/favorites', require('./routes/favoritesRoutes'));
//connect routes
app.use('/api/recipes', require('./routes/recipeRoutes'));


app.get('/', (req, res) => {
  res.send('API is running...');
});

//Starts listening on a port (usually 5000).
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

