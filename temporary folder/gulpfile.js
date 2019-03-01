var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile', function () {
  return (gulp.src('sass/allfiles.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
  );
});

gulp.task('watch', function(){
  gulp.watch('sass/all_files/*.scss', gulp.parallel('compile'))
});

gulp.task('default', gulp.parallel('compile', 'watch'));