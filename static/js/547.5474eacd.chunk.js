"use strict";(self.webpackChunkservices=self.webpackChunkservices||[]).push([[547],{629:function(r,n,t){var e=t(689),a=t(87),u=t(184),c=function(r){var n=r.items,t=(0,e.TH)(),c=n.map((function(r){var n=r.title,e=r.id;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{state:{from:t},to:"/services/posts/".concat(e),children:n})},e)}));return(0,u.jsx)("ol",{children:c})};n.Z=c,c.defaultProps={items:[]}},547:function(r,n,t){t.r(n),t.d(n,{default:function(){return d}});var e=t(165),a=t(433),u=t(413),c=t(861),s=t(439),i=t(791),o=t(629),f=t(387),p=t(184),l=function(){var r=(0,i.useState)({items:[],loading:!1,error:null}),n=(0,s.Z)(r,2),t=n[0],l=n[1];(0,i.useEffect)((function(){var r=function(){var r=(0,c.Z)((0,e.Z)().mark((function r(){var n;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l((function(r){return(0,u.Z)((0,u.Z)({},r),{},{loading:!0,error:null})})),r.prev=1,r.next=4,(0,f.Jq)();case 4:n=r.sent,l((function(r){return(0,u.Z)((0,u.Z)({},r),{},{items:[].concat((0,a.Z)(r.items),(0,a.Z)(n))})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),l((function(n){return(0,u.Z)((0,u.Z)({},n),{},{error:r.t0})}));case 11:return r.prev=11,l((function(r){return(0,u.Z)((0,u.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[l]);var d=t.items,v=t.loading,Z=t.error;return(0,p.jsxs)("div",{children:[d.length>0&&(0,p.jsx)(o.Z,{items:d}),v&&(0,p.jsx)("p",{children:"load posts ..."}),Z&&(0,p.jsx)("p",{children:"failed ..."})]})},d=function(){return(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("h2",{children:"Home page"}),(0,p.jsx)(l,{})]})}},387:function(r,n,t){t.d(n,{JF:function(){return s},Jq:function(){return c},cl:function(){return i},w8:function(){return o}});var e=t(165),a=t(861),u=t(912).Z.create({baseURL:"https://jsonplaceholder.typicode.com/posts",params:{_limit:12}}),c=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(){var n,t,a,c=arguments;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:1,r.next=3,u.get("/",{params:{_page:n}});case 3:return t=r.sent,a=t.data,r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(n){var t,a;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("/".concat(n));case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),i=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(n){var t,a;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("/",{params:{q:n}});case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),o=function(){var r=(0,a.Z)((0,e.Z)().mark((function r(n){var t,a;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("/".concat(n,"/comments"));case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=547.5474eacd.chunk.js.map