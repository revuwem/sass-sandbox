const gulp = require('gulp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');
const terser = require('gulp-terser');
const rename = require('gulp-rename');

module.exports = function scriptsBuild () {
    return gulp.src('src/js/main.js')
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [ '@babel/preset-env' ]
        }))        
        .pipe(terser())         
        .pipe(rename({suffix: '.min'}))    
        .pipe(sourcemaps.write('.'))        
        .pipe(gulp.dest('build/js'));
};
