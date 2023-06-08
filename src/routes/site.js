const express = require('express');
const siteController = require('../app/controller/SiteController');
const route =express.Router();


route.use('/searchs',siteController.search);
route.use('/',siteController.index);



module.exports= route;
