const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const imagemin = require('gulp-imagemin');

//html
gulp.task('htmlmin', () => {
    return gulp.src('src/xianyuzhuye/zhuye.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/html'));
});

//css
gulp.task('cssmin', () => {
    return gulp.src('src/xianyuzhuye/taobao.css')
        .pipe(cssmin())
        .pipe(rename(function(path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('dist/css'));
});
//图片
gulp.task('imgmin', () => {
    return gulp.src('src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'));
});