var gulp = require('gulp'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    cssbeautify = require('gulp-cssbeautify'),
    sourcemaps  = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch');

gulp.task('apply-prod-environment', function() {
    process.env.NODE_ENV = 'production';
});


// Browser synchronisation
gulp.task('browserSync', function() {
    browserSync({
        server: {
          baseDir: 'public'
        },
    })
});

// Compile sass main file to a css file in webPath
gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            precision: 10,
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(cssbeautify({
            indent: '    ',
            autosemicolon: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', function () {
    watch('src/sass/**/*.scss', batch(function (events, done) {
        gulp.start('sass', done);
    }));
});

gulp.task('default', ['apply-prod-environment', 'browserSync', 'sass', 'watch']);
