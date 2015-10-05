
//testing lib
import util from 'util';
import 'babel/register';
import { RoutingContext, match, createRoutes} from 'react-router'
import	React from 'react';
import createLocation from 'history/lib/createLocation';
import {server, renderToString} from "react-dom/server";

import express from 'express';
import exphbs  from 'express-handlebars';
import registrar from 'handlebars-registrar';
import handlebars from 'handlebars';

import path from 'path';
import config from './config';
import paths_app from './paths-app';
import paths_vendor from './paths-vendor';
var paths = {
	app: paths_app,
	vendor: paths_vendor
};

var app = express();

registrar(handlebars, {
    helpers: paths.app.helpers.src,
    partials: paths.app.templates.src
});

var hbs = exphbs.create({
    extname: '.hbs',
    helpers: handlebars.helpers,
    partialsDir: __dirname + "/src/"
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "/src/app/"));
app.use(express.static(path.join(__dirname, 'public')));

/// react-router magic 
app.use(function(req, res, next) {
	const jsx = require(config.srcDir + "/app/app_jsx.jsx");

	var routes = createRoutes(jsx.routes_manager());
	var location = createLocation(req.url, req.query);

	match({routes, location}, function(error, redirectLocation, renderProps) {

		var App = React.createFactory(RoutingContext)(renderProps);
	    res.render('app-layout', {
	      reactHtml: React.renderToStaticMarkup(App)
	    });
	});
});

var webServer = app.listen(config.port, function(){
	 console.log('App listening at port ' + config.port);
});