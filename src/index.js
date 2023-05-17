const handlebars = require('express-handlebars').create({
  extname: '.hbs'
});
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'Resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
