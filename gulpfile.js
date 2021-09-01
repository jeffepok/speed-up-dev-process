const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
 
// Compile .scss to .css file
function compileCSS() {
  return gulp
    .src("app/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
}
 
// Watch for changes
function watchChanges() {
  browserSync.init({
    server: "./app/",
    index: "./index.html",
  });
 
  gulp.watch("app/scss/*.scss", compileCSS);
  gulp.watch("./app/*.html").on("change", browserSync.reload);
  gulp.watch("./js/*.js").on("change", browserSync.reload);
}
function watch(){
  watchChanges();
  compileCSS();
}
exports.compileCSS = compileCSS;
exports.watchChanges = watchChanges;
exports.default = watch;