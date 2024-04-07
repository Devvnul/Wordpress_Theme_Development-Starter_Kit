const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

function build_styles() {
  return gulp
    .src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

function build_scripts() {
  return gulp
    .src('src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

const build = gulp.series(build_styles, build_scripts);
exports.styles = build_styles;
exports.scripts = build_scripts;
exports.build = build;

function watch() {
  browserSync.init({
    proxy: 'your-local-url.example',
    open: 'external',
  });

  gulp.watch('src/**/*.scss', build_styles);
  gulp.watch('src/**/*.js', build_scripts);
  gulp.watch('./src/**/*.scss').on('change', browserSync.reload);
  gulp.watch('./src/**/*.js').on('change', browserSync.reload);
  gulp.watch('./**/*.php').on('change', browserSync.reload);
}

exports.watch = watch;
