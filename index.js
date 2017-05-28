'use strict'
//modulos
const sempli = require('./sempli');
const cloudinary = require('cloudinary');
const routes = require('./routes/public');
const routesPrivate = require('./routes/private');

sempli.config();
sempli.public('/',routes);
sempli.private('/dashboard',routesPrivate);
