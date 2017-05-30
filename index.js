'use strict'
//modulos
const app = require('./bin')
const cloudinary = require('cloudinary')
const routes = require('./routes/public')
const routesPrivate = require('./routes/private')
const config = require('./config')


// use uploads
app.config();
// routes
app.routesPublic('/', routes)
app.routesPrivates('/app', routesPrivate)
// connection database
app.dbConnection(config.db.connection);
// server
app.server(config.server.port);