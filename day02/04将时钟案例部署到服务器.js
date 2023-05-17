//1.导入需要的模块
const fs = require('fs')
const http = require('http')
const path = require('path')

//2.1 创建web服务器
const server = http.createServer()
//2.2 监听web服务器request请求
server.on('request',(req,res)=>{
    //3.1 获取客户端请求的url地址
    const url = req.url
    //3.2 把请求的url映射为具体的文件存放路径
    let fpath = ''
    if(url == '/'){
        fpath = path.join(__dirname,'./clock/index.html')
    }else{
        fpath = path.join(__dirname,'./clock',url)
    }
    //4.1 g根据路径读取文件内容
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        if(err){
            return res.end('404 Not found')
        }
        // res.setHeader('Content-Type','text/html;charset=utf-8')
        //4.响应服务器请求
        res.end(dataStr)
    })

})
//2.3 启动web服务器
server.listen('8080',()=>{
    console.log('服务器启动成功：http://127.0.0.1:8080');
})