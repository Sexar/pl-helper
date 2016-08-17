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
        var tsSettings = {},
            uglifySettings = {};


        // Set TypeScript settings.
        tsSettings.outFile = 'pl-helper.min.js';
        tsSettings.target  = 'ES5';


        return gulp.src('source/typescript/Helper.ts')
            .pipe(ts(tsSettings))
            .pipe(uglify(uglifySettings))
            .pipe(gulp.dest('public/'));
    });

})();