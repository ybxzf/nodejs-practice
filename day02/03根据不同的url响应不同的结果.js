//1.导入http模块
const http = require('http')
//2.创建web服务器实例
const server = http.createServer()
//3.为服务器绑定request事件，监听客户端请求
server.on('request',(req,res)=>{
    const url = req.url
    let content = '<h1>404 Not found !</h1>'
    if(url == '/' || url == '/index.html'){
        content = '<h1>首页</h1>'
    }
    if(url == '/about.html'){
        content = '<h1>关于页面</h1>'
    }
    //为了防止响应时出现中文乱码，需要使用setHeader()手动设置响应头'Content-Type'的值为'text/html;charset=utf-8'
    res.setHeader('Content-Type','text/html;charset=utf-8')
    //res.end方法用于响应服务区请求
    res.end(content)
})
//4.启动服务器
server.listen(8080,()=>{
    console.log('web服务器启动成功！http://127.0.0.1:8080');
})