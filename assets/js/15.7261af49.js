(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{538:function(t,s,a){t.exports=a.p+"images/blog/note/js/JS基础-正则表达式/myArray.png"},539:function(t,s,a){t.exports=a.p+"images/blog/note/js/JS基础-正则表达式/lastIndex.png"},540:function(t,s,a){t.exports=a.p+"images/blog/note/js/JS基础-正则表达式/test.png"},541:function(t,s,a){t.exports=a.p+"images/blog/note/js/JS基础-正则表达式/test1.png"},542:function(t,s,a){t.exports=a.p+"images/blog/note/js/JS基础-正则表达式/test2.png"},646:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("正则表达式的规则应该是通用的,并不局限于"),e("code",[t._v("js")]),t._v(",但"),e("code",[t._v("js")]),t._v("添加了自己的方法和属性")]),t._v(" "),e("p",[t._v("下面的并不详细,更多可以mdn和其他网站找找")]),t._v(" "),e("h2",{attrs:{id:"创建一个正则表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建一个正则表达式"}},[t._v("#")]),t._v(" 创建一个正则表达式")]),t._v(" "),e("ul",[e("li",[t._v("字面量")])]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("ab+c")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("ab+c")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("i")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ul",[e("li",[t._v("构造函数")])]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ab+c"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ab+c"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("构造函数还可以构造已知的表达式")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" re "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("ab+c")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("i")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("re"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"g"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//re = /ab+c/i;")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//reg = /ab+c/g;")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("如果不传第二个参数,然后不加new的话两个是同一个(re = reg).(不加new有毛病吧)")]),t._v(" "),e("h2",{attrs:{id:"正则表达式标志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式标志"}},[t._v("#")]),t._v(" 正则表达式标志")]),t._v(" "),e("p",[t._v("标志的使用看上面的创建正则表达式")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("标志")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("g")]),t._v(" "),e("td",[t._v("全局搜索(不加g,最多就只能匹配到一个结果)")])]),t._v(" "),e("tr",[e("td",[t._v("i")]),t._v(" "),e("td",[t._v("忽略大小写(A和a是一样的)")])]),t._v(" "),e("tr",[e("td",[t._v("m")]),t._v(" "),e("td",[t._v("多行匹配(\\n换行后依然能匹配)")])]),t._v(" "),e("tr",[e("td",[t._v("s")]),t._v(" "),e("td",[t._v("允许"),e("code",[t._v(".")]),t._v("匹配换行符")])]),t._v(" "),e("tr",[e("td",[t._v("u")]),t._v(" "),e("td",[t._v("使用unicode码模式进行匹配")])]),t._v(" "),e("tr",[e("td",[t._v("y")]),t._v(" "),e("td",[t._v("执行“粘性”搜索,匹配从目标字符串的当前位置开始，可以使用y标志。")])])])]),t._v(" "),e("h2",{attrs:{id:"正则表达式规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式规则"}},[t._v("#")]),t._v(" 正则表达式规则")]),t._v(" "),e("h3",{attrs:{id:"括号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#括号"}},[t._v("#")]),t._v(" 括号")]),t._v(" "),e("ul",[e("li",[t._v("[abc] 括号中的任意一个字符 例如"),e("code",[t._v("ahsfj")]),t._v(" -> "),e("code",[t._v("a")])]),t._v(" "),e("li",[t._v("[0-4] ,[a-z] ,[A-Z] ,[A-z] 和上面一样,但是表示范围区间")]),t._v(" "),e("li",[t._v("(x|y|z) 查找由 "),e("code",[t._v("|")]),t._v(" 分隔的任何选项。")]),t._v(" "),e("li",[t._v("[^0-4] "),e("code",[t._v("^")]),t._v("非,匹配"),e("code",[t._v("0-4")]),t._v("以外的")])]),t._v(" "),e("h3",{attrs:{id:"元字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元字符"}},[t._v("#")]),t._v(" 元字符")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("元字符")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v(".")]),t._v(" "),e("td",[t._v("查找单个字符(除了换行和行结束符)")])]),t._v(" "),e("tr",[e("td",[t._v("\\w \\W")]),t._v(" "),e("td",[t._v("单词\\非单词")])]),t._v(" "),e("tr",[e("td",[t._v("\\d \\D")]),t._v(" "),e("td",[t._v("数字\\非数字")])]),t._v(" "),e("tr",[e("td",[t._v("\\s \\S")]),t._v(" "),e("td",[t._v("空白\\非空白 "),e("code",[t._v("\\s=[\\t\\n\\r\\v\\f]")])])]),t._v(" "),e("tr",[e("td",[t._v("\\b \\B")]),t._v(" "),e("td",[t._v("单词边界\\非单词边界")])]),t._v(" "),e("tr",[e("td",[t._v("\\f")]),t._v(" "),e("td",[t._v("换页")])]),t._v(" "),e("tr",[e("td",[t._v("\\n")]),t._v(" "),e("td",[t._v("换行")])]),t._v(" "),e("tr",[e("td",[t._v("\\r")]),t._v(" "),e("td",[t._v("回车")])]),t._v(" "),e("tr",[e("td",[t._v("\\t")]),t._v(" "),e("td",[t._v("制表符")])]),t._v(" "),e("tr",[e("td",[t._v("\\v")]),t._v(" "),e("td",[t._v("垂直制表符")])]),t._v(" "),e("tr",[e("td",[t._v("\\xxx")]),t._v(" "),e("td",[t._v("八进制字符")])]),t._v(" "),e("tr",[e("td",[t._v("\\xdd")]),t._v(" "),e("td",[t._v("十六进制字符")])]),t._v(" "),e("tr",[e("td",[t._v("\\uxxxx")]),t._v(" "),e("td",[t._v("十六进制unicode字符")])]),t._v(" "),e("tr",[e("td",[t._v("\\0")]),t._v(" "),e("td",[t._v("NULL字符(c语言中学过)")])])])]),t._v(" "),e("h3",{attrs:{id:"量词"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#量词"}},[t._v("#")]),t._v(" 量词")]),t._v(" "),e("p",[t._v("使用量词默认遵循"),e("strong",[t._v("贪婪模式")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("量词")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("n+")]),t._v(" "),e("td",[t._v("至少一个n")])]),t._v(" "),e("tr",[e("td",[t._v("n*")]),t._v(" "),e("td",[t._v("零个或者多个")])]),t._v(" "),e("tr",[e("td",[t._v("n?")]),t._v(" "),e("td",[t._v("零个或者一个")])]),t._v(" "),e("tr",[e("td",[t._v("n{x}")]),t._v(" "),e("td",[t._v("x个")])]),t._v(" "),e("tr",[e("td",[t._v("n{x,y}")]),t._v(" "),e("td",[t._v("x至y个")])]),t._v(" "),e("tr",[e("td",[t._v("n{x,}")]),t._v(" "),e("td",[t._v("至少x个")])])])]),t._v(" "),e("p",[t._v("注意:\n如果"),e("code",[t._v("?")]),t._v("紧跟在任何量词 "),e("code",[t._v("*")]),t._v("、 "),e("code",[t._v("+")]),t._v("、"),e("code",[t._v("?")]),t._v(" 或 "),e("code",[t._v("{}")]),t._v(" 的后面，将会使量词变为"),e("strong",[t._v("非贪婪")]),t._v("（匹配尽量少的字符），和缺省使用的"),e("strong",[t._v("贪婪模式")]),t._v("（匹配尽可能多的字符）正好相反。例如，对 "),e("code",[t._v('"123abc"')]),t._v(" 使用 "),e("code",[t._v("/\\d+/")]),t._v(" 将会匹配 "),e("code",[t._v('"123"')]),t._v("，而使用 "),e("code",[t._v("/\\d+?/")]),t._v(" 则只会匹配到 "),e("code",[t._v('"1"')]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"先行断言-后行断言-正向否定查找-反向否定查找"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先行断言-后行断言-正向否定查找-反向否定查找"}},[t._v("#")]),t._v(" 先行断言/后行断言/正向否定查找/反向否定查找")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("x(?=y)")]),t._v(" 匹配'x'仅仅当'x'后面跟着'y'.这种叫做先行断言。")]),t._v(" "),e("li",[e("code",[t._v("(?<=y)x")]),t._v(" 匹配'x'仅仅当'x'前面是'y'.这种叫做后行断言。")]),t._v(" "),e("li",[e("code",[t._v("x(?!y)")]),t._v(" \t 仅仅当'x'后面不跟着'y'时匹配'x'，这被称为正向否定查找。")]),t._v(" "),e("li",[e("code",[t._v("(?<!y)x")]),t._v(" \t仅仅当'x'前面不是'y'时匹配'x'，这被称为反向否定查找。")])]),t._v(" "),e("h3",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("规则")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("^n")]),t._v(" "),e("td",[t._v("以n开头(受m多行影响)")])]),t._v(" "),e("tr",[e("td",[t._v("n$")]),t._v(" "),e("td",[t._v("以n结尾(受m多行影响)")])])])]),t._v(" "),e("h2",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),e("p",[t._v("属性和方法都是可以在字面量后直接用的,例如"),e("code",[t._v("/abc/i.ignoreCase")]),t._v("返回true")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("global")]),t._v(" RegExp 对象是否具有标志 g。返回布尔")]),t._v(" "),e("li",[e("code",[t._v("ignoreCase")]),t._v(" RegExp 对象是否具有标志 i。")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("lastIndex")])]),t._v(" 返回一个整数，标示开始下一次匹配的字符位置。")]),t._v(" "),e("li",[e("code",[t._v("multiline")]),t._v(" \tRegExp 对象是否具有标志 m。")]),t._v(" "),e("li",[e("code",[t._v("source")]),t._v(" 正则表达式的源文本字符串。")])]),t._v(" "),e("h2",{attrs:{id:"regexp方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexp方法"}},[t._v("#")]),t._v(" RegExp方法")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("exec")]),t._v("\n一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回 null）。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("test")]),t._v("\n一个在字符串中测试是否匹配的RegExp方法，它返回 true 或 false。")])])]),t._v(" "),e("h2",{attrs:{id:"string方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string方法"}},[t._v("#")]),t._v(" String方法")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("match")]),t._v("\n一个在字符串中执行查找匹配的String方法，它返回一个数组，在未匹配到时会返回 null。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("matchAll")]),t._v("\n一个在字符串中执行查找所有匹配的String方法，它返回一个迭代器（iterator）。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("search")]),t._v("\n一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("replace")]),t._v("\n一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("split")]),t._v("\n一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 String 方法。")])])]),t._v(" "),e("h2",{attrs:{id:"exec-方法详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exec-方法详解"}},[t._v("#")]),t._v(" exec()方法详解")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myRe "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"g"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  myRe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cdbbdbsb"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("img",{attrs:{src:a(538),alt:"alt",title:""}}),t._v(" "),e("p",[t._v("整个数组能够匹配到两个"),e("code",[t._v("d")]),t._v("\n第一个在索引为"),e("code",[t._v("1")]),t._v(",第二个在"),e("code",[t._v("4")]),t._v(",第三次没有"),e("code",[t._v("null")]),t._v(",第四次又重头开始")]),t._v(" "),e("p",[t._v("如果不是"),e("code",[t._v("g")]),t._v(",")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myRe "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  myRe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cdbbdbsb"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("那么每次返回都是"),e("code",[t._v("index :1")])]),t._v(" "),e("p",[t._v("要想取出索引可以使用"),e("code",[t._v("lastIndex")]),t._v("属性,(使用全局匹配下)")]),t._v(" "),e("img",{attrs:{src:a(539),alt:"alt",title:""}}),t._v(" "),e("p",[t._v("该属性可以修改")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myRe "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"g"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  myRe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cdbbdbsb"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//index 是 2")]),t._v("\n  myRe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//改为5")]),t._v("\n  myRe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cdbbdbsb"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//null ,因为第二个d在索引(4)")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[e("code",[t._v("test")]),t._v("方法共用同一索引")]),t._v(" "),e("img",{attrs:{src:a(540),alt:"alt",title:""}}),t._v(" "),e("p",[t._v("然后发现个神奇的东西")]),t._v(" "),e("img",{attrs:{src:a(541),alt:"alt",title:""}}),t._v(" "),e("img",{attrs:{src:a(542),alt:"alt",title:""}}),t._v(" "),e("p",[t._v("根据索引有")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myRe "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"g"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  myRe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c234bbsbd"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n  myRe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c234bbsbd"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n  myRe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c234bbsbd"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h2",{attrs:{id:"捕获"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#捕获"}},[t._v("#")]),t._v(" 捕获")]),t._v(" "),e("p",[e("code",[t._v("(x)")])]),t._v(" "),e("p",[t._v("匹配 'x' 并且记住匹配项。其中括号被称为捕获括号。")]),t._v(" "),e("p",[t._v("模式 "),e("code",[t._v("/(foo) (bar) \\1 \\2/")]),t._v(" 中的 "),e("code",[t._v("'(foo)'")]),t._v(" 和 "),e("code",[t._v("'(bar)'")]),t._v(" 匹配并记住字符串 "),e("code",[t._v('"foo bar foo bar"')]),t._v(" 中前两个单词。模式中的 "),e("code",[t._v("\\1")]),t._v(" 和 "),e("code",[t._v("\\2")]),t._v(" 表示第一个和第二个被捕获括号匹配的子字符串，即 "),e("code",[t._v("foo")]),t._v(" 和 "),e("code",[t._v("bar")]),t._v("，匹配了原字符串中的后两个单词。注意 "),e("code",[t._v("\\1、\\2、...、\\n")]),t._v(" 是用在正则表达式的匹配环节，详情可以参阅后文的 "),e("code",[t._v("\\n")]),t._v(" 条目。而在正则表达式的替换环节，则要使用像 "),e("code",[t._v("$1、$2、...、$n")]),t._v(" 这样的语法，例如，"),e("code",[t._v("'bar foo'.replace(/(...) (...)/, '$2 $1')")]),t._v("。$& 表示整个用于匹配的原字符串。")])])}),[],!1,null,null,null);s.default=n.exports}}]);