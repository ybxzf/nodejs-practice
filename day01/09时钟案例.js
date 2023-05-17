//导入模块
const fs = require('fs')
const path = require('path')

//正则表达式：匹配<style></style>和<script></script>标签内的所有字符
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

//读取文件内容
fs.readFile(path.join(__dirname,'./files/index.html'),'utf8',(err,dataStr)=>{
    if(err){
        return console.log('读取文件失败！',err.message);
    }

    //拆解css,js,html
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

//处理css样式的方法
function resolveCSS(htmlStr){
    //a.exec(b)方法:按a的规则去匹配b中的数据，返回一个数组，数组第0项为匹配成功的数据
    const r1 = regStyle.exec(htmlStr)
    //裁减掉标签名
    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    //写入到文件
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,'utf8',err=>{
        if(err){
            return console.log('写入CSS失败！',err.message);
        }
        console.log('写入CSS成功！');
    })
}

//处理js的方法
function resolveJS(htmlStr){
    //a.exec(b)方法:按a的规则去匹配b中的数据，返回一个数组，数组第0项为匹配成功的数据
    const r2 = regScript.exec(htmlStr)
    //裁减掉标签名
    const newJS = r2[0].replace('<script>','').replace('</script>','')
    //写入到文件
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,'utf8',err=>{
        if(err){
            return console.log('写入JS失败！',err.message);
        }
        console.log('写入JS成功！');
    })
}

//处理html标签的方法
function resolveHTML(htmlStr){
    //把内嵌的js和css改为外联
    const newHTML = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css" />')
                    .replace(regScript,'<script src="./index.js"></script>') 
    //写入到文件
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,'utf8',err=>{
        if(err){
            return console.log('写入HTML失败！',err.message);
        }
        console.log('写入HTML成功！');
    })
}