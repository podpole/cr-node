var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    replace = require('gulp-replace'),
    ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', ['css-libs', 'fonts', 'sass', 'js-libs'], function() {

});

gulp.task('css-libs', function () {
  return gulp.src([
    'bower_components/bootstrap/dist/css/bootstrap.min.css'
  ])
  .pipe(replace('../fonts/', '/fonts/'))
  .pipe(gulp.dest('assets/styles/libs/'));
});
gulp.task('fonts', function () {
  return gulp.src([
    'bower_components/bootstrap/fonts/**/*'
  ])
    .pipe(gulp.dest('assets/fonts/'));
});

gulp.task('sass', function () {
    return gulp.src(['assets/sass/*.sass'])
        .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('assets/styles'))
});
gulp.task('js-libs', function () {
  return gulp.src([
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.min.js',
    'node_modules/reflect-metadata/Reflect.ts/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/jquery-ui/jquery-ui.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('assets/js/libs/'))
});

gulp.task('typescript', function() {
  var tsResult = tsProject.src(gulp.src(
    [
      'assets/js/boApp/**/*.ts'
    ]
  ))
    .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest('assets/js/boApp'));
});

gulp.task('css', function () {
    return gulp.src(['app/styles/*.css'])
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/styles'))
});

gulp.task('layouts', function () {
    return gulp.src(['app/index.html'])
        .pipe(gulp.dest('src'));
});

gulp.task('templates', function () {
    return gulp.src(['app/tpl/*.html'])
        .pipe(gulp.dest('src/tpl'));
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('src/img'));
});
gulp.task('config', function () {
    return gulp.src(['app/.htaccess'])
        .pipe(gulp.dest('src'));
});

gulp.task('watch', function () {
    gulp.watch(['app/styles/*.sass'], ['sass']);
    gulp.watch(['src/styles/main.css'], ['css-libs']);
});


gulp.task('default', ['watch']);
