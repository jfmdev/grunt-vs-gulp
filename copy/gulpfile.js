var gulp = require('gulp');

// Declare task.
gulp.task('default', function() {
    // Return task definition.
    return gulp
        .src('source/*')
        .pipe(gulp.dest('destination'));
});