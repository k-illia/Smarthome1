const { src, dest, watch, series, parallel } = require("gulp");
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
// Обработка HTML
const html = () => {
    return src('./src/html/**/*.html')
        .pipe(fileinclude())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest("./dist/html"))
}

//watcher
const watcher = () => {
    watch("./src/html/**/*.html")
}

//Сборка


//Задачи
exports.html = html
exports.watcher = watcher