
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


var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var babel = require('gulp-babel'); //es6转es5
var uglify = require("gulp-uglify");
var minifyCss = require('gulp-minify-css'); //css压缩插件

gulp.task("htmlTask",function(){
	gulp.src("src/html/打飞机.html")
	    .pipe( htmlmin(obj) )
	    .pipe( gulp.dest("dest/html") );
})

gulp.task("bullett",function(){
	gulp.src("src/js/bullett.js")
	    .pipe(babel({"presets": ["es2015"]})) //es6转es5
	    .pipe( uglify() )
	    .pipe( gulp.dest("dest/js") );
})

gulp.task("common",function(){
	gulp.src("src/js/common.js")
	    .pipe(babel({"presets": ["es2015"]})) //es6转es5
	    .pipe( uglify() )
	    .pipe( gulp.dest("dest/js") );
})

gulp.task("enemy",function(){
	gulp.src("src/js/enemy.js")
	    .pipe(babel({"presets": ["es2015"]})) //es6转es5
	    .pipe( uglify() )
	    .pipe( gulp.dest("dest/js") );
})

gulp.task("gameengine",function(){
	gulp.src("src/js/gameengine.js")
	    .pipe(babel({"presets": ["es2015"]})) //es6转es5
	    .pipe( uglify() )
	    .pipe( gulp.dest("dest/js") );
})

gulp.task("myplane",function(){
	gulp.src("src/js/myplane.js")
	    .pipe(babel({"presets": ["es2015"]})) //es6转es5
	    .pipe( uglify() )
	    .pipe( gulp.dest("dest/js") );
})

gulp.task("cssTask",function(){
	gulp.src("src/css/dafeiji.css")
	    .pipe( minifyCss() )
	    .pipe( gulp.dest("dest/css") );
})


gulp.task("default",["htmlTask","bullett","common","enemy","gameengine","myplane","cssTask"]);













