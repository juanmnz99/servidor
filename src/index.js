const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
