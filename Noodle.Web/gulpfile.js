var gulp = require("gulp");
var args = require("yargs").argv;
var config = require("./gulp.config")();
var $ = require("gulp-load-plugins")({ lazy: true });

gulp.task("compile-typescript", function () {
    console.log('Compiling typescript');
    return gulp.src(config.ts.files)
           .pipe($.typescript(config.ts.options))
           .js
           .pipe(gulp.dest(config.ts.dest));
});