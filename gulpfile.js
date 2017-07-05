/**
 * Created by Administrator on 2017/7/5.
 */
/*
var gulp = require('gulp');
var babel = require('gulp-babel'); //ES6 转 ES5 插件
var uglify = require('gulp-uglify'); //js 压缩插件
var bom = require('gulp-bom'); //解决中文乱码插件
var minifyCss = require('gulp-minify-css'); //css 压缩插件

// var minifyHtml = require('gulp-minify-html'); //html 压缩插件
// var imagemin = require('gulp-imagemin'); //图片压缩相关插件
// var pngquant = require('imagemin-pngquant'); //png 图片压缩插件
// var rename = require('gulp-rename'); //重命名插件
//压缩 js
/!*
gulp.task('jsTask', function(){
    gulp.src('src/js/!*')
    // .pipe(bom())
        .pipe(uglify())
        .pipe(gulp.dest('dest/js'));
});
*!/


//压缩js
gulp.task('jsTask', function(){
    gulp.src('src/js/!*')
        .pipe(babel({presets:['es2015']})) //es6转es5
        .pipe(uglify()) //js压缩
        .pipe(gulp.dest('dest/js'));
});
gulp.task('default', ['jsTask']);

/!*!//压缩 css
gulp.task('cssTask', function(){
    gulp.src('src/css/!*')
        .pipe(minifyCss())
        .pipe(gulp.dest('dest/css'));
});*!/
//压缩 html
/!*gulp.task('htmlTask2', function(){
    gulp.src('src/html/!*')
        .pipe(minifyHtml())
        .pipe(gulp.dest('dest/html'));
});*!/
//压缩图片
/!*gulp.task('imgTask', function(){
    gulp.src('src/img/!*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //使用 pngquant 插件来压缩 png 图片
        }))
        .pipe(gulp.dest('dest/img'));
});*!/
//重命名
/!*gulp.task('renameTask', function(){
    gulp.src('src/js/bullet.js')
        .pipe(uglify())
        .pipe(rename('bullet.min.js'))
        .pipe(gulp.dest('dest/js'));
});*!/
// gulp.task('default', ['jsTask', 'cssTask', 'htmlTask2', 'imgTask',
//     'renameTask']);
/!*gulp.task('default', ['jsTask', 'cssTask']);*!/

*/


//gulp-htmlmin插件的参数对象
var obj = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
}
//压缩css
var gulp = require("gulp");//gulp对象
 var htmlmin = require("gulp-htmlmin");//使用插件
 gulp.task("htmlTask", function () {
 gulp.src("css/*")
 .pipe(htmlmin(obj))//使用插件
 .pipe(gulp.dest("dest/css"));
 });
 gulp.task("default",["htmlTask"]);
//压缩js

/*

var gulp = require('gulp');
var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件

//压缩js
gulp.task('jsTask', function(){
    gulp.src('js/!*')
        .pipe(babel({presets:['es2015']})) //es6转es5
        .pipe(uglify()) //js压缩
        .pipe(gulp.dest('dest/js'));
});
gulp.task('default', ['jsTask']);

*/
