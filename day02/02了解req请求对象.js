//1.导入http模块
const http = require('http')
//2.创建web服务器实例
const server = http.createServer()
//3.为服务器绑定request事件，监听客户端请求
server.on('request',(req,res)=>{
    //req.url是客户端请求的url地址,req.method是客户端请求的method类型
    const url = req.url
    const method = req.method
    console.log('url是：',url,'----请求方法是：',method);
    const str = `url是 ${url},method是 ${method}`
    //为了防止响应时出现中文乱码，需要使用setHeader()手动设置响应头'Content-Type'的值为'text/html;charset=utf-8'
    res.setHeader('Content-Type','text/html;charset=utf-8')
    //res.end方法用于响应服务区请求
    res.end(str)
})
//4.启动服务器
server.listen(8080,()=>{
    console.log('web服务器启动成功！http://127.0.0.1:8080');
})
