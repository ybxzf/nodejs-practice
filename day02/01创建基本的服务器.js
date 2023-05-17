//1.导入http模块
const http = require('http')
//2.创建web服务器实例
const server = http.createServer()
//3.为服务器绑定request事件，监听客户端请求
server.on('request',(req,res)=>{
    console.log('有人访问的web服务器！');
})
//4.启动服务器
server.listen(8080,()=>{
    console.log('web服务器启动成功！http://127.0.0.1:8080');
})