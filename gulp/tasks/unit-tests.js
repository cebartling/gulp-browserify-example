var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

module.exports = function () {

    var options = {
        verbose: true,
        includeStackTrace: true,
        timeout: 3000
    };

    gulp.src('./specs/**/*-spec.js')
        .pipe(jasmine(options));

    return gulp;
};



