/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
//var gulp = require("gulp"),
//  rimraf = require("rimraf"),
//  concat = require("gulp-concat"),
//  cssmin = require("gulp-cssmin"),
//  uglify = require("gulp-uglify");

//var paths = {
//    webroot: "./wwwroot/"
//};


//paths.concatJsDest = paths.webroot + "site.js";

//gulp.task("clean:js", function (cb) {
//    rimraf(paths.concatJsDest, cb);
//});
module.exports = function (grunt) {
    grunt.initConfig({

        //文件都会自动生成，先在这里配，然后通过 Task Runner Explorer 运行生成
        clean: ["wwwroot/lib/*", "temp/"],
        concat: {
            all: {
                src: ['TypeScript/Tastes.js', 'TypeScript/Food.js'],
                dest: 'temp/combined.js'
            }
        },
        jshint: {
            files: ['temp/*.js'],
            options: {
                '-W069': false,
            }
        },
        uglify: {
            all: {
                src: ['temp/combined.js'],
                dest: 'wwwroot/lib/combined.min.js'
            }
        },
        //监视
        watch: {
            files: ["TypeScript/*.js"],
            tasks: ["all"]
        }
    });
    //添加任务
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask("all", ['clean', 'concat', 'jshint', 'uglify']);
    grunt.loadNpmTasks('grunt-contrib-watch');
};