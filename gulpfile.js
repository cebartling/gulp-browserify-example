var gulp = require('./gulp')([
    'bower',
    'browserify',
    'compass',
    'copy-bootstrap',
    'images',
    'open',
    'watch',
    'serve',
    'unit-tests'
]);

gulp.task('setup', ['bower']);
gulp.task('build', ['copy-bootstrap', 'browserify', 'compass', 'images']);
gulp.task('default', ['build', 'watch', 'serve', 'open']);

