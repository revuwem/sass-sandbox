const gulp = require('gulp');

const pug = require('./gulp/tasks/pug');
const styles = require('./gulp/tasks/styles');
const scripts = require('./gulp/tasks/scripts');
const serve = require('./gulp/tasks/serve');
const clean = require('./gulp/tasks/clean');
const lighthouse = require('./gulp/tasks/lighthouse');

function setMode(isProd = false){
    return cb => {
        process.env.NODE_ENV = isProd ? 'production' : 'development';
        cb();
    };
};

const dev = gulp.parallel(pug, styles, scripts);

const build = gulp.series(clean, dev);

module.exports.start = gulp.series(setMode(), build, serve);
module.exports.build = gulp.series(setMode(true), build);

module.exports.lighthouse = gulp.series(lighthouse);