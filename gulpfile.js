//gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');
//const bourbon = require('bourbon');

//style paths
var sassFiles = 'assets/css/sass/**/*.scss',
    cssDest = 'assets/css/';

gulp.task('styles', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch',function() {
    gulp.watch(sassFiles,['styles']);
});
