//这是入口文件
const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')




//向外暴露需要的成员
module.exports = {
    ...date,
    ...escape//es6语法，表示把该对象展开
  }
  