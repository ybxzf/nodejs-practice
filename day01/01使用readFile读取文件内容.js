//1.导入fs模块
const fs = require('fs')
//2.调用方法readFile(path,option,callback(err,data))
    /*
        path：必填参数，文件路径 
        options：可选参数，指定读取文件的编码格式，默认utf8 
        callback(err,data)：必填参数：处理结果的回调函数，err失败结果，data成功结果
    */
fs.readFile('./files/1.txt','utf-8',function(err,data){
    console.log('err=====',err);
    console.log('-------------------------');
    console.log('data=====',data);
})


