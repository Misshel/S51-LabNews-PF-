const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const nodemon = require('gulp-nodemon');


var config = {
  source: './src/',
  dist: './public'
};


var paths = {
  assets: "/assets/",
  img: "assets/img/*",
  js: "assets/js/*",
  html: "**/*.html",
  sass: "scss/**/*.scss",
  materializeJs: "assets/js/materialize.min.js",
  mainSass: "scss/style.scss",
  materializeSass: "scss/sass/materialize.scss",
  componentsFolder: "./src/assets/js/components/"
};


var sources = {
  assets: config.source + paths.assets,
  img: config.source + paths.img,
  rootComponents: config.source + paths.assets + paths.components,
  materializeJs: config.source + paths.materializeJs,
  js: config.source + paths.js,
  rootMaterialize: config.source + paths.assets + paths.materializeSass,
  sass: paths.assets + paths.sass,
  html: config.source + paths.html,
  rootSass: config.source + paths.assets + paths.mainSass,
  icons: config.source + paths.assets + paths.icons
};


//minifica y concatena todos los componentes del proyecto
gulp.task('js', () => {
  gulp.src([sources.materializeJs, paths.componentsFolder+'navbar.js',paths.componentsFolder+'header.js',
  paths.componentsFolder+'news-board.js', paths.componentsFolder+'new.js', sources.js+'app.js' ])
  .pipe(concat("app.js"))
  .pipe(gulp.dest(config.dist + paths.assets + "js"));
});


gulp.task('html', ()=>{
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('img', ()=>{
  gulp.src(sources.img).pipe(gulp.dest(config.dist + paths.assets + "img"));
});

gulp.task('sass', ()=>{
  gulp.src(sources.rootSass)
  .pipe(sass({
    outputStyle: "compressed"
  }).on("Error", sass.logError))
  .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

//actualizan los cambios segun cada archivo
gulp.task("sass-watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("html-watch", ["html"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("js-watch", ["js"], function (done) {
  browserSync.reload();
  done();
});

// actualiza los cambios en los archivos
gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: config.dist
    }
  });

  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(sources.rootSass, ["sass-watch"]);
  gulp.watch(sources.rootMaterialize, ["materialize"]);
  gulp.watch(['./src/assets/js/components/*.js', sources.js+'app.js'], ["js-watch"]);
});
