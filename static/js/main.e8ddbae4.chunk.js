(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),s=n(8),r=n.n(s),c=(n(13),n(2)),u=n(3),o=n(6),b=n(5),h=n(4),j=n(0),l=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).state={newtaskval:""},i.textChange=i.textChange.bind(Object(o.a)(i)),i.textSubmit=i.textSubmit.bind(Object(o.a)(i)),i}return Object(u.a)(n,[{key:"textChange",value:function(t){this.setState({newtaskval:t.target.value})}},{key:"textSubmit",value:function(t){t.preventDefault();var e=this.state.newtaskval;if(""===e||e.length<3)return!1;""!==e&&window.confirm("\u65b0\u3057\u3044\u30bf\u30b9\u30af\u3092\u767b\u9332\u3057\u307e\u3059\u304b?")&&(this.props.sendTaskVal(e),this.setState({newtaskval:""}))}},{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.textSubmit,children:[Object(j.jsx)("input",{type:"text",value:this.state.newtaskval,onChange:this.textChange}),Object(j.jsx)("button",{children:"\u8ffd\u52a0"})]})}}]),n}(i.Component),d=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.item.id,e=this.props.item.name;return Object(j.jsxs)("li",{children:[e,Object(j.jsx)("button",{"data-id":t,onClick:this.props.remove1,children:"\u2715"})]},t)}}]),n}(i.Component),v=d,m=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.taskData;return 0===e.length?Object(j.jsx)("p",{children:"\u306a\u3057"}):Object(j.jsx)("ul",{children:e.map((function(e){return Object(j.jsx)(v,{item:e,remove1:t.props.remove2},e.id)}))})}}]),n}(i.Component),O=m,k=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).state={taskset:[],max_id:0},i.submitClick=i.submitClick.bind(Object(o.a)(i)),i.removeClick=i.removeClick.bind(Object(o.a)(i)),i}return Object(u.a)(n,[{key:"submitClick",value:function(t){var e=this.state.max_id,n=this.state.taskset;n.push({id:e+1,name:t}),this.setState({taskset:n,max_id:e+1})}},{key:"removeClick",value:function(t){var e=this.state.taskset,n=Number(t.currentTarget.getAttribute("data-id")),i=e.filter((function(t){return t.id!==n}));this.setState({taskset:i})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{sendTaskVal:this.submitClick}),Object(j.jsx)(O,{taskData:this.state.taskset,remove2:this.removeClick})]})}}]),n}(i.Component);var p=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(k,{})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),i(t),a(t),s(t),r(t)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.e8ddbae4.chunk.js.map