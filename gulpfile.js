var glob = require('glob');
var path = require('path');

var gulp = require('gulp');
var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var router = express.Router();
var plugins = require('gulp-load-plugins')();
var registrar = require('handlebars-registrar');
var handlebars = require('handlebars');
var fs = require('fs');

var config = require('./config');

var paths = {
	app: 	require('./paths-app'),
	vendor: require('./paths-vendor')
};

registrar(handlebars, {
    helpers: paths.app.helpers.src,
    partials: paths.app.templates.src
});

/********************************************
*			Configs And Paths
*********************************************/

var	React = require('react');
require('node-jsx').install({extension:'.jsx'});

//router

hbs = exphbs.create({
    extname: '.hbs',
    helpers: handlebars.helpers,
    partialsDir: __dirname + "/src/"
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "/src/app/"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);  

router.all('/*', function (req, res, next) {
	var markup = '';
	var page_name = path.parse(String(req.originalUrl)).name;
	var segments = req.originalUrl.split("/");
	var file_path = "";

	if(page_name == "index" || page_name == "undefined" || page_name == ""){
		page_name = "dashboard";
	}
	for(var segment = 1; segment < segments.length; segment++){
		if(segment != (segments.length - 1)){
			file_path += segments[segment] + "/";
		}
		else{
			file_path += page_name + "/" + page_name;
		}
	}

	var jsx_app = config.srcDir + "/app/" + "/" + file_path + ".jsx";
	fs.exists(jsx_app, function (exists) {
		if(exists){
			var App = React.createFactory(require(jsx_app));
			markup = React.renderToString(App());
		}
	});
	fs.exists(config.srcDir + "/app/" + "/" + file_path + '-page' + '.hbs', function (exists) {
		if(exists){
			res.render(file_path + '-page', {
				markup:markup
			});
		}
		else{
			res.redirect('/pages/error-404.html');
		}
	});

});

/********************************************
*   		Load Build Tasks
*********************************************/

var buildTasks = loadTasks();

gulp.task('build', buildTasks);

/*********************************************
*				 Other Tasks
**********************************************/

// Rerun the task when a file changes
gulp.task('watch', function() {
	// When jsx script changes recompile scripts
	plugins.watch(paths.app.jsx.src, function() {
	    gulp.start('app-jsx');
	});

	// When script changes recompile scripts
	plugins.watch(paths.app.scripts.src, function() {
	    gulp.start('app-scripts');
	});

	// When style changes recompile styles
	plugins.watch(paths.app.styles.src, function() {
	    gulp.start('app-styles');
	});
});

// Builds and deploys to github pages
gulp.task('deploy', ['build'], function() {
	return gulp.src('./public/**/*')
		.pipe(plugins.ghPages());
});



/********************************************
*				Main Tasks
*********************************************/


// // Run this task for development
gulp.task('develop', [
	'build',
	'watch'
]);

gulp.task('default', ['develop']);



/**************************************
*				Utils
***************************************/


function loadTasks() {
	var taskNames = [];

	// Load all tasks from tasks folder
	glob.sync('./tasks/*.js').forEach(function(filePath) {
		var taskName = path.basename(filePath, '.js');

		if(taskName != "app-pages")
		taskNames.push(taskName);
		if(taskName != "app-pages")
		gulp.task(taskName, function() {
			require(filePath)(gulp, plugins, paths)
		});
	});


	return taskNames;
}


var server = app.listen(3333);