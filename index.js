// imports
const express = require("express");
const exphbs = require("express-handlebars");
const productsRoutes = require('./routes/productsRoutes');
const conn = require('./db/conn');

const app = express();

// template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// req body
app.use(
  express.urlencoded({
    extended: true
  })
);

// middlewares
app.use(express.static('public'));
app.use(express.json());
app.use('/products', productsRoutes);

app.listen(3000);