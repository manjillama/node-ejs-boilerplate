const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/static')));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('pages/index');
});

module.exports = app;
