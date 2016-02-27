var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Define task.
gulp.task('default', function() {
    // Return task definition.
    return gulp.src('source/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('destination'));
});

// Watch for javascript files and execute the default task.
var watcher = gulp.watch('source/*.js', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});