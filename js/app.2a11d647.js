(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-19281f84":"e7548891","chunk-2d0c1056":"65a8040b","chunk-2d0d05dc":"83e79a95","chunk-2d217357":"d304a54a","chunk-2d217a99":"6bf42b74","chunk-2d2259e5":"8035d07f","chunk-5f4ad635":"d28d9b40","chunk-c420df12":"26d8fb06"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(e);var u=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",u.name="ChunkLoadError",u.type=r,u.request=c,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-crm-pet/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("1dce"),c=n.n(a),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grey darken-1 empty-layout"},[n("router-view")],1)},u=[],l=n("b444"),d={computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(l["a"][e.code]||"Что-то пошло не так")}}},p=d,f=n("2877"),m=Object(f["a"])(p,s,u,!1,null,null,null),h=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("Loader"):n("div",{staticClass:"app-main-layout"},[n("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),n("Sidebar",{model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),n("main",{staticClass:"app-content",class:{full:!e.isOpen}},[n("div",{staticClass:"app-page"},[n("router-view")],1)]),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[n("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)},g=[],b=(n("b64b"),n("96cf"),n("1da1")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar orange lighten-1"},[n("div",{staticClass:"nav-wrapper"},[n("div",{staticClass:"navbar-left"},[n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[n("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),n("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),n("ul",{staticClass:"right hide-on-small-and-down"},[n("li",[n("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.name)+" "),n("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),n("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[n("li",[n("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[n("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v("Профиль ")])],1),n("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),n("li",[n("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[n("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v("Выйти ")])])])])])])])},y=[],_=(n("b0c0"),n("4d5c")),k=n.n(_),x={data:function(){return{date:new Date,interval:null,dropdown:null}},computed:{name:function(){return this.$store.getters.info.name||"Имя профиля"}},methods:{logout:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("logout");case 3:e.$router.push("/login?message=logout"),t.next=8;break;case 6:t.prev=6,t.t0=t["catch"](0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=k.a.Dropdown.init(this.$refs.dropdown)},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()}},C=x,O=Object(f["a"])(C,w,y,!1,null,null,null),E=O.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return n("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[n("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},$=[],R={props:["value"],data:function(){return{links:[{title:"Счет",url:"/",exact:!0},{title:"История",url:"/history"},{title:"Планирование",url:"/planning"},{title:"Новая запись",url:"/record"},{title:"Категории",url:"/categories"}]}}},U=R,I=Object(f["a"])(U,j,$,!1,null,null,null),D=I.exports,S={name:"main-layout",data:function(){return{isOpen:!0,loading:!0}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Object.keys(e.$store.getters.info).length){t.next=3;break}return t.next=3,e.$store.dispatch("fetchInfo");case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},components:{Navbar:E,Sidebar:D}},A=S,H=Object(f["a"])(A,v,g,!1,null,null,null),P=H.exports,M={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:h,MainLayout:P}},L=M,N=(n("5c0b"),Object(f["a"])(L,o,i,!1,null,null,null)),T=N.exports,F=(n("d3b7"),n("8c4f")),B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"page-title"},[n("h3",[e._v("Счет")]),n("button",{staticClass:"btn waves-effect waves-light btn-small",on:{click:e.refresh}},[n("i",{staticClass:"material-icons"},[e._v("refresh")])])]),e.loading?n("Loader"):n("div",{staticClass:"row"},[n("div",{staticClass:"col s12 m6 l4"},[n("HomeBill",{attrs:{rates:e.currency.rates}})],1),n("div",{staticClass:"col s12 m6 l8"},[n("HomeCurrency",{attrs:{rates:e.currency.rates,date:e.currency.date}})],1)])],1)},z=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card light-blue bill-card"},[n("div",{staticClass:"card-content white-text"},[n("span",{staticClass:"card-title"},[e._v("Счет в валюте")]),e._l(e.currencies,(function(t){return n("p",{key:t,staticClass:"currency-line"},[n("span",[e._v(e._s(e._f("currency")(e.getCurrency(t),t)))])])}))],2)])},q=[],W={props:["rates"],data:function(){return{currencies:["UAH","USD","EUR"]}},computed:{base:function(){return this.$store.getters.info.bill/(this.rates["UAH"]/this.rates["EUR"])}},methods:{getCurrency:function(e){return Math.floor(this.base*this.rates[e])}}},K=W,X=Object(f["a"])(K,J,q,!1,null,null,null),G=X.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card orange darken-3 bill-card"},[n("div",{staticClass:"card-content white-text"},[e._m(0),n("table",[e._m(1),n("tbody",e._l(e.currencies,(function(t){return n("tr",{key:t},[n("td",[e._v(e._s(t))]),n("td",[e._v(e._s(e.rates[t].toFixed(5)))]),n("td",[e._v(e._s(e._f("date")(e.date)))])])})),0)])])])},V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-header"},[n("span",{staticClass:"card-title"},[e._v("Курс валют")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Валюта")]),n("th",[e._v("Курс")]),n("th",[e._v("Дата")])])])}],Y={props:["rates","date"],data:function(){return{currencies:["UAH","USD","EUR"]}}},Z=Y,ee=Object(f["a"])(Z,Q,V,!1,null,null,null),te=ee.exports,ne={name:"home",data:function(){return{currency:null,loading:!0}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchCurrency");case 2:e.currency=t.sent,e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},methods:{refresh:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$store.dispatch("fetchCurrency");case 3:e.currency=t.sent,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()}},components:{HomeBill:G,HomeCurrency:te}},re=ne,ae=Object(f["a"])(re,B,z,!1,null,null,null),ce=ae.exports;r["a"].use(F["a"]);var oe=[{path:"/",name:"home",meta:{layout:"main"},component:ce},{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return n.e("chunk-5f4ad635").then(n.bind(null,"a55b"))}},{path:"/categories",name:"Categories",meta:{layout:"main"},component:function(){return n.e("chunk-19281f84").then(n.bind(null,"58c2"))}},{path:"/detail",name:"detail",meta:{layout:"main"},component:function(){return n.e("chunk-2d217a99").then(n.bind(null,"c84b"))}},{path:"/history",name:"history",meta:{layout:"main"},component:function(){return n.e("chunk-2d2259e5").then(n.bind(null,"e4bb"))}},{path:"/planning",name:"planning",meta:{layout:"main"},component:function(){return n.e("chunk-2d0d05dc").then(n.bind(null,"6859"))}},{path:"/profile",name:"profile",meta:{layout:"main"},component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))}},{path:"/record",name:"record",meta:{layout:"main"},component:function(){return n.e("chunk-2d0c1056").then(n.bind(null,"43ef"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return n.e("chunk-c420df12").then(n.bind(null,"73cf"))}}],ie=new F["a"]({mode:"history",base:"/vue-crm-pet/",routes:oe}),se=ie,ue=n("2f62"),le=n("59ca"),de=n.n(le),pe={actions:{login:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.dispatch,r=e.commit,a=t.email,c=t.password,n.prev=2,n.next=5,de.a.auth().signInWithEmailAndPassword(a,c);case 5:n.next=11;break;case 7:throw n.prev=7,n.t0=n["catch"](2),r("setError",n.t0),new Error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[2,7]])})))()},logout:function(e){return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,de.a.auth().signOut();case 4:n("clearInfo"),t.next=10;break;case 7:throw t.prev=7,t.t0=t["catch"](1),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()},register:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=e.commit,c=t.email,o=t.password,i=t.name,n.prev=2,n.next=5,de.a.auth().createUserWithEmailAndPassword(c,o);case 5:return n.next=7,r("getUserID");case 7:return s=n.sent,n.next=10,de.a.database().ref("/users/".concat(s,"/info")).set({bill:1e4,name:i});case 10:n.next=16;break;case 12:throw n.prev=12,n.t0=n["catch"](2),a("setError",n.t0),new Error(n.t0);case 16:case"end":return n.stop()}}),n,null,[[2,12]])})))()},getUserID:function(){var e=de.a.auth().currentUser;return e?e.uid:null}}},fe={state:{info:{}},getters:{info:function(e){return e.info}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={}}},actions:{fetchInfo:function(e){return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,r=e.commit,t.prev=1,t.next=4,n("getUserID");case 4:return a=t.sent,t.next=7,de.a.database().ref("/users/".concat(a,"/info")).once("value");case 7:c=t.sent,r("setInfo",c.val()),t.next=13;break;case 11:t.prev=11,t.t0=t["catch"](1);case 13:case"end":return t.stop()}}),t,null,[[1,11]])})))()}}},me={actions:{createCategory:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=e.commit,c=t.title,o=t.limit,n.prev=2,n.next=5,r("getUserID");case 5:return i=n.sent,n.next=8,de.a.database().ref("/users/".concat(i,"/categories")).push({title:c,limit:o});case 8:return s=n.sent,n.abrupt("return",{title:c,limit:o,id:s.key});case 12:throw n.prev=12,n.t0=n["catch"](2),a("setError",n.t0),new Error(n.t0);case 16:case"end":return n.stop()}}),n,null,[[2,12]])})))()}}};r["a"].use(ue["a"]);var he=new ue["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},getters:{error:function(e){return e.error}},actions:{fetchCurrency:function(){return Object(b["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t="ad5c7869bdccf0ccb0e86dec0f25ba0b",e.next=4,fetch("http://data.fixer.io/api/latest?access_key=".concat(t,"&symbols=USD,EUR,UAH"));case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e["catch"](0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},modules:{auth:pe,info:fe,category:me}}),ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-loader"},[n("div",{staticClass:"preloader-wrapper big active"},[n("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},ge=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])}],be={name:"loader",computed:{color:function(){var e=["spinner-blue-only","spinner-red-only","spinner-green-only"];return e[Math.floor(Math.random()*e.length)]}}},we=be,ye=Object(f["a"])(we,ve,ge,!1,null,null,null),_e=ye.exports;n("caad"),n("2532");function ke(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",n={};return t.includes("date")&&(n.day="2-digit",n.month="long",n.year="numeric"),t.includes("time")&&(n.hour="2-digit",n.minute="2-digit",n.second="2-digit"),new Intl.DateTimeFormat("ru-RU",n).format(new Date(e))}function xe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"UAH";return Intl.NumberFormat("ru-RU",{style:"currency",currency:t}).format(e)}var Ce={install:function(e){e.prototype.$message=function(e){k.a.toast({html:e})},e.prototype.$error=function(e){k.a.toast({html:"Ошибка: ".concat(e)})}}},Oe=(n("ea7b"),n("66ce"),n("9483"));Object(Oe["a"])("".concat("/vue-crm-pet/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,r["a"].use(c.a),r["a"].use(Ce),r["a"].filter("date",ke),r["a"].filter("currency",xe),r["a"].component("Loader",_e);var Ee,je={apiKey:"AIzaSyCX5Mnw4Dk7pN2gvpU5Ck9HgU7NOJxHpiw",authDomain:"vue-crm-30e3b.firebaseapp.com",databaseURL:"https://vue-crm-30e3b.firebaseio.com",projectId:"vue-crm-30e3b",storageBucket:"vue-crm-30e3b.appspot.com",messagingSenderId:"747950958653",appId:"1:747950958653:web:54375ad9697301918aa254"};de.a.initializeApp(je),de.a.auth().onAuthStateChanged((function(e){Ee||(Ee=new r["a"]({router:se,store:he,render:function(e){return e(T)}}).$mount("#app"))}))},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},b444:function(e,t,n){"use strict";t["a"]={logout:"Вы вышли из системы","auth/user-not-found":"Пользователя с таким E-mail не существует","auth/wrong-password":"Неверный пароль","auth/email-already-in-use":"Пользователь с таким E-mail уже существует"}}});
//# sourceMappingURL=app.2a11d647.js.map