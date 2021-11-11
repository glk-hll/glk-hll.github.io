const fs = require("fs");
const path = require('path')
const basePath = './post'

// 要求： 去除当前目录下所有文件的文件名中的 `最终节奏【边城霓裳】故事板v.mov20210612` 
// 如 最终节奏【边城霓裳】故事板v.mov202106120001.jpg  -> 0001.jpg
function renameFiles(basePath) {
  fs.readdir(basePath, function (err, files) {
    files.forEach(function (filename, idx) {
      if (!filename.includes('rename')) {
        let oldPath = path.join(__dirname, filename)
        let newPath = path.join(__dirname, filename.replace(/.*\./, `${idx}.`))
        fs.rename(oldPath, newPath, function (err) {
          if (!err) {
            console.log(filename + '重命名成功!')
          }
        })
      }
    })
  })
}

renameFiles(basePath)
