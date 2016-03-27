// include the required packages.
var gulp = require('gulp')
var stylus = require('gulp-stylus')
var concat = require('gulp-concat')
var config = require('./config')

// Get one .styl file and render

gulp.task('dev', function () {
  return gulp.src(config.css.in)
    .pipe(stylus({
      'include css': true
    }))
    .pipe(concat(config.css.name))
    .pipe(gulp.dest(config.css.out))
})

// Options compress
gulp.task('compress', function () {
  return gulp.src(config.css.in)
    .pipe(stylus({
      'include css': true,
      compress: true
    }))
    .pipe(concat(config.css.name))
    .pipe(gulp.dest(config.css.out))
})

if (config.isDev) gulp.task('default', ['dev'])
if (!config.isDev) gulp.task('default', ['compress'])
