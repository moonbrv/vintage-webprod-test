import gulp from 'gulp'
import scss from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import csso from 'postcss-csso'
import bs from 'browser-sync'
import sourcemaps from 'gulp-sourcemaps'
import imagemin from 'gulp-imagemin'
import path from 'path'
import watchify from 'watchify'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import gutil from 'gulp-util'
import uglify from 'gulp-uglify'
import eslint from 'gulp-eslint'
import stylelint from 'gulp-stylelint'
import injectSVG from 'gulp-inject-svg'

const browserSync = bs.create()

/* --- paths to files --- */
const paths = {
  scss: {
    entry: path.join(__dirname, 'src', 'scss', 'index.scss'),
    src: path.join(__dirname, 'src', 'scss', '**', '*'),
    dist: path.join(__dirname, 'dist', 'css')
  },
  img: {
    src: path.join(__dirname, 'src', 'img', '**', '*'),
    dist: path.join(__dirname, 'dist', 'img')
  },
  js: {
    src: path.join(__dirname, 'src', 'js', 'index.js'),
    dist: path.join(__dirname, 'dist', 'js')
  },
  html: {
    src: path.join(__dirname, 'src', 'index.html'),
    dist: path.join(__dirname, 'dist')
  },
  fonts: {
    src: path.join(__dirname, 'src', 'font', '*'),
    dist: path.join(__dirname, 'dist', 'font')
  },
  video: {
    src: path.join(__dirname, 'src', 'video', '*'),
    dist: path.join(__dirname, 'dist', 'video')
  }
}

/* --- fonts --- */
gulp.task('fonts', () => {
  return gulp.src(paths.fonts.src)
  .pipe(gulp.dest(paths.fonts.dist))
})

/* --- video --- */
gulp.task('video', () => {
  return gulp.src(paths.video.src)
  .pipe(gulp.dest(paths.video.dist))
})

/* --- stylesheets --- */
gulp.task('scss-lint', () => {
  return gulp.src(paths.scss.src)
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
})

gulp.task('scss', ['scss-lint'], () => {
  gulp.src(paths.scss.entry)
  .pipe(sourcemaps.init())
  .pipe(scss())
  .pipe(postcss([autoprefixer(), csso()]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.scss.dist))
})

/* --- images --- */
gulp.task('images', () => {
  return gulp.src(paths.img.src)
  // .pipe(imagemin())
  .pipe(gulp.dest(paths.img.dist))
})

/* --- html --- */
gulp.task('html', () => {
  return gulp.src(paths.html.src)
  .pipe(injectSVG())
  .pipe(gulp.dest(paths.html.dist))
})

/* --- javascripts --- */
const customOpts = {
  entries: [paths.js.src],
  debug: true
}

gulp.task('javascript-lint', () => {
  return gulp.src(paths.js.src)
    .pipe(eslint('./.eslintrc'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

const brwOptions = Object.assign({}, watchify.args, customOpts)
const b = watchify(browserify(brwOptions))

function bundle () {
  return b.transform('babelify', {
    presets: ['es2015'],
    ignore: /node_modules/
  })
  .bundle()
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source('bundle.js'))
  .pipe(buffer())
  // .pipe(sourcemaps.init({loadMaps: true}))
  // .pipe(uglify())
  // .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.js.dist))
}

gulp.task('javascript', ['javascript-lint'], bundle)
b.on('update', bundle)
b.on('log', gutil.log)

gulp.task('javascript-watch', ['javascript'], (done) => {
  browserSync.reload()
  done()
})

/* --- starting development server --- */
gulp.task('serve', ['html', 'fonts', 'video', 'scss', 'images', 'javascript-watch'], () => {
  browserSync.init([paths.scss.dist, paths.img.dist, paths.js.dist, paths.html.dist], {
    reloadDelay: 500,
    server: {
      baseDir: './dist'
    }
  })
  gulp.watch(paths.html.src, ['html'])
  gulp.watch(paths.scss.src, ['scss'])
  gulp.watch(paths.img.src, ['images'])
})

/* --- copy favicon --- */
gulp.task('favicon', () => {
  return gulp.src(paths.favicon.src)
  .pipe(gulp.dest(paths.favicon.dist))
})

/* --- default --- */
gulp.task('default', ['serve'])
