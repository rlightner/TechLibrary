(function(e){function t(t){for(var r,l,i=t[0],u=t[1],s=t[2],f=0,p=[];f<i.length;f++)l=i[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-container",[n("Home",{attrs:{msg:"Tech Library!"}})],1)],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v(e._s(e.msg))]),n("b-table",{attrs:{striped:"",hover:"",items:e.dataContext,fields:e.fields,responsive:"sm"},scopedSlots:e._u([{key:"cell(thumbnailUrl)",fn:function(e){return[n("b-img",{attrs:{src:e.value,thumbnail:"",fluid:""}})]}}])})],1)},i=[],u=n("bc3a"),s=n.n(u),c={name:"Home",props:{msg:String},data:function(){return{fields:[{key:"thumbnailUrl",label:"Book Image"},{key:"title",label:"Book Title",sortable:!0,sortDirection:"desc"},{key:"isbn",label:"ISBN",sortable:!0,sortDirection:"desc"},{key:"shortDescr",label:"Synompsis",sortable:!0,sortDirection:"desc"}],items:[]}},mounted:function(){},methods:{dataContext:function(e,t){s.a.get("https://localhost:5001/books").then((function(e){t(e.data)}))}}},f=c,p=n("2877"),d=Object(p["a"])(f,l,i,!1,null,"ed6dbdbc",null),b=d.exports,h={name:"app",components:{Home:b}},m=h,v=Object(p["a"])(m,o,a,!1,null,null,null),y=v.exports,g=n("5f5b"),O=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(g["a"]),r["default"].use(O["a"]),r["default"].config.productionTip=!0,new r["default"]({render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=app.386eec89.js.map