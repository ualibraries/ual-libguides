var gulp = require('gulp')

gulp.task('default', () => {
  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'))
})
