const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

function compilaSass(){
    return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/styles'));
}

function compilaJS(){
    return gulp.src('./src/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}


function compilaImages(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(compilaSass, compilaJS, compilaImages);

exports.watch = function(){
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(compilaSass));
    gulp.watch('./src/scripts/**/*.js', gulp.parallel(compilaJS));
}