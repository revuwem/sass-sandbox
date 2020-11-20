const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemap = require('gulp-sourcemaps');
const shortand = require('gulp-shorthand');
const autoprefixer = require('gulp-autoprefixer');
const gulpStylelint = require('gulp-stylelint');
const rename = require('gulp-rename');

module.exports = function sassBuild() {
    return gulp.src('src/styles/*.scss')
        .pipe(plumber())
        // .pipe(gulpStylelint({
        //     failAfterError: false,
        //     reporters: [
        //         {
        //             formatter: 'string',
        //             console: true
        //         }
        //     ]
        // }))
        .pipe(sourcemap.init())        
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(shortand())
        .pipe(cleanCSS({
            debug: true,
            compatibility: '*'
        }, details => {
            console.log(`${details.name}: Original size: ${details.stats.originalSize} bytes - Minified size: ${details.stats.minifiedSize} bytes [efficiency is ${details.stats.efficiency.toFixed(2)}]`)
        }))
        .pipe(sourcemap.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'));
}