'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
const gutil = require("gulp-util");
const NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('back', function (cb) {
  webpack(require('./webpack.config.back.babel.js'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        cb();
    });
});

gulp.task('front', function (cb) {
  webpack(require('./webpack.config.front.babel.js'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        cb();
    });
});

gulp.task('copy_Index_html', function(cb) {
    gulp.src('./srcfront/index.html')
    .pipe(gulp.dest('./binfront'));
    cb();
});

gulp.task('default', gulp.parallel('back', 'front', 'copy_Index_html'));
