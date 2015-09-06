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



// Build Jsx

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
app.use(router);  

hbs.getPartials().then(function (partials) {
    console.log('tested', partials);
    // => { 'foo/bar': [Function],
    // =>    title: [Function] }
});
router.all('/:param1', function (req, res, next) {
	console.log(paths.app.helpers.src, path.parse(req.params.param1).name, "testing!");
	var page_name = ((path.parse(req.params.param1).name == "index")?"dashboard":path.parse(req.params.param1).name);
	App = React.createFactory(require(config.srcDir + "/app/" + page_name + "/app.jsx"));
	markup = React.renderToString(App());
	console.log(markup,'testtestestset');
//    res.send('this is a sample!');
	res.render(page_name + '/' + ((path.parse(req.params.param1).name == "dashboard")?"index":path.parse(req.params.param1).name) + '-page', {
		markup:markup
	});
});

//router

router = "index";
//App = React.createFactory(require(config.srcDir + "/app/" + ((router == "index")?"dashboard":router) + "/app.jsx"));

/////////////////////////////////////////////



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

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(3333);