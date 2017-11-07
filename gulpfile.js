var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

var paths = {
    styles: {
        src: 'scss/style.scss',
        dest: 'css'
    },
    scripts: {
        src: 'js/script.js',
        dest: 'js'
    }
};

function styles() {
	return gulp.src(paths.styles.src)
			.pipe(sourcemaps.init())
			.pipe(sass({outputStyle: 'compressed'}))
			.pipe(sourcemaps.write())
			.pipe(rename({suffix: '-min'}))
			.pipe(gulp.dest(paths.styles.dest))
			.pipe(browserSync.stream());
}

function scripts() {
	return gulp.src(paths.scripts.src)
			.pipe(uglify())
			.pipe(rename({suffix: '-min'}))
			.pipe(gulp.dest(paths.scripts.dest))
}

function watch() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "./"    
        }
    });
    browserSync.watch(['./*.html', './js/script-min.js', './css/style-min.css'], browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;

gulp.task('default', gulp.series(
    gulp.parallel(styles, scripts),
    gulp.parallel(watch, serve)
));

// gulp.task('build', gulp.parallel(
// 	styles,
// 	scripts
// ))