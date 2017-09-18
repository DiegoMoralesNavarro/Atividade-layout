var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', ()=> {
	return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
        .pipe(sass())
        .pipe(gulp.dest("css"))
});

gulp.task('js', ()=> {
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("js"))
});

gulp.task('default', ['js','sass']);