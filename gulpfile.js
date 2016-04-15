const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('default', function () {

    // Run ESLint
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());

    // Node source
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    browserSync.init({
        server: {
            baseDir: "",
            logLevel: "debug"
        }
    });

    gulp.watch([
        '*.html',
        'css/**/*.css',
        'js/**/*.js',
        'es6/**/*.js'
    ], {cwd: ''}, reload);

});


// TODO: scss watcher | concat for js,css | sourcemaps
//tars.packages = {
//    autoprefixer: tars.require('autoprefixer'),
//    browserSync: tars.require('browser-sync'),
//    cache: tars.require('gulp-cached'),
//    changed: tars.require('gulp-changed'),
//    chokidar: tars.require('chokidar'),
//    concat: tars.require('gulp-concat'),
//    data: tars.require('gulp-data'),
//    del: tars.require('del'),
//    gulp: require('gulp'),
//    gulpif: tars.require('gulp-if'),
//    gutil: gutil,
//    importify: tars.require('gulp-importify'),
//    notify: tars.require('gulp-notify'),
//    plumber: tars.require('gulp-plumber'),
//    postcss: tars.require('gulp-postcss'),
//    rename: tars.require('gulp-rename'),
//    replace: tars.require('gulp-replace-task'),
//    runSequence: tars.require('run-sequence'),
//    sourcemaps: tars.require('gulp-sourcemaps'),
//    streamCombiner: tars.require('stream-combiner'),
//    through2: tars.require('through2')
//};