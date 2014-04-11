var gulp = require('gulp');
var bower = require('gulp-bower');

module.exports = function() {
    return bower();
//        .pipe(gulp.dest('lib/'));
};
