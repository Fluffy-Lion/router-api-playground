(this["webpackJsonpreact-router-example"]=this["webpackJsonpreact-router-example"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(20),a=n.n(s),i=(n(27),n(7)),o=n(11),u=n(2),j=(n(28),n(29),n(30),function(e){var t=e.pokemon;return console.log(t),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"pokemon display component"}),Object(c.jsx)("p",{children:t.name}),Object(c.jsx)("p",{children:t.id}),Object(c.jsx)("p",{children:t.type}),Object(c.jsx)("img",{src:t.img})]})})}),p=function(){return Object(c.jsx)("h1",{children:"error display component"})},b=function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(""),o=Object(i.a)(a,2),u=o[0],b=o[1],l=Object(r.useState)(!1),h=Object(i.a)(l,2),d=h[0],O=h[1],x=Object(r.useState)({name:"",id:"",img:"",type:""}),f=Object(i.a)(x,2),m=f[0],v=f[1];return Object(c.jsxs)("div",{className:"searchBarWrapper",children:[Object(c.jsx)("h1",{children:" search"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(!1);var t="https://pokeapi.co/api/v2/pokemon/".concat(u);fetch(t).then((function(e){if(console.log(e),e.ok)return e.json();throw new Error("dId YoU sPeLl It WrOnG sOn?")})).then((function(e){v({name:e.name,id:e.id,img:e.sprites.front_default,type:e.types[0].type.name})})).catch((function(e){console.log(e),O(!0)})),setTimeout((function(){return s(!0)}),1e3)},children:[Object(c.jsx)("input",{type:"text",value:u,onChange:function(e){b(e.target.value)}}),Object(c.jsx)("button",{children:"submit"})]}),n&&!1===d?Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:u}),Object(c.jsx)("p",{children:"search api result"}),Object(c.jsx)(j,{pokemon:m})]}):!0!==d?Object(c.jsx)("h1",{children:"loading..."}):Object(c.jsx)(p,{})]})},l=n(4),h=n.n(l),d=n(9),O=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=(n(32),function(e){e.inputMatch;return Object(c.jsx)("h1",{className:"loading",children:"loading component"})}),m=(n(33),n(13)),v=n(16),k=n.n(v),w=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(""),o=Object(i.a)(a,2),u=o[0],j=o[1],p=Object(r.useState)(""),b=Object(i.a)(p,2),l=b[0],v=b[1],w=Object(r.useState)(!0),g=Object(i.a)(w,2),y=g[0],N=g[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("https://pokeapi.co/api/v2/pokemon");case 2:return t=e.sent,v(t.previous),j(t.next),e.next=7,C(t.results);case 7:N(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var S=function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,O(u);case 3:return t=e.sent,e.next=6,C(t.results);case 6:j(t.next),v(t.previous),N(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=2;break}return e.abrupt("return");case 2:return N(!0),e.next=5,O(l);case 5:return t=e.sent,e.next=8,C(t.results);case 8:j(t.next),v(t.previous),N(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t.url);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){Object(m.default)({targets:".pokemonImg",rotateZ:360,delay:m.default.stagger(100)})}));var P=function(e){var t=e.pokemon;return Object(c.jsx)("div",{className:"listItem",children:Object(c.jsxs)(k.a,{className:"list",children:[Object(c.jsx)("p",{className:"pokemonName",children:t.name}),Object(c.jsx)("p",{className:"pokemonId",children:t.id}),Object(c.jsx)("img",{className:"pokemonImg",src:t.sprites.front_default})]})})};return Object(c.jsx)("div",{children:y?Object(c.jsx)(f,{}):Object(c.jsxs)("div",{className:"listComponent",children:[Object(c.jsx)("div",{className:"buttonWrapper",children:Object(c.jsxs)(k.a,{children:[Object(c.jsx)("button",{className:"buttonPrev",onClick:I,children:"prev"}),Object(c.jsx)("button",{className:"buttonNext",onClick:S,children:"next"})]})}),Object(c.jsx)("div",{className:"listWrapper",children:n.map((function(e,t){return Object(c.jsx)(P,{pokemon:e},t)}))})]})})},g=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:" pokemon main component file"}),Object(c.jsx)(b,{}),Object(c.jsx)(w,{})]})},y=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.a,{children:[Object(c.jsxs)("nav",{className:"navBar",children:[Object(c.jsx)("div",{children:Object(c.jsx)(o.b,{to:"/",children:"home"})}),Object(c.jsx)("div",{children:Object(c.jsx)(o.b,{to:"/about",children:"about"})}),Object(c.jsx)("div",{children:Object(c.jsx)(o.b,{to:"/contact",children:"contact"})}),Object(c.jsx)("div",{children:Object(c.jsx)(o.b,{to:"/pokemon",children:"pokemon"})})]}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",children:Object(c.jsx)("h1",{children:"hello"})}),Object(c.jsxs)(u.a,{path:"/about",children:[Object(c.jsx)("h1",{children:n}),Object(c.jsx)("button",{onClick:function(){return s(n+1)},children:"plus 1"})]}),Object(c.jsx)(u.a,{path:"/contact",children:Object(c.jsx)("h1",{children:"contact"})}),Object(c.jsx)(u.a,{path:"/pokemon",children:Object(c.jsx)(g,{})})]})]})})};a.a.render(Object(c.jsx)(y,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1ceb790a.chunk.js.map