(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{39:function(e,t,c){"use strict";c.r(t);var n=c(24),r=c.n(n),s=c(21),i=c(2),a=c(5);var o=function(){return Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Apple"}),Object(a.jsx)("li",{children:"Orange"}),Object(a.jsx)("li",{children:"Banana"})]})},j=c(7),l=c(6),u=c(4),d=c(3),b=c.n(d),h=c(12);var O=function(){var e=Object(i.p)(),t=Object(h.useState)([]),c=Object(u.a)(t,2),n=c[0],r=c[1];Object(h.useEffect)((function(){o()}),[]);var o=function(){var e=Object(l.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3090/clients");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),r(Object(j.a)(c));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(l.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch("http://localhost:3090/clients/remove",{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({client:t})});case 3:c=n.filter((function(e){return e.id!==t})),r(Object(j.a)(c));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Clients"}),Object(a.jsx)(s.b,{className:"navA",to:"/osher-ad.co.il/market/administrator",children:Object(a.jsx)("span",{children:"\u05d7\u05d6\u05e8\u05d4"})}),Object(a.jsx)("button",{onClick:function(){e("add",{state:{name:"Product Name",category:"Product Category",product_price:"Product Price",location:"Product Location",unitsInStock:"Units On Stock"}})},children:"add client"}),Object(a.jsxs)("div",{className:"grid",children:[" ",n.map((function(t){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:t.firstName}),Object(a.jsx)("p",{children:t.lastName}),Object(a.jsx)("button",{onClick:function(){!function(t){console.log(t),e("update",{state:t})}(t)},children:"\u05e2\u05d3\u05db\u05df"}),Object(a.jsx)("button",{onClick:function(){d(t.id)},children:"\u05d4\u05e1\u05e8\u05d4 \u05de\u05e8\u05e9\u05d9\u05de\u05ea \u05d4\u05de\u05d5\u05e6\u05e8\u05d9\u05dd"})]},t.id)}))]})]})};var p=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Project One"}),Object(a.jsx)(s.a,{children:Object(a.jsxs)(i.d,{children:[Object(a.jsx)(i.b,{path:"/",element:Object(a.jsx)(i.a,{to:"/health-funds.co.il/clients",replace:!0})}),Object(a.jsx)(i.b,{path:"/health-funds.co.il/clients",exact:!0,element:Object(a.jsx)(O,{})})]})}),Object(a.jsx)(o,{}),Object(a.jsx)(o,{}),Object(a.jsx)(o,{})]})};r.a.render(Object(a.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.492ce14f.chunk.js.map