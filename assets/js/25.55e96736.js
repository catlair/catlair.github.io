(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{481:function(s,t,a){s.exports=a.p+"images/blog/note/css/4-权重及其计算/specificityimg.png"},482:function(s,t,a){s.exports=a.p+"images/blog/note/css/4-权重及其计算/right.png"},605:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"权重值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#权重值"}},[s._v("#")]),s._v(" 权重值")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("选择器")]),s._v(" "),n("th",[s._v("权重值")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("!important")]),s._v(" "),n("td",[s._v("infinity")])]),s._v(" "),n("tr",[n("td",[s._v("行间样式")]),s._v(" "),n("td",[s._v("1000")])]),s._v(" "),n("tr",[n("td",[s._v("id 选择器")]),s._v(" "),n("td",[s._v("0100")])]),s._v(" "),n("tr",[n("td",[s._v("class 选择器、属性选择器、伪类")]),s._v(" "),n("td",[s._v("0010")])]),s._v(" "),n("tr",[n("td",[s._v("标签选择器、伪元素")]),s._v(" "),n("td",[s._v("0001")])]),s._v(" "),n("tr",[n("td",[s._v("通配符选择器")]),s._v(" "),n("td",[s._v("0000")])])])]),s._v(" "),n("p",[s._v("权重并不是真的 1,10,100"),n("br"),s._v("\n他们不是 10 进制而是"),n("span",{attrs:{color:"#f40"}},[s._v("至少 256 进制")]),n("br"),s._v(" "),n("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2012/08/256-class-selector-beat-id-selector/",target:"_blank",rel:"noopener noreferrer"}},[s._v("可以看看这里,有个小 demo"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("我们甚至可以将三种引入方式进行比较最后结果是:"),n("br"),s._v(" "),n("code",[s._v("行间样式 > 内部CSS > 外部CSS")])]),s._v(" "),n("p",[s._v("那么权重相同会怎么样呢?\n谁在后面就是显示谁(相同效果的后面的覆盖前面的),下面效果都是控制颜色,显示蓝色")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("li")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("color：red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("li")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("color：blue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"权重计算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#权重计算"}},[s._v("#")]),s._v(" 权重计算")]),s._v(" "),n("img",{attrs:{src:a(481),alt:"alt",title:""}}),s._v(" "),n("p",[n("span",{attrs:{color:"#00BFFF"}},[s._v("计算方式是组合选择器中所有单个选择器(上表有的)权重之和.")])]),s._v(" "),n("p",[s._v("像〜，>和+之类的组合符号对权重没有任何影响."),n("br"),s._v("\n例子中的权重都是 2,谁在后面就是显示谁(后面的覆盖前面的)")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("ul> li")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("color：red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("0-0-2\n    ul li")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("color：blue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" 0-0-2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("分组选择器中不能把不同组的加在一起,只能组内相加.")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div,\n0-0-1 .demo,\n0-1-0 div ul li,\n0-0-3 p")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  0"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("-0-1color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("计算机中无穷加一会比无穷大,所以"),n("code",[s._v("!important")]),s._v("也能参与计算")]),s._v(" "),n("p",[s._v("下面看几个例子:")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("classDiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("idDiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("classP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("idP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("123"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".classDiv #idP")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#idDiv .classP")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("都是 110,所以红色")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#idDiv > .classP")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".classDiv #idP")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("code",[s._v(">")]),s._v("符号没影响,还是绿色")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#idDiv > p.classP")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".classDiv #idP")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("上面增加了一个 p,变成了 111,所以红色")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#idDiv p.classP")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div .classP#idP")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("权重都是 111")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div p.classP")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green "),n("span",{pre:!0,attrs:{class:"token important"}},[s._v("!important")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("p.classP")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red "),n("span",{pre:!0,attrs:{class:"token important"}},[s._v("!important")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("正无穷+12 比 正无穷+11 大,所以绿色")]),s._v(" "),n("p",[s._v("CSS3 中有一个特殊选择器"),n("br"),s._v(" "),n("code",[s._v("：not（x）")]),s._v("：否定选择器没有值,其中的 x(选择器)有值")]),s._v(" "),n("p",[n("a",{attrs:{href:"http://www.standardista.com/css3/css-specificity/",target:"_blank",rel:"noopener noreferrer"}},[s._v("图片的来源"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"css-从右解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-从右解析"}},[s._v("#")]),s._v(" CSS 从右解析")]),s._v(" "),n("img",{attrs:{src:a(482),alt:"alt",title:""}}),s._v(" "),n("p",[s._v("先找到 li 再找 ul,从右开始找(这是最快的)")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("ul> li")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("color：red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v("ul li")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("color：blue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);