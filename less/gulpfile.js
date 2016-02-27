var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

// Define task.
gulp.task('default', function() {
    // Return task definition.
    return gulp.src('source/*.less')
        .pipe( less({ paths: [ path.join(__dirname, 'less', 'includes') ] }) )
        .pipe(gulp.dest('destination'));
});