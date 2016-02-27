var gulp = require('gulp');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var path = require('path');

// Define uglify task.
gulp.task('uglify', function() {
    return gulp.src('source/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('destination'));
});

// Define LESS task.
gulp.task('less', function() {
    return gulp.src('source/*.less')
        .pipe( less({ paths: [ path.join(__dirname, 'less', 'includes') ] }) )
        .pipe(gulp.dest('destination'));
});

// Define 
gulp.task('default',['uglify', 'less']);

// Watch for javascript files and execute the default task.
var watcher = gulp.watch(['source/*.js', 'source/*.less'], ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});