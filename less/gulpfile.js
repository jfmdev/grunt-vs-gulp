var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

// Declare tasks.
gulp.task('default', function() {
    // Return task definition.
    return gulp.src('source/*.less')
        .pipe( less({ paths: [ path.join(__dirname, 'less', 'includes') ] }) )
        .pipe(gulp.dest('destination'));
});