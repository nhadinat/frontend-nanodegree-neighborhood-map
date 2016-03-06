///////////////* Setup *///////////////

var gulp = require('gulp'),
  del = require('del'),
  merge = require('merge-stream'),
  imageminPngquant = require('imagemin-pngquant'),
  // concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  // concatCss = require('gulp-concat-css'),
  minifyCSS = require('gulp-minify-css'),
  rename = require("gulp-rename"),
  minifyHTML = require('gulp-minify-html'),
  // uncss = require('gulp-uncss'),
  inlinesource = require('gulp-inline-source'),
  ghPages = require('gulp-gh-pages');

///////////////* Stream *///////////////

// Clean Dist
gulp.task('clean', function (cb) {
  del(['./dist/**'], cb);
});

// Concatenate And Minify JavaScript
gulp.task('js', function(){
  return gulp.src('./js/*')
    .pipe(rename('*.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// Minify CSS
gulp.task('css', ['js'], function(){
  return gulp.src('./css/*.css')
    .pipe(rename('style.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'));
});

// Minify HTML
gulp.task('html', ['css'], function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('./*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist'));
});

// Inline HTML Sources
gulp.task('inline', ['html'], function() {
  return gulp.src('./dist/*.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('./dist'));
});

// Publish to gh-pages
gulp.task('deploy', ['inline'], function() {
  return gulp.src('./dist/**/**/*')
  .pipe(ghPages());
});

///////////////* Default *///////////////
// DEFAULT Group: Optimize, Build, then Deploy
gulp.task('default', ['js', 'css', 'html', 'inline', 'deploy']);

///////////////* Watch *///////////////
// Watch
gulp.task('watch', function () {
    gulp.watch('./src/**', ['default']);
});
