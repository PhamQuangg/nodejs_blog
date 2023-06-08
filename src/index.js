const handlebars = require('express-handlebars').create({
  extname: '.hbs'
});
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'Public')))
app.use(express.urlencoded({
  extended:  true
}));
app.use(express.json());
// HTTP logger
app.use(morgan('combined'));

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'Resources/views'));

//route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
