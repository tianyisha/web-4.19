const gulp = require('gulp');
const server = require('gulp-webserver');
gulp.task('webserver', () => {
    return gulp.src('.')
        .pipe(server({
            port: 8080,
            open: true,
            livereload: true
        }))
})