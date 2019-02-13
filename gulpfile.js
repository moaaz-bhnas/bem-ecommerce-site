var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src('./blocks/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('css', function() {
  return gulp.src('./blocks/**/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./'));
});

// Gulp watch syntax
gulp.task('watch', function(){
    gulp.watch('./blocks/**/*.css', gulp.series('css')); 
    // Other watchers
  })