var gulp = require('gulp');
var tsc = require('gulp-typescript');
var sourcemap = require('gulp-sourcemaps');
var del = require('del');
var tslint = require('gulp-tslint');
var config = require('./gulp.config')();
var tsProject = tsc.createProject('tsconfig.json');
/* Images */
var imagemin = require('gulp-imagemin');
/* style */
var sass  = require('gulp-sass');


gulp.task('clean', function(cb) {
    del(['client/js/**/*'], cb);
});

gulp.task('ts-lint', function() {

	// return gulp
	// 	.src(config.client.allTs)
	// 	.pipe(tslint())
	// 	.pipe(tslint.report('prose', {
	// 		emmitError: false
	// 	}))
});

gulp.task('compile-ts', function() {

	var sourceTsFiles = [
		config.client.allTs,
		config.client.typings
	];

	var toResult = gulp
		.src(sourceTsFiles)
		.pipe(sourcemap.init())
		.pipe(tsc(tsProject));

	return toResult.js
		.pipe(sourcemap.write('.'))
		.pipe(gulp.dest(config.client.root));
});

gulp.task('compile-server-ts', function() {
	var sourceTsFiles = config.server.allTs;
	return gulp
		.src(sourceTsFiles)
		.pipe(sourcemap.init())
		.pipe(gulp.dest(config.server.toOutputhPath));
		
});

gulp.task('build_sass', function() {
    return gulp.src(config.client.scss)
        .pipe(sass({ outputStyle: 'compressed' })
            .on('error', sass.logError)
         )
        .pipe(gulp.dest(config.client.scssOut));
});

gulp.task('build_img', function () {
    return gulp.src(config.client.images)
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(config.client.imagesOut));
});

gulp.task('build_svg_img', function () {
    return gulp.src(config.client.svgImages)
        .pipe(gulp.dest(config.client.imagesOut));
});

gulp.task('copy_fonts', function () {
    return gulp.src(config.client.fonts)
        .pipe(gulp.dest(config.client.fontsOut));
});
gulp.task('copy_favicon', function () {
    return gulp.src(config.client.favicon)
        .pipe(gulp.dest(config.client.root));
});

gulp.task('copy-html', [ 'build_sass'], function () {
    return gulp
        .src(config.client.srcTemplateHTML)
        .pipe(gulp.dest(config.client.root))
});

gulp.task('copy-css', function () {
    return gulp
        .src(config.client.srcTemplateCSS)
        .pipe(gulp.dest(config.client.root))
});

// compile each time when we change something in /src folder

gulp.task('watch', ['ts-lint', 'compile-ts', 'compile-server-ts'], function() {
	gulp.watch([config.client.allTs], ['ts-lint', 'compile-ts', 'compile-server-ts', 'copy-html', 'copy-css']);	
});

gulp.task('default', ['clean', 'ts-lint', 'compile-ts', 'compile-server-ts', 'copy-html', 'copy-css', 'build_img', 'build_svg_img', 'copy_favicon', 'copy_fonts']);
