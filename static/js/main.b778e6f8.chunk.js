(this.webpackJsonpmillionaire=this.webpackJsonpmillionaire||[]).push([[0],{20:function(t){t.exports=JSON.parse('[{"cost":500,"question":"Q500-1","answers":[{"truth":true,"text":"a1"},{"truth":true,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"},{"truth":false,"text":"a5"},{"truth":false,"text":"a6"}]},{"cost":500,"question":"Q500-2","answers":[{"truth":true,"text":"a1"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":500,"question":"Q500-3","answers":[{"truth":false,"text":"a1"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":500,"question":"Q500-4","answers":[{"truth":true,"text":"a1"},{"truth":true,"text":"a3"},{"truth":true,"text":"a4"}]},{"cost":500,"question":"Q500-5","answers":[{"truth":true,"text":"a1"},{"truth":true,"text":"a2"},{"truth":true,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":1000,"question":"Q1000-1","answers":[{"truth":true,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":2000,"question":"Q2000-1","answers":[{"truth":true,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":4000,"question":"Q4000-1","answers":[{"truth":true,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":8000,"question":"Q8000-1","answers":[{"truth":true,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":8000,"question":"Q8000-2","answers":[{"truth":true,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":16000,"question":"Q16000-1","answers":[{"truth":true,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":32000,"question":"Q32000-1","answers":[{"truth":true,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":64000,"question":"Q64000-1","answers":[{"truth":true,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":125000,"question":"Q125000-1","answers":[{"truth":true,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":250000,"question":"Q250000-1","answers":[{"truth":true,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":500000,"question":"Q500000-1","answers":[{"truth":true,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":1000000,"question":"Q1000000-1","answers":[{"truth":true,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":1000000,"question":"Q1000000-2","answers":[{"truth":true,"text":"a1"}]},{"cost":1000000,"question":"Q1000000-3","answers":[{"truth":false,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]},{"cost":"11111","question":"Q1000000-3","answers":[{"truth":false,"text":"a1"},{"truth":false,"text":"a2"},{"truth":false,"text":"a3"},{"truth":false,"text":"a4"}]}]')},22:function(t,e,a){t.exports=a.p+"static/media/logoXl.3e2e3523.png"},23:function(t,e,a){t.exports=a(35)},28:function(t,e,a){},34:function(t,e,a){},35:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),u=a(19),l=a.n(u),c=a(9),s=(a(28),a(1)),o=a(3),i=Object(r.createContext)([{},function(){}]),f=function(t){var e=t.children,a=Object(r.useState)({value:0}),u=Object(o.a)(a,2),l=u[0],c=u[1];return n.a.createElement(i.Provider,{value:[l,c]},e)};var h=function(){return n.a.createElement("div",null,"default")},x=a(12);var m=function(t){var e=t.text;return n.a.createElement("div",{style:{border:"1px solid black"}},e)};var v=function(t){var e=t.arrAnswers,a=t.setResult;return Object(r.useEffect)((function(){console.log("arrAnswers",e)}),[e]),n.a.createElement("div",null,e.map((function(t,e){return n.a.createElement("div",{key:e,onClick:function(){return a(t.truth)}},t.text)})),n.a.createElement(m,null))};var b=function(t){var e=t.arrGrades,a=t.currentGradeIndex;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,e.map((function(t){return n.a.createElement("div",{key:t},t)}))),n.a.createElement(m,null),n.a.createElement("div",null,e[a]))},E=a(7);function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!t.length)return!1;var e=t.filter((function(t){return t.truth})).find((function(t){return t.text})),a=t.filter((function(t){return!t.truth})).find((function(t){return t.text}));return!(!e||!a)}function O(){var t,e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!a.length)return a;for(var r=a.length-1;r>0;r--)e=a[t=Math.floor(Math.random()*(r+1))],a[t]=a[r],a[r]=e;return a}function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(t.length)return t.find((function(t){return t.truth}))}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!t.length)return t;for(var e=t.filter((function(t){return!t.truth})),a=[],r=0;r<3&&e[r];r++)a=[].concat(Object(E.a)(a),[e[r]]);return a}var w=a(20);var p=function(){var t=Object(r.useState)(!1),e=Object(o.a)(t,2),a=e[0],u=e[1],l=Object(r.useState)(null),c=Object(o.a)(l,2),f=c[0],h=c[1],m=Object(r.useState)([]),p=Object(o.a)(m,2),q=p[0],Q=p[1],S=Object(r.useState)(0),k=Object(o.a)(S,2),C=k[0],y=k[1],M=Object(r.useState)([]),A=Object(o.a)(M,2),G=A[0],N=A[1],I=Object(r.useState)(null),J=Object(o.a)(I,2),W=J[0],B=J[1],F=Object(r.useState)(null),R=Object(o.a)(F,2),T=R[0],$=R[1],P=Object(r.useState)([]),X=Object(o.a)(P,2),z=X[0],D=X[1],H=Object(r.useState)(0),K=Object(o.a)(H,2),L=K[0],U=K[1],V=Object(r.useContext)(i),Y=Object(o.a)(V,2)[1];return Object(r.useEffect)((function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={};return t.length?(t.forEach((function(t){e[t.cost]||(e[t.cost]=[]),e[t.cost]=[].concat(Object(E.a)(e[t.cost]),[t])})),e):e}(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[];return t.length?(t.forEach((function(t){var a=t.cost,r=t.question,n=t.answers;isNaN(a)||r&&d(n)&&(e=[].concat(Object(E.a)(e),[t]))})),e):e}(w));h(t)}),[]),Object(r.useEffect)((function(){if(f){var t=Object.keys(f).map((function(t){return Number(t)})).sort((function(t,e){return t-e}));Q(t),N(f[t[0]])}}),[f]),Object(r.useEffect)((function(){if(G.length){var t=0;G.length>1&&(t=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t=Math.random()*e,Math.floor(t)}(G.length)),B(G[t])}}),[G]),Object(r.useEffect)((function(){if(W){var t=W.question,e=W.answers;$(t),D(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!t.length)return t;var e=O(t),a=j(e),r=g(e),n=[].concat(Object(E.a)(r),[a]);return O(n)}(e))}}),[W]),a?n.a.createElement(s.a,{to:"/win"}):n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("p",null,T),n.a.createElement(v,{setResult:function(t){if(!t)return u(!0),void Y((function(t){return Object(x.a)(Object(x.a)({},t),{},{value:L})}));C+1<q.length?(U(q[C]),N(f[q[C+1]]),y(C+1)):(u(!0),Y((function(t){return Object(x.a)(Object(x.a)({},t),{},{value:q[C]})})))},arrAnswers:z})),n.a.createElement("div",null,n.a.createElement(b,{arrGrades:q,currentGradeIndex:C})))},q=a(22),Q=a.n(q);var S=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:Q.a,alt:"logo"}))};var k=function(t){var e=t.text,a=t.handleClick;return n.a.createElement("button",{onClick:a},e)};var C=function(){var t=Object(r.useState)(!1),e=Object(o.a)(t,2),a=e[0],u=e[1];return a?n.a.createElement(s.a,{to:"/game"}):n.a.createElement("div",null,n.a.createElement(S,null),n.a.createElement("div",null,n.a.createElement("h1",null,"Who wants to be a\xa0millionaire?"),n.a.createElement(k,{text:"Start",handleClick:function(){u(!0)}})))};var y=function(){var t=Object(r.useState)(!1),e=Object(o.a)(t,2),a=e[0],u=e[1],l=Object(r.useContext)(i),c=Object(o.a)(l,1)[0].value;return Object(r.useEffect)((function(){}),[]),a?n.a.createElement(s.a,{to:"/game"}):n.a.createElement("div",null,n.a.createElement(S,null),n.a.createElement("div",null,n.a.createElement("h1",null,"Total score:"),n.a.createElement("p",null,"$",n.a.createElement("span",null,c)," earned"),n.a.createElement(k,{text:"Try Again",handleClick:function(){u(!0)}})))};a(34);function M(){return n.a.createElement(f,null,n.a.createElement(s.d,null,n.a.createElement(s.b,{path:"/",exact:!0,component:C}),n.a.createElement(s.b,{path:"/start",component:C}),n.a.createElement(s.b,{path:"/game",component:p}),n.a.createElement(s.b,{path:"/win",component:y}),n.a.createElement(s.b,{component:h})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(c.a,null,n.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.b778e6f8.chunk.js.map