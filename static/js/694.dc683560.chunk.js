"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[694],{755:function(n,e,t){t.d(e,{Aj:function(){return s},TP:function(){return o},on:function(){return i},tx:function(){return f},zv:function(){return p}});var r=t(861),a=t(757),u=t.n(a),c=t(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3",c.ZP.defaults.params={api_key:"8733d6e7e2025f98914d10d872f02ce9"};var s=function(){var n=(0,r.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/trending/all/day");case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/search/movie?query=".concat(e));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"/credits"));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/movie/".concat(e,"/reviews"));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},694:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,a,u=t(861),c=t(885),s=t(757),i=t.n(s),o=t(755),p=t(791),f=t(739),l=t(168),d=t(444),h=d.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]))),v=d.ZP.li(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),x=t(184),m=function(){var n=(0,p.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(!1),s=(0,c.Z)(a,2),l=s[0],d=s[1],m=(0,f.UO)().movieId;return(0,p.useEffect)((function(){function n(){return(n=(0,u.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),n.next=4,(0,o.tx)(m);case 4:e=n.sent,t=e.results,r(t),n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",alert("Sorry, please try again"));case 13:return n.prev=13,d(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[m]),(0,x.jsxs)("div",{children:[l&&(0,x.jsx)("div",{children:"...is Loading"}),t.length>0?(0,x.jsx)(h,{children:t.map((function(n){return(0,x.jsxs)(v,{children:[(0,x.jsx)("h3",{children:n.author}),(0,x.jsx)("p",{children:n.content})]},n.id)}))}):(0,x.jsx)("p",{children:"We don't have any reviews for this movie."})]})}}}]);
//# sourceMappingURL=694.dc683560.chunk.js.map