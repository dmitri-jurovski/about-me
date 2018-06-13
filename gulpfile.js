"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
    maps = require('gulp-sourcemaps'),
    sync = require('browser-sync').create();


var options = {
  src: 'src',
  dist: 'dist'
}

// // JS Task scripts
// gulp.task('scripts', function() {
//     return gulp.src([
//       'js/jquery-3.3.1.min.js',
//       'js/popper.js',
//       'node_modules/bootstrap/dist/js/bootstrap.js',
//       'js/fontawesome-all.min.js',
//       'js/custom.js'
//       ])
//     .pipe(maps.init())
//     .pipe(concat('scripts.js'))
//     .pipe(maps.write('./'))
//     .pipe(gulp.dest('js'));
// });


gulp.task('styles', function() {
  return gulp.src(options.src + "/scss/style.scss")
      .pipe(maps.init())
      .pipe(sass())
      .pipe(maps.write('./'))
      .pipe(gulp.dest(options.src + '/css'))
      .pipe(sync.stream());
})

// Watch & Serve
gulp.task('watchFiles', function() {

    sync.init({
        server: "./src",
        open: false
    });

    gulp.watch(options.src + '/scss/**/*.scss', ['styles']);
    //gulp.watch(options.src + '/js/**/*.js', ['scripts']);
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



















