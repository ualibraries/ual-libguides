const gulp = require('gulp')
const localtunnel = require('localtunnel')
const connect = require('gulp-connect')
const localPort = 8000

// Default build tas
gulp.task('default', () => {
  return gulp.src('src/**/*')
  .pipe(gulp.dest('dist'))
})

gulp.task('serve', () => {
  let tunnel = localtunnel(localPort, function(err, tunnel) {
    if (err) {
      console.warning(err)
    }

    console.log(`Your local url is: ${tunnel.url}`);
  })


  tunnel.on('close', function() {
    // tunnels are closed
  })

  connect.server({
    root: 'dist',
    port: localPort,
    debug: true
  })
})
