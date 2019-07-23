const path = require('path'), 
      gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      minifyCSS = require('gulp-minify-css'),
      imagemin = require('gulp-imagemin'),
      less = require('gulp-less');
const cwd = process.cwd();

gulp.task('js', async function(){
  await gulp.src(`${process.env.fileDir}/*.js`)
  .pipe(uglify())
  .pipe(gulp.dest(path.join(cwd, 'dist/js')))
});

gulp.task('css', async function(){
  await gulp.src(`${process.env.fileDir}/*.css`)
  .pipe(minifyCSS())
  .pipe(gulp.dest(path.join(cwd, 'dist/css')))
});

gulp.task('images', async function(){
  await gulp.src(`${process.env.fileDir}/*.*`)
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(gulp.dest(path.join(cwd, 'dist/images')))
});

gulp.task('less', async function(){
  await gulp.src(`${process.env.fileDir}/**.less`)
  .pipe(less())
  .pipe(gulp.dest(path.join(cwd, 'dist/css')))
});

gulp.task('A', async function(){
  console.log('哈哈',);
  await console.log('A任务执行!');
});

gulp.task('default', gulp.series('js', 'A', async function(){
  console.log('default 结束!');
}));

gulp.task('auto', async function () {
  await gulp.watch('src/js/*.js', gulp.series('js', 'A', async function(){
    console.log('default 结束');
  }));
})
