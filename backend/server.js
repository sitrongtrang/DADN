const express = require('express');
const bodyParser = require('body-parser');
var rateLimit = require("express-rate-limit");
const cors = require('cors');
const db = require("./config/connect_db")
const checkAuthMiddleWare = require('./middleware/authenticate')
const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route')

const port = process.env.PORT || 9000;
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter);
app.use(cors({
  origin: (origin, callback) => {
    callback(null, true);
  },
  credentials: true
}));
app.use(bodyParser.json());


app.use('/api/auth',authRoutes)

app.use(checkAuthMiddleWare)
app.use('/api/user', userRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});