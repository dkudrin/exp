import gulp from 'gulp'
import watch from 'gulp-watch'
import webpack from 'webpack'
import gutil from 'gulp-util'
import del from 'del'
const NODE_ENV = process.env.NODE_ENV || 'development'

gulp.task('back', function (cb) {
  webpack(require('./webpack.config.back.babel.js'), function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString({
        // output options
    }))
    
    cb()
  })
})

gulp.task('front', function (cb) {
  webpack(require('./webpack.config.front.babel.js'), function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString({
        // output options
    }))
    
    cb()
  })
})


gulp.task('copy_Index_html', function(cb) {
  gulp.src('./srcfront/index.html')
  .pipe(gulp.dest('./binfront'))
  
  cb()
})

gulp.task('copy_img', function(cb) {
  gulp.src('./srcfront/img/*')
  .pipe(gulp.dest('./binfront/img/'))
  
  cb()
})

gulp.task('clean', (cb) => {
  del(['binback/*', 'binfront/*']).then(paths => {
  	console.log('Deleted files and folders:\n', paths.join('\n'))
  })
  cb()
})

gulp.task('build', gulp.series('clean', gulp.parallel('back', 'front', 'copy_Index_html','copy_img')))

gulp.task('watch', (cb) => {
  gulp.watch('./srcfront/img/*', gulp.series('copy_img'))
  gulp.watch('./srcfront/img/*', gulp.series('copy_img'))
  cb()
})

gulp.task('dev',  gulp.series('build', 'watch'))