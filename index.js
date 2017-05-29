'use strict'
//modulos
const sempli = require('./sempli');
const routes = require('./routes/public');
const routesPrivate = require('./routes/private');

sempli.config();
sempli.public('/',routes);
sempli.private('/dashboard',routesPrivate);
