var gulp       = require('gulp');
var livereload = require('gulp-livereload');

module.exports = function(){
	gulp.watch('src/scripts/**/*', ['browserify']);
	gulp.watch('src/styles/**', ['compass']);
	gulp.watch('src/images/**', ['images']);
	livereload();
};
