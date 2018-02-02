var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var mmq = require('gulp-merge-media-queries');
// var purge = require('gulp-css-purge');
// let dedupe = require('gulp-dedupe');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

//var sync = require('browser-sync').create();

function sassify(){
    return gulp.src('./scss/tesla.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(mmq({
            log:true
        }))
        .pipe(gulp.dest('./dist/css'));
}

function minnify(){
    gulp.src('./dist/css/tesla.css')

        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix:'-min'}))
        .pipe(gulp.dest('./dist/css'));

    gulp.src('./dist/js/tesla.js')
        .pipe(uglify())
        .pipe(rename({suffix:'-min'}))
        .pipe(gulp.dest('./dist/js'));
}



gulp.task('default',['sass','js'], function () {
    gulp.watch('./scss/**/*',['sass']);
    gulp.watch('./js/*.js',['js']);
});

gulp.task('build',()=>{
  sassify();
  minnify();
});


