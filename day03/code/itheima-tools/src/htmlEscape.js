// 定义转义HTML的方法，防止用户输入的时候使用html注入
function htmlEscape(htmlStr){
    return htmlStr.replace(/<|>|"|&/g,(match)=>{
        switch(match){
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}
// 定义还原HTML的方法
function htmlUnEscape(htmlStr){
    return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g,(match)=>{
        switch(match){
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}

//向外暴露需要的成员
module.exports = {
    htmlEscape,
    htmlUnEscape
  }
  