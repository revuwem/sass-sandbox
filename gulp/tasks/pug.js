const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const pugLinter = require('gulp-pug-linter');
const htmlValidator = require('gulp-w3c-html-validator');

module.exports = function pugBuild(cb){
    return gulp.src('src/pages/*.pug')
        .pipe(plumber())
        .pipe(pugLinter())
        .pipe(pug())
        .pipe(htmlValidator())
        .pipe(gulp.dest('build'));
};
