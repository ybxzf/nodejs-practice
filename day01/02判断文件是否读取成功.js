//1.导入fs模块
const fs = require('fs')
//2.调用方法readFile(path,option,callback(err,data))
fs.readFile('./files/1.txt','utf-8',function(err,data){
    if(err){
        return console.log('文件读取失败！',err.message);
    }
    console.log('文件读取成功',data);
})
 

