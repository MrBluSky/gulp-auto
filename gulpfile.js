const path = require('path'), 
      gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      minifyCSS = require('gulp-minify-css'),
      imagemin = require('gulp-imagemin'),
      less = require('gulp-less');
const cwd = process.env.appDir,
      entry = `${cwd}/${process.env.fileDir}`,
      dist = `${cwd}/dist`;

gulp.task('js', async function(){
  await gulp.src(`${entry}/**/*.js`)
  .pipe(uglify())
  .pipe(gulp.dest(dist))
});

gulp.task('css', async function(){
  await gulp.src(`${entry}/**/*.css`)
  .pipe(minifyCSS())
  .pipe(gulp.dest(dist))
});

gulp.task('images', async function(){
  await gulp.src(`${entry}/**/*.@(png|jpg|jpeg)`)
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(gulp.dest(dist))
});

gulp.task('less', async function(){
  await gulp.src(`${entry}/**/*.less`)
  .pipe(less())
  .pipe(gulp.dest(dist))
});

gulp.task('build', gulp.series('js', 'css', 'images', async function(){
  console.log('build success!');
}))

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
