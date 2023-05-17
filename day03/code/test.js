const tool = require('./itheima-tools')

const dtStr = tool.dateFormat(new Date())

console.log('时间：',dtStr);

const htmlStr = "<h1 title = 'abc'>这是h1标签<span>123&nbsp;</span></h1>"

const str = tool.htmlEscape(htmlStr)

console.log('转义：',str);
console.log('还原：',tool.htmlUnEscape(str));