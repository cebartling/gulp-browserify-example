var gulp = require('gulp');

module.exports = function () {

    gulp.src('./lib/bower_components/bootstrap/dist/css/bootstrap*')
        .pipe(gulp.dest('./build/styles'));
    gulp.src('./lib/bower_components/bootstrap/dist/js/bootstrap.js')
        .pipe(gulp.dest('./build/scripts'));

    return gulp;
};
