(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{551:function(t,s,a){t.exports=a.p+"images/blog/note/js/JS基础-获取窗口属性/滚动条位置兼容性.png"},653:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"介绍一下如何获知渲染模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下如何获知渲染模式"}},[t._v("#")]),t._v(" 介绍一下如何获知渲染模式")]),t._v(" "),e("p",[t._v("辨别现在的模式使用"),e("code",[t._v("document.compatMode")]),t._v(",如果返回"),e("code",[t._v("CSS1Compat")]),t._v("则是标准模式,如果返回"),e("code",[t._v("BackCompat")]),t._v("则是怪异模式")]),t._v(" "),e("h2",{attrs:{id:"查看滚动条的滚动距离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看滚动条的滚动距离"}},[t._v("#")]),t._v(" 查看滚动条的滚动距离")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("window.pageYOffset/window.pageXOffset")]),t._v(" 只读属性,返回文档在垂直/水平方向已滚动的像素值")]),t._v(" "),e("li",[e("code",[t._v("window.scrollY/scrollX")]),t._v(" 上面的属性是这两个的别名(兼容性不如上面两者)")]),t._v(" "),e("li",[e("code",[t._v("document.body.scrollLeft/scrollTop")]),t._v(" 和上面一样(Left水平,top垂直),用于ie9以下的兼容")]),t._v(" "),e("li",[e("code",[t._v("document.documentElement.scrollLeft/scrollTop")]),t._v(" 和上面一样,用于ie9以下的兼容")])]),t._v(" "),e("p",[t._v("注:上面有两组是ie9以下兼容性问题用的,但是其他浏览器也支持这个属性,具体使用时和浏览器的渲染模式有关\n关于不同浏览器及其模式的兼容性:\n"),e("img",{attrs:{src:a(551),alt:"alt",title:""}})]),t._v(" "),e("p",[t._v("解决兼容性问题时非ie9以上不用管上面的表,因为可以直接用"),e("code",[t._v("window.pageXOffset")]),t._v(",ie9以下特殊处理如下")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" supportPageOffset "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageXOffset "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isCSS1Compat "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compatMode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CSS1Compat"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" supportPageOffset "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageXOffset "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" isCSS1Compat "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollLeft "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollLeft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" supportPageOffset "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageYOffset "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" isCSS1Compat "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("由于不对的模式也会返回"),e("code",[t._v("0")]),t._v("\n也可以这样解决兼容性问题(个人觉得好理解点)")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" supportPageOffset "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageXOffset "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" supportPageOffset "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageXOffset "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollLeft "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollLeft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" supportPageOffset "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageYOffset "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"可视窗口的属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可视窗口的属性"}},[t._v("#")]),t._v(" 可视窗口的属性")]),t._v(" "),e("ul",[e("li",[t._v("window.innerWidth/innerHeight 获取可视区宽度/高度 ie9以下不支持")]),t._v(" "),e("li",[t._v("document.documentElement.clientWidth/clientHeight 标准模式下都可以用")]),t._v(" "),e("li",[t._v("document.body.clientWidth/clientHeight 适合怪异模式")])]),t._v(" "),e("p",[t._v("在ie中试了一下,ie9及以上,三个获得的值都不一样,ie9以下,两个不仅不一样,换成怪异模式和标准模式也不一样????????????????")])])}),[],!1,null,null,null);s.default=n.exports}}]);