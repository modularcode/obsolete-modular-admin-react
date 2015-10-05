import glob from 'glob';
import path from 'path';
import gulp from 'gulp';
import config from './config';
import paths_app from './paths-app';
import paths_vendor from './paths-vendor';
import plugin_libs from 'gulp-load-plugins';
const plugins = plugin_libs();

var paths = {
	app: paths_app,
	vendor: paths_vendor
};

/********************************************
*			Configs And Paths
*********************************************/

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
*				Serve Task
*********************************************/

gulp.task('serve', function() {
	require('./server.js');
});

/********************************************
*				Main Tasks
*********************************************/


// // Run this task for development
gulp.task('develop', [
	'build',
	'serve',
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

