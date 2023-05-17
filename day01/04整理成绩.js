const fs = require('fs')

fs.readFile('./files/成绩.txt','utf8',(err,data)=>{
    if(err){
        console.log('文件读取失败！',err.message);
    }else{
        console.log('文件读取成功！数据为：',data);
        let arrOld = data.split(' ')
        let arrNew = []
        arrOld.forEach(item=>{
            arrNew.push(item.replace('=',': '))//替换'='为': '
        })
        let writeData = arrNew.join('\r\n')//将数组每一项通过'\r\n'连接起来装换为字符串
        fs.writeFile('./files/成绩-ok.txt',writeData,'utf8',(err)=>{
            if (err) {
                console.log('文件写入失败！');
            }else{
            console.log('文件写入成功！');
            }
        })
    }
})