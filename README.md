# RecipeAI

RecipeAI is a full-stack web application that allows users to search for recipes by ingredients and generate custom recipes dynamically using AI (powered by OpenAI GPT). It combines external recipe data from the Spoonacular API with AI-generated content to provide personalized cooking inspiration.

---

## Features

- **Ingredient-based recipe search**: Find recipes that match ingredients you have on hand using the Spoonacular API.
- **AI-powered recipe generation**: Generate new, custom recipes dynamically by leveraging GPT-based language models.
- **User authentication**: Secure login using Google OAuth 2.0.
- **Recipe details**: View detailed recipe information with images and instructions.
- **Responsive UI** built with React and React Router.

---

## Tech Stack

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, MongoDB, Passport.js (Google OAuth)
- **External APIs**: Spoonacular API for recipe data, OpenAI GPT for AI recipe generation
- **Authentication**: Google OAuth 2.0

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance or URI
- Spoonacular API key ([sign up here](https://spoonacular.com/food-api))
- OpenAI API key ([sign up here](https://platform.openai.com/signup))
- Google OAuth credentials ([set up here](https://console.cloud.google.com/apis/credentials))

## Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/yourusername/RecipeAI.git
   cd RecipeAI

2. **Backend Setup**

         cd server
         npm install

3. **Create a .env file in the server directory with the following variables:**

         PORT=5000
         MONGO_URI=your_mongo_uri
         SESSION_SECRET=your_session_secret
         GOOGLE_CLIENT_ID=your_google_client_id
         GOOGLE_CLIENT_SECRET=your_google_client_secret
         GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
         SPOONACULAR_API_KEY=your_spoonacular_api_key
         OPENAI_API_KEY=your_openai_api_key

4. **Start the backend server**

         npm run dev

5. **Frontend Setup**

         cd ../client
         npm install
         npm start

   The frontend will open at http://localhost:3000.

## Usage
- Go to the homepage and log in with Google.

- Navigate to the Dashboard.

- Search for recipes by entering ingredients separated by commas.

- View search results from Spoonacular.

- Generate AI-created recipes dynamically using the “Generate Recipe” feature.

- Click a recipe to view detailed information.


## Notes
Make sure your .env file is included in .gitignore to keep secrets safe.

AI integration uses OpenAI GPT to generate recipe content dynamically.

The app uses session cookies for auth; CORS is configured accordingly.



