const gulp = require('gulp');

const pug = require('./pug');
const styles = require('./styles');
const scripts = require('./scripts');
const copyDependicies = require('./copyDependicies');

const server = require('browser-sync').create();

function serverReload(cb){
    server.reload();
    cb();
};

module.exports = function serve(cb){
    server.init({
        server: 'build',
        notify: true,
        open: true,
        cors: true
    });

    gulp.watch('src/pages/**/*.pug', gulp.series(pug, serverReload));
    gulp.watch('src/styles/**/*.scss', gulp.series(styles, serverReload));
    gulp.watch('src/scripts/**/*.js', gulp.series(scripts, serverReload));
    gulp.watch('package.json', gulp.series(copyDependicies, serverReload));

    return cb();
};