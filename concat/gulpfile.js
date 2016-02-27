var gulp = require('gulp');
var concat = require('gulp-concat');

// Declare tasks.
gulp.task('default', function() {
    // Return task definition.
    return gulp.src('source/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('destination/'));
});