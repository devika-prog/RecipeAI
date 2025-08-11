const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Look for existing user with googleId
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        // Create user if doesn't exist
        user = await User.create({
          googleId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value, // might want to check if emails array exists
          photo: profile.photos[0].value
        });
      }

      done(null, user);
    } catch (err) {
      done(err, null);
    }
  }
));

// Serialize user by MongoDB _id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user by MongoDB _id
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});





