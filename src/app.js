const express = require('express');
const passport = require('passport');

const passportStrategy = require('./middleware/passport-strategy');

// init app
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(passport.initialize());
passport.use(passportStrategy);

// routes
const authRoutes = require('./routes/auth.routes');
const commentRoutes = require('./routes/comment.routes');
const postRoutes = require('./routes/post.routes');

// routes init
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

module.exports = app;
