module.exports = function(gulp, plugins, paths) {
	gulp.src(paths.app.jsx.src)
		.pipe(plugins.concat('app_jsx.js'))
		.pipe(plugins.browserify({transform: ['reactify']}))
		.pipe(gulp.dest(paths.app.jsx.dest));
};