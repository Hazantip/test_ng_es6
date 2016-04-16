// main
const gulp          = require('gulp');
const sourcemaps    = require('gulp-sourcemaps');
const browserSync   = require('browser-sync').create();
// js
const babel         = require('gulp-babel');
const eslint        = require('gulp-eslint');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
// css
const postcss       = require('gulp-postcss');
const cssnano       = require('cssnano');
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

gulp.task('default', ['watch']);

gulp.task('js',function () {
    return gulp.src(
        [
            'static/js/frameworks/*.js',
            'static/js/libraries/*.js',
            'static/js/plugins/*.js',
            'static/js/angular/app.js',
            'static/js/angular/controllers/*.js',
            'static/js/es6/dist/*.js',
            'static/js/*.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js/'))
        //.pipe(uglify({mangle: false})) // hidden for speed
        //.pipe(gulp.dest('build/js/min/'))
        .pipe(browserSync.reload({stream: true}));

});

gulp.task('es6', function () {
    // Run eslint, babel
    return gulp.src( 'static/js/es6/*.js' )
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(babel())
        .pipe(gulp.dest( 'static/js/es6/dist' ))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function () {
    const processors = [ autoprefixer, cssnano ];
    return gulp.src(src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', function (err) {
            console.error('Error!', err.message);
        }))
        .pipe(postcss(processors))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css/') )
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['js', 'es6', 'css'],function () {
    browserSync.init({
        server: {
            baseDir: 'build/'
        },
        logLevel: 'debug'
    });
    gulp.watch('build/**/*.html').on('change', browserSync.reload);
    gulp.watch('static/**/*.scss', ['css']);
    gulp.watch('static/**/*.js', ['js'] );
});

//  TODO: 1. optimize css task speed;
//  TODO: 2. css minimize;
//  TODO: 3. image minimize;
//  TODO: 4. img/svg sprite;

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