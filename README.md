# gulp-svg-wrap

Make SVG React readble

## Usage

```javascript
import gulp from 'gulp';
import gulpSvgWrap from 'gulp-svg-wrap';

gulp.task('default', function () {
    return gulp.src('svg/*.svg')
        .pipe(gulpSvgWrap())
        .pipe(gulp.dest('./out'));
});
```


