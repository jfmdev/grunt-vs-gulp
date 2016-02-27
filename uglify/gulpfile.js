var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Declare tasks.
gulp.task('default', function() {
    // Return task definition.
    return gulp.src('source/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('destination'));
});