module.exports = function(gulp, plugins, paths) {
	gulp.src(paths.app.jsx.src)
		.pipe(plugins.concat('app_jsx.jsx'))
		.pipe(gulp.dest('./src/app'))
		.pipe(plugins.browserify({transform: ['babelify']}))
		.pipe(gulp.dest(paths.app.jsx.dest));
};