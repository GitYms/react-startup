(this["webpackJsonpreact-startup"]=this["webpackJsonpreact-startup"]||[]).push([[0],{38:function(e,t,n){e.exports={index:"index--2Fjkc"}},41:function(e,t,n){e.exports=n(71)},50:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(17),o=n.n(c),u=n(13),s=n(36),l=n(40),i=n(15),p=(n(50),n(8)),E=n.n(p),d=n(11),m=n(20),b=n.n(m),f=E.a.mark(O),v=E.a.mark(S);function O(e){var t,n;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.pageIndex,a.prev=1,a.next=4,Object(d.a)(b.a.get,"https://jsonplaceholder.typicode.com/posts/".concat(t));case 4:return n=a.sent,a.next=7,Object(d.c)({type:"FETCH_POST_SUCCESS",payload:n.data});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(d.c)({type:"FETCH_POST_FAILURE",payload:a.t0});case 13:case"end":return a.stop()}}),f,null,[[1,9]])}function S(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)("FETCH_POST_REQUEST",O);case 2:case"end":return e.stop()}}),v)}var x=E.a.mark(j),h=E.a.mark(y);function j(){var e;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(d.a)(b.a.get,"https://jsonplaceholder.typicode.com/users");case 3:return e=t.sent,t.next=6,Object(d.c)({type:"FETCH_USER_SUCCESS",payload:e.data[0]});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(d.c)({type:"FETCH_USER_FAILURE",payload:t.t0});case 12:case"end":return t.stop()}}),x,null,[[0,8]])}function y(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)("FETCH_USER_REQUEST",j);case 2:case"end":return e.stop()}}),h)}var _=E.a.mark(C);function C(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)(S);case 2:return e.next=4,Object(d.b)(y);case 4:case"end":return e.stop()}}),_)}var T={users:null},U={content:null},F=Object(u.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_USER_SUCCESS":return{users:t.payload};case"FETCH_USER_FAILURE":return{error:t.payload,users:{}};default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_POST_SUCCESS":return{content:t.payload};case"FETCH_POST_FAILURE":return{content:[]};default:return e}}}),w=n(39),R=n(5),k=n(23),H=n(38),g=n.n(H),N=Object(k.a)((function(e){return e}),(function(e){return e.user})),I=Object(k.a)((function(e){return e}),(function(e){return e.post}));var P=Object(a.memo)((function(){var e=Object(i.b)(),t=Object(i.c)(N),n=Object(i.c)(I),c=Object(a.useCallback)((function(){e({type:"FETCH_USER_REQUEST"})}),[e]);return r.a.createElement("div",{className:g.a.index},r.a.createElement("div",{className:"left"},r.a.createElement("button",{type:"button",onClick:c},"\u83b7\u53d6\u7528\u6237"),r.a.createElement("p",null,t.users&&JSON.stringify(t.users))),r.a.createElement("div",{className:"right"},r.a.createElement("button",{type:"button",onClick:function(){e({type:"FETCH_POST_REQUEST",pageIndex:1})}},"\u83b7\u53d6\u4e00\u7bc7\u6587\u7ae0"),r.a.createElement("p",null,n.content&&JSON.stringify(n.content))))}));n(69);var A=Object(a.memo)((function(e){return r.a.createElement("div",{className:"layout"},r.a.createElement("div",{className:"layout-header"},"Header"),r.a.createElement("div",{className:"layout-content"},e.children))}));var J=function(){return r.a.createElement(w.a,null,r.a.createElement(A,null,r.a.createElement(R.d,null,r.a.createElement(R.b,{exact:!0,path:"".concat("","/"),render:function(){return r.a.createElement(R.a,{to:"/index"})}}),r.a.createElement(R.b,{path:"".concat("","/index"),component:P}))))},L=Object(l.a)(),Q=Object(u.createStore)(F,Object(s.composeWithDevTools)(Object(u.applyMiddleware)(L)));L.run(C),o.a.render(r.a.createElement(i.a,{store:Q},r.a.createElement(J,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.2b87d1c2.chunk.js.map