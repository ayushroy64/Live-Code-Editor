(this["webpackJsonpcodepen-clone"]=this["webpackJsonpcodepen-clone"]||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},15:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),s=(a(15),a(3)),o=a(4),i=a(6),u=a(5),m=a(1),g=(a(16),a(17),a(18),a(19),a(20),a(9));function d(e){var t=e.language,a=e.displayName,n=e.value,c=e.onChange;return r.a.createElement("div",{className:"editor-container"},r.a.createElement("div",{className:"editor-title"},a),r.a.createElement(g.Controlled,{onBeforeChange:function(e,t,a){c(a)},value:n,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}}))}function p(e,t){var a="live-code-"+e,r=Object(n.useState)((function(){var e=localStorage.getItem(a);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),c=Object(m.a)(r,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){localStorage.setItem(a,JSON.stringify(l))}),[a,l]),[l,s]}var v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"sidePanel"},r.a.createElement("div",{className:"editor-title"},"File Explorer"),r.a.createElement("div",{className:"list",onClick:function(){return e.props.togglePages("Html")}},"index.html"),r.a.createElement("div",{className:"list",onClick:function(){return e.props.togglePages("Css")}},"index.css"),r.a.createElement("div",{className:"list",onClick:function(){return e.props.togglePages("Js")}},"index.js"))}}]),a}(n.Component);var f=function(e){var t=p("html",""),a=Object(m.a)(t,2),c=a[0],l=a[1],s=p("css",""),o=Object(m.a)(s,2),i=o[0],u=o[1],g=p("js",""),f=Object(m.a)(g,2),E=f[0],h=f[1],b=Object(n.useState)(""),j=Object(m.a)(b,2),O=j[0],N=j[1],y=e.currentScreen,C=e.togglePages;return Object(n.useEffect)((function(){var e=setTimeout((function(){N("\n        <html>\n          <body>".concat(c,"</body>\n          <style>").concat(i,"</style>\n          <script>").concat(E,"<\/script>\n        </html>\n      "))}),300);return function(){return clearTimeout(e)}}),[c,i,E]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-bar"},r.a.createElement("h1",null,"Live Code Editor")),r.a.createElement("div",{className:"pane top-pane"},r.a.createElement(v,{togglePages:C}),"Html"===y&&r.a.createElement(d,{language:"xml",displayName:"index.html",value:c,onChange:l}),"Css"===y&&r.a.createElement(d,{language:"css",displayName:"index.css",value:i,onChange:u}),"Js"===y&&r.a.createElement(d,{language:"javascript",displayName:"index.js",value:E,onChange:h})),r.a.createElement("div",{className:"pane"},r.a.createElement("iframe",{srcDoc:O,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})))},E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).togglePages=function(t){e.setState({currentScreen:t})},e.state={currentScreen:"Html"},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{currentScreen:this.state.currentScreen,togglePages:this.togglePages}))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.7ba26a2b.chunk.js.map