import gulp from 'gulp';
import cache from 'gulp-cache';
import concat from 'gulp-concat'
import cssnano from 'gulp-cssnano';
import rename from 'gulp-rename';
import del from 'del';
import gulpSass from 'gulp-sass'
import sass from 'sass'
import minify from 'gulp-minify';

const sassModule = gulpSass(sass)

const PATH = {
    dev: {
        index: './',
        img: 'img/*',
        scss: './scss/*',
        css: './css/',
        css_libs: './css/libs/*.css',
        js: './js/*',
    },
    dist: {
        index: 'dist/',
        img: 'dist/img',
        css: 'dist/css',
        js: 'dist/js',
    }
}

gulp.task('watch', function () {
    gulp.watch(PATH.dev.scss, gulp.series('scss'))
})

gulp.task('scss', function () {
    return gulp.src(PATH.dev.scss)
        .pipe(sassModule().on('error', sassModule.logError))
        .pipe(concat('main.css'))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(PATH.dev.css));
});

gulp.task('css-libs', gulp.series(
    function () {
        return gulp.src(PATH.dev.css_libs)
            .pipe(cssnano())
            .pipe(rename({ suffix: '.min' }))
    }));



gulp.task('compress-js', gulp.series(
    function () {
        return gulp.src(PATH.dev.js)
            .pipe(concat('main.js'))
            .pipe(minify())
            .pipe(gulp.dest(PATH.dist.js))
            .on('end', function () {
                del.sync([PATH.dist.js + '/main.js']);
            });
    }
))

gulp.task('image', gulp.series(
    function () {
        return gulp.src(PATH.dev.img)
            .pipe(gulp.dest(PATH.dist.img))
    }
))


gulp.task('clean', function () {
    del.sync('dist')
});


gulp.task('build', gulp.series('scss', 'css-libs', 'compress-js', 'image', function (done) {
    gulp.src(PATH.dev.css + 'main.min.css').pipe(gulp.dest(PATH.dist.css))
    gulp.src(PATH.dev.index + 'index.html').pipe(gulp.dest(PATH.dist.index))
    gulp.src(PATH.dev.img).pipe(gulp.dest(PATH.dist.img));
    done()
}));