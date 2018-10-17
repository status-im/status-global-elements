const gulp = require('gulp');
// const minify = require('gulp-minify');
// const babel = require('gulp-babel');
// const sourcemaps = require('gulp-sourcemaps');
// const resolveDependencies = require('gulp-resolve-dependencies');
// const concat = require('gulp-concat');
// const headerComment = require('gulp-header-comment');
const replace = require('gulp-token-replace');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('html', function(){
    var config = require('./configuration/config.json');
    return gulp.src(['src/html/*.html'])
        .pipe(replace({global:config}))
        .pipe(gulp.dest('dist/html'))
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('img', function () {
    return gulp.src('src/img/*.*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
    gulp.watch('src/html/*.html', ['html']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/img/*.*', ['img']);
});

gulp.task('default', ['watch']);