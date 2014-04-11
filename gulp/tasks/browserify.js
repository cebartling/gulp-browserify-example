var gulp = require('gulp');
var browserify = require('browserify');
var livereload = require('gulp-livereload');
var notify = require("gulp-notify");
var source = require('vinyl-source-stream');

module.exports = function () {

    browserify({
        entries: ['./src/scripts/app.coffee']
        ,extensions: ['.coffee', '.hbs']
        ,shim: {
            jquery: {
                path: './node_modules/jquery/dist/jquery.js',
                exports: 'jQuery'
            }
            ,twbs_bootstrap: {
                path: './lib/bower_components/bootstrap/dist/js/bootstrap.js',
                exports: 'twbs_bootstrap',
                depends: {jquery: 'jQuery'}
            }
        }
    }).on('error', notify.onError({
        message: "<%= error.message %>",
        title: "Browserify Error"
    }))
        .require('backbone/node_modules/underscore', { expose: 'underscore' })
        .bundle({debug: true})
        .on('error', notify.onError({
            message: "<%= error.message %>",
            title: "JavaScript Error"
        }))
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build/scripts'))
        .pipe(livereload());

    return gulp;
};
