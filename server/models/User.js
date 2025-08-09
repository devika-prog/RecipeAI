const mongoose = require('mongoose');

/*Update models/User.js to store favorites
We’ll give each user an array of favorite recipe IDs (from Spoonacular).*/
const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  email: { type: String, required: true },
  name: String,
  favorites: [
    {
      id: Number, // Spoonacular recipe ID
      title: String,
      image: String
    }
  ]
});


/*const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recipe',
    },
  ],
}, { timestamps: true });*/

module.exports = mongoose.model('User', userSchema);
