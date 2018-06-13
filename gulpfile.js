"use strict";

  var gulp = require('gulp'),
      sass = require('gulp-sass'),
    rename = require('gulp-rename'),
      maps = require('gulp-sourcemaps'),
       del = require('del'),
    useref = require('gulp-useref'),
       iff = require('gulp-if'),
    uglify = require('gulp-uglify'),
 minifyCss = require('gulp-clean-css'),
   htmlmin = require('gulp-htmlmin'),
      sync = require('browser-sync').create();


var options = {
  src: 'src',
  dist: 'dist'
}

// Sass compile to css
gulp.task('styles', function() {
  return gulp.src(options.src + "/scss/application.scss")
      .pipe(maps.init())
      .pipe(sass())
      .pipe(maps.write('./'))
      .pipe(gulp.dest(options.src + '/css'))
      .pipe(sync.stream());
})

// Useref
gulp.task('usehtml',['styles'], function() {
  return gulp.src(options.src + '/**/*.html')
      .pipe(useref())
      .pipe(iff('*.js', uglify()))
      .pipe(iff('*.css', minifyCss()))
      .pipe(iff('*.html', htmlmin({collapseWhitespace: true})))
      .pipe(gulp.dest(options.dist));
});

// Watch & Serve Task
gulp.task('watchFiles', function() {

    sync.init({
        server: "./dist",
        open: false
    });

    gulp.watch(options.src + '/scss/**/*.scss', ['styles']);
    gulp.watch(options.src + '**/*.html').on('change', sync.reload);
});

gulp.task('serve', ['watchFiles']);

// Build task
gulp.task("build", ['usehtml'], function() {
  return gulp.src([
    options.src + "/img/**",
    options.src + "/fonts/**",
    ], { base: options.src})
    .pipe(gulp.dest(options.dist));
});

gulp.task('clean', function() {
    del(['dist', options.src + '/css']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});



















