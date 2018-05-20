"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    maps = require('gulp-sourcemaps'),
     del = require('del'),
    sync = require('browser-sync').create();

// JS Task scripts
gulp.task('scripts', function() {
    return gulp.src([
      'js/popper.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'js/custom.js'
      ])
    .pipe(maps.init())
    .pipe(concat('scripts.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

gulp.task('minify', ['scripts'], function() {
  return gulp.src("js/scripts.js")
  .pipe(uglify())
  .pipe(rename('scripts.min.js'))
  .pipe(gulp.dest('js'));
})


gulp.task('styles', function() {
  return gulp.src("scss/style.scss")
      .pipe(maps.init())
      .pipe(sass())
      .pipe(maps.write('./'))
      .pipe(gulp.dest('css'))
      .pipe(sync.stream());
})

// Watch & Serve
gulp.task('watchFiles', function() {

    sync.init({
        server: "./",
        open: false
    });

    gulp.watch('scss/**/*.scss', ['styles']);
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch("**/*.html").on('change', sync.reload);
});

gulp.task('serve', ['watchFiles']);




// Build & Clean
gulp.task('build', ['minify', 'styles'], function() {
    return gulp.src(['css/style.css', 'js/scripts.min.js', 'index.html',
     'img/**', 'fonts/**'], { base: './'})
      .pipe(gulp.dest('dist'));
}); 

gulp.task('clean', function() {
    del(['dist', 'css/style.css*', 'js/scripts*.js*']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});



















