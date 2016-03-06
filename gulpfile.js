///////////////* Setup *///////////////

var gulp = require('gulp'),
  del = require('del'),
  merge = require('merge-stream'),
  uglify = require('gulp-uglify'),
  minifyCSS = require('gulp-minify-css'),
  rename = require("gulp-rename"),
  minifyHTML = require('gulp-minify-html'),
  inlinesource = require('gulp-inline-source'),
  ghPages = require('gulp-gh-pages');

///////////////* Stream *///////////////

// Clean Dist
gulp.task('clean', function (cb) {
  del(['./dist/**'], cb);
});

// Move to dist
gulp.task('css', function() {
  return gulp.src('css/*')
  .pipe(gulp.dest('dist/css'));
});

// Move to dist
gulp.task('js', ['css'], function() {
  return gulp.src('js/**/*')
  .pipe(gulp.dest('dist/js'));
});

// Move to dist
gulp.task('html', ['js'], function() {
  return gulp.src('./*.html')
  .pipe(gulp.dest('dist/'));
});

// Publish to gh-pages
gulp.task('deploy', ['html'], function() {
  return gulp.src('dist/**/*')
  .pipe(ghPages());
});

///////////////* Default *///////////////
// DEFAULT Group: Optimize, Build, then Deploy
gulp.task('default', ['css', 'js', 'html', 'deploy']);