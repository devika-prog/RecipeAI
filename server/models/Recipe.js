const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [String],
  steps: [String],
  cookingTime: String,
  nutrition: {
    calories: Number,
    protein: Number,
    fat: Number,
    carbs: Number,
  },
  aiGenerated: { type: Boolean, default: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
