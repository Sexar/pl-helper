(function (){
    'use strict';

    var gulp   = require('gulp'),
        ts     = require('gulp-typescript'),
        uglify = require('gulp-uglify');


    /**
     *
     * Reference: https://www.npmjs.com/package/gulp-typescript/
     */
    gulp.task('typescript', function() {
        var settings = {
            outFile: 'pl-helper.js',
            target: 'ES5'
        };

        return gulp.src('source/typescript/Helper.ts')
            .pipe(ts(settings))
            .pipe(gulp.dest('public/'));
    });

})();