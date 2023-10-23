import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

gulp.task('convertAndMinify', async () => {
	return await gulp
		.src('./*.{jpg,png}')
		.pipe(imagemin())
		.pipe(webp())
		.pipe(gulp.dest('./dist/imgs'));
});


gulp.task('default', gulp.series('convertAndMinify'));
