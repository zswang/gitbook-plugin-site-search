/*jshint globalstrict: true*/
/*global require*/

'use strict'

const gulp = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

gulp.task('uglify', function () {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./assets'))
})

gulp.task('dist', ['uglify'])