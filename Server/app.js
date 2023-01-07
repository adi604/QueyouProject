const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

// option will be switched back to `false` by default.
mongoose.set('strictQuery',false);
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@queyou.ok8laow.mongodb.net/?retryWrites=true&w=majority`,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
    // Mongoose always behaves as if they are true - remove  options from the code.
});
mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected !');
});

// Middlewares Import
const cors = require('./api/middlewares/cors');
const notFoundError = require('./api/middlewares/notFoundError');
const handlerErrors = require('./api/middlewares/handlerErrors');

// Routes Import
const reviewsRoutes = require('./api/routes/reviews');
const providersRoutes = require('./api/routes/providers');
const customersRoutes = require('./api/routes/customers');
const usersRoutes = require('./api/routes/users');
const meetingsRoutes = require('./api/routes/meetings');

// Middleware Logger
app.use(morgan("dev"));
// Middleware - Pass Json or url encoded (key:value) data from client to req.body
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
// Middleware CORS - Cross Origin Resource Sharing
app.use(cors);


// Routes
app.use('/users', usersRoutes);
app.use('/customers', customersRoutes);
app.use('/providers', providersRoutes);
app.use('/reviews', reviewsRoutes);
app.use('/meetings', meetingsRoutes);


// Middleware - handle request for not found url
app.use(notFoundError);
// Middleware - handle errors
app.use(handlerErrors);


module.exports = app;