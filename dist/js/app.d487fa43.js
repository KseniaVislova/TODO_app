(function(e){function t(t){for(var o,r,u=t[0],i=t[1],s=t[2],d=0,f=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-3f4db572":"69af9ffd","chunk-4cbf8f0a":"56b52740","chunk-719ff7a0":"5cbf2c81","chunk-7fe18359":"32c94240","chunk-c33ddb9a":"190ac4fe"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-4cbf8f0a":1,"chunk-719ff7a0":1,"chunk-7fe18359":1,"chunk-c33ddb9a":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-3f4db572":"31d6cfe0","chunk-4cbf8f0a":"7b3984e2","chunk-719ff7a0":"f5c719b5","chunk-7fe18359":"0f028bec","chunk-c33ddb9a":"4a78763f"}[e]+".css",c=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],d=s.getAttribute("data-href");if(d===o||d===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],l.parentNode.removeChild(l),n(a)},l.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"app"},c={class:"container"};function a(e,t){var n=Object(o["D"])("router-view");return Object(o["w"])(),Object(o["e"])("div",r,[Object(o["f"])("div",c,[Object(o["h"])(n)])])}n("7de7");var u=n("6b0d"),i=n.n(u);const s={},d=i()(s,[["render",a]]);var f=d,l=n("9483");Object(l["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var p=n("a18c"),h=n("5502"),m=n("1da1"),b=(n("96cf"),n("159b"),n("dc59")),g=n("e71f"),v={state:{news:[],loading:!0},getters:{allNews:function(e){return e.news},newsCount:function(e){return e.news.length},newsLoading:function(e){return e.loading}},mutations:{updateNews:function(e,t){e.news=t},updateNewsLoading:function(e,t){e.loading=t}},actions:{fetchNews:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],t.prev=1,t.next=4,Object(g["e"])(b["c"]);case 4:o=t.sent,o.forEach((function(e){n.push(e.data())})),r=!1,e.commit("updateNews",n),e.commit("updateNewsLoading",r),t.next=15;break;case 11:throw t.prev=11,t.t0=t["catch"](1),console.log(t.t0.message),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}}},w=n("d4ec"),j=n("bee2"),O=(n("4de4"),n("ea7b")),k={state:{todos:[],loading:!0},getters:{allTodos:function(e){return e.todos},todosCount:function(e){return e.todos.filter((function(e){return!e.completed&&e.title})).length},validTodos:function(e){return e.todos.filter((function(e){return e.title}))},todosLoading:function(e){return e.loading},completedTodos:function(e){return e.todos.filter((function(e){return e.completed&&e.title}))},notCompletedTodos:function(e){return e.todos.filter((function(e){return!e.completed&&e.title}))}},mutations:{updateTodos:function(e,t){e.todos=t},updateTodosLoading:function(e,t){e.loading=t},removeTodo:function(e,t){e.todos=e.todos.filter((function(e){return e.id!==t}));var n=String(t);Object(g["c"])(Object(g["d"])(b["b"],"todos",n))},createTodos:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var o,r,c,a,u,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=Object(O["b"])(),r=o.currentUser,c=function(){function e(t,n,o){Object(w["a"])(this,e),this.user=r,this.id=t,this.title=n,this.completed=o}return Object(j["a"])(e,[{key:"toString",value:function(){return this.id+", "+this.title+", "+this.completed+", "+this.user}}]),e}(),a={toFirestore:function(e){return{id:e.id,title:e.title,completed:e.completed,user:r.email}},fromFirestore:function(e,t){var n=e.data(t);return new(n.id,n.title,n.completed,n.user)}},u=String(t.id),i=Object(g["d"])(b["b"],"todos",u).withConverter(a),n.prev=6,e.todos.unshift(t),n.next=10,Object(g["g"])(i,new c(t.id,t.title,t.completed,r.email));case 10:n.next=16;break;case 12:throw n.prev=12,n.t0=n["catch"](6),console.log(n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[6,12]])})))()},updateCompleted:function(e,t){e.todos.forEach((function(e){e.id===t&&(e.completed=!e.completed),e.completed}))},updateCompletedFirebase:function(e,t){try{var n=String(t),o=Object(g["d"])(b["b"],"todos",n);e.todos.forEach((function(e){e.id===t&&Object(g["h"])(o,{completed:!e.completed})}))}catch(r){throw console.log(r),r}}},actions:{fetchTodos:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,o,r,c,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],t.prev=1,t.next=4,Object(g["e"])(b["e"]);case 4:o=t.sent,r=Object(O["b"])(),c=r.currentUser,o.forEach((function(e){c.email===e.data().user&&n.unshift(e.data())})),a=!1,e.commit("updateTodos",n),e.commit("updateTodosLoading",a),t.next=17;break;case 13:throw t.prev=13,t.t0=t["catch"](1),console.log(t.t0),t.t0;case 17:case"end":return t.stop()}}),t,null,[[1,13]])})))()},updateTodo:function(e,t){e.commit("updateTodos",t)},changeTodo:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var o,r,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("updateCompletedFirebase",t),e.commit("updateCompleted",t),o=[],n.prev=3,n.next=6,Object(g["e"])(b["e"]);case 6:r=n.sent,c=Object(O["b"])(),a=c.currentUser,r.forEach((function(e){a.email===e.data().user&&o.unshift(e.data())})),e.commit("updateTodos",o),n.next=17;break;case 13:throw n.prev=13,n.t0=n["catch"](3),console.log(n.t0),n.t0;case 17:case"end":return n.stop()}}),n,null,[[3,13]])})))()}}},y=Object(h["a"])({modules:{news:v,todos:k}});Object(o["c"])(f).use(y).use(p["a"]).mount("#app")},"7de7":function(e,t,n){"use strict";n("c910")},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var o=n("6c02"),r=[{path:"/",name:"News",component:function(){return n.e("chunk-7fe18359").then(n.bind(null,"ddd8"))}},{path:"/todos",name:"Todos",component:function(){return n.e("chunk-c33ddb9a").then(n.bind(null,"c173"))}},{path:"/registration",name:"Registration",component:function(){return Promise.all([n.e("chunk-3f4db572"),n.e("chunk-4cbf8f0a")]).then(n.bind(null,"dfa0"))}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-3f4db572"),n.e("chunk-719ff7a0")]).then(n.bind(null,"cfcb"))}}],c=Object(o["a"])({history:Object(o["b"])(""),routes:r});t["a"]=c},c910:function(e,t,n){},dc59:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return m}));var o=n("260b"),r=n("e71f"),c=n("a18c"),a=n("ea7b"),u={apiKey:"AIzaSyDju36AW4Iilq7HQCBTTHACK0XS5lS4Q_o",authDomain:"morning-app-vue.firebaseapp.com",projectId:"morning-app-vue",storageBucket:"morning-app-vue.appspot.com",messagingSenderId:"643434194954",appId:"1:643434194954:web:972084e0fdde639e5997f3",measurementId:"G-TENNEWV87P"},i=Object(o["a"])(u),s=Object(r["f"])(i),d=Object(r["b"])(s,"users"),f=Object(r["b"])(s,"news"),l=Object(r["b"])(s,"todos"),p=Object(a["b"])(),h=function(e,t,n){return Object(a["a"])(p,e,t).then((function(){Object(r["a"])(d,{userId:(new Date).getTime(),name:n,email:e,todos:[]}),c["a"].push({path:"/login"})}))},m=function(e,t){return Object(a["c"])(p,e,t).then((function(){c["a"].push({path:"/todos"})}))}}});
//# sourceMappingURL=app.d487fa43.js.map