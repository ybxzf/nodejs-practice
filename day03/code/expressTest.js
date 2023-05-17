//1.导入express
const express = require('express')
//2.创建web服务器
const app = express()

// 4. 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
    app.get('/', (req, res) => {
        // 通过 req.query 可以获取到客户端发送过来的 查询参数
        // 注意：默认情况下，req.query 是一个空对象
        console.log("url为‘/’时:",req.query)
        res.send(req.query)
    })
    app.get('/user',(req,res)=>{
        // 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
        console.log("使用get方式！")
        res.send({ name: 'zs', age: 20, gender: '男' })
    })
    app.post('/user', (req, res) => {
        // 调用 express 提供的 res.send() 方法，向客户端响应一个 文本字符串
        console.log("使用post方式！")
        res.send('请求成功')
    })

//3.调用app.listen(端口,回调函数)启动服务器
app.listen(8080,()=>{
    console.log('express框架搭建web服务器已启动于：http://127.0.0.1');
})