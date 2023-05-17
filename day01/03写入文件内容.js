//1.导入fs模块
const fs = require('fs')
//2.调用方法writeFile(file,data,[options],callback(err,data))
    /*
        file：必填参数，文件存放路径  
        data：必填参数，写入内容 
        options：可选参数，指定读取文件的编码格式 ，默认utf8  
        callback(err,data)：必填参数：处理结果的回调函数，err失败结果
    */
fs.writeFile('./files/2.txt','abcde',function(err){
    if(err){
        console.log('文件写入失败！',err);
    }
    console.log('文件写入成功！');
})


