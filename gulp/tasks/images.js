const gulp = require('gulp');

module.exports = function copyImages() {
    return gulp.src('src/img/*.*')
        .pipe(gulp.dest('build/img'));
}