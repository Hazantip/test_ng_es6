// main
const gulp          = require('gulp');
const sourcemaps    = require('gulp-sourcemaps');
const browserSync   = require('browser-sync').create();

// js
const babel         = require('gulp-babel');
const eslint        = require('gulp-eslint');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify'); // !!! --> task commented

// css
const postcss       = require('gulp-postcss');
const cssnano       = require('cssnano'); // !!! --> task commented
const sass          = require('gulp-sass');
const autoprefixer  = require('autoprefixer');

// path
const staticPath = 'static/';
const buildPath  = 'build/';
const src = {
    js  : staticPath + 'js/**/*.js',
    scss: staticPath + 'sass/*.scss',
    css : staticPath + 'css/*.css',
    html: buildPath  + '**/*.html'
};

//  TODO: 1. optimize css task speed;
//  TODO: 2. css minimize;
//  TODO: 3. image minimize;
//  TODO: 4. img/svg sprite;
//  TODO: 5. some html handler;

gulp.task('default', ['watch']);

gulp.task('watch', ['js', 'es6', 'css'],function () {
    browserSync.init({
        server: { baseDir: buildPath },
        logLevel: 'debug'
    });
    gulp.watch( buildPath  + '**/*.html' ).on('change', browserSync.reload);
    gulp.watch( staticPath + '**/*.scss', ['css']);
    gulp.watch( staticPath + '**/*.js', ['js'] );
});

/**
 * Here file concatenation order
 * and
 * other js tasks
 */
gulp.task('js',function () {
    return gulp.src(
        [
            staticPath + 'js/frameworks/*.js',
            staticPath + 'js/libraries/*.js',
            staticPath + 'js/plugins/*.js',
            staticPath + 'js/angular/app.js',
            staticPath + 'js/angular/**/*.js',
            staticPath + 'js/es6/dist/*.js',
            staticPath + 'js/*.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest( buildPath + 'js/'))
        //.pipe(uglify({mangle: false})) // hidden for speed
        //.pipe(gulp.dest( buildPath + 'js/min/'))
        .pipe(browserSync.reload({stream: true}));

});

gulp.task('es6', function () {
    // Run eslint, babel
    return gulp.src( staticPath + 'js/es6/*.js' )
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(babel())
        .pipe(gulp.dest( staticPath + 'js/es6/dist' ))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function () {
    //const processors = [ autoprefixer({browsers: ["> 1%","last 2 versions","Firefox ESR","android 4"]}), cssnano ]; // hidden for speed
    const processors = [ autoprefixer({browsers: ["> 1%","last 2 versions","Firefox ESR","android 4"]}) ];
    return gulp.src(src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', function (err) {
            console.error('Error!', err.message);
        }))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest( buildPath + 'css/') )
        .pipe(browserSync.reload({stream: true}));
});

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