const fs = require('fs')

//使用__dirname+相对路径拼接成绝对路径
fs.readFile(__dirname + '/files/1.txt','utf8',(err,data)=>{
    if(err){
        console.log('文件读取失败！',err.message);
    }else{
        console.log('文件读取成功！',data);

    }
})