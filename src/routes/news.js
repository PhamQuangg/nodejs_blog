const express = require('express');
const newsController = require('../app/controller/NewsController');
const route =express.Router();


route.use('/:slug',newsController.show);
route.use('/',newsController.index);



module.exports= route;
