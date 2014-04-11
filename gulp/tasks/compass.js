var compass = require('gulp-compass');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');

module.exports = function () {
    return gulp.src('./src/styles/*.sass')
        .pipe(compass({
            config_file: 'compass-config.rb',
            css: 'build/styles',
            sass: 'src/styles'
        }))
        .on('error', notify.onError({
            message: "<%= error.message %>",
            title: "SASS Error with application SASS"
        }))
        .pipe(livereload());
};
