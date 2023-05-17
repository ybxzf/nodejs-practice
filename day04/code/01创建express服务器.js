const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    console.log('req.query',req.query);//获取请求的参数
    res.send('get请求成功')
})
app.post('/',(req,res)=>{
    console.log('req.query',req.query);//获取请求的参数
    res.send('post请求成功')
})
app.get('/test/:name/:age',(req,res)=>{
    console.log('req.params',req.params);
    res.status(200).send(req.params)
})


app.listen('8080',()=>{
    console.log('express服务器启动与http://127.0.0.1:8080');
})