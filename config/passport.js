var GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3050/user/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
        console.log("Profile: ", profile);
        // fetch('http://localhost:3050/login',{
        //   // email
        //   // name
        //   // id
        // })
      }
    )
  );
};
