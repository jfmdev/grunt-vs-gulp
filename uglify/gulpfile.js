var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Define tasks
gulp.task('default', function() {
    // Return task definition.
    return gulp.src('source/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('destination'));
});