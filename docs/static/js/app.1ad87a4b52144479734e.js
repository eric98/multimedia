webpackJsonp([5],[,,,function(t,e,n){"use strict";var i=n(10);e.a={components:{ShareComponent:i.a},data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"bubble_chart",title:"Inici",path:"/"},{icon:"schedule",title:"Rellotge",path:"clock"},{icon:"videogame_asset",title:"Joc",path:"game"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Eric MUUUUUUUUUUUUUultimedia"}},name:"App"}},function(t,e,n){"use strict";e.a={name:"Share",data:function(){return{data:"example",show:!1}},methods:{share:function(){navigator.share({title:"My awesome post!",text:"El espacio-tiempo le dice a la materia cómo moverse; la materia le dice al espacio-tiempo cómo curvarse.",url:window.location.href}).then(function(){console.log("Thanks for sharing!")}).catch(function(t){console.log("Couldn't share because of",t.message)})}},mounted:function(){navigator.share&&(this.show=!0)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),a=n(9),o=n(15),r=n(17),c=n.n(r),l=n(18);n.n(l);i.a.use(c.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:o.a,components:{App:a.a},template:"<App/>"})},,,,function(t,e,n){"use strict";var i=n(3),a=n(14),o=n(1),r=o(i.a,a.a,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";function i(t){n(11)}var a=n(4),o=n(13),r=n(1),c=i,l=r(a.a,o.a,!1,c,null,null);e.a=l.exports},function(t,e){},,function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.show?n("v-btn",{attrs:{fab:"",bottom:"",right:"",color:"pink",dark:"",fixed:""},on:{click:t.share}},[n("v-icon",[t._v("share")])],1):n("v-speed-dial",{attrs:{fixed:"",bottom:!0,right:!0,direction:"top"}},[n("v-btn",{attrs:{slot:"activator",color:"blue darken-2",dark:"",fab:"",hover:""},slot:"activator"},[n("v-icon",[t._v("account_circle")]),t._v(" "),n("v-icon",[t._v("close")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"green"}},[n("v-icon",[t._v("edit")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"indigo"}},[n("v-icon",[t._v("add")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"red"}},[n("v-icon",[t._v("delete")])],1)],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,i){return n("v-list-tile",{key:i,attrs:{value:"true",to:e.path}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),t._v(" "),n("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("web")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("remove")])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("menu")])],1)],1),t._v(" "),n("v-content",[n("router-view")],1),t._v(" "),n("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:"",app:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-tile",{on:{click:function(e){t.right=!t.right}}},[n("v-list-tile-action",[n("v-icon",[t._v("compare_arrows")])],1),t._v(" "),n("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),n("share-component"),t._v(" "),n("v-footer",{attrs:{fixed:t.fixed,app:""}},[n("span",[t._v("© 2017")])])],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";var i=n(2),a=n(16),o=function(){return n.e(0).then(n.bind(null,21))},r=function(){return n.e(1).then(n.bind(null,22))},c=function(){return n.e(3).then(n.bind(null,23))},l=function(){return n.e(2).then(n.bind(null,24))};i.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"HelloWorld",component:o},{path:"/music",name:"Music",component:r},{path:"/clock",name:"Clock",component:c},{path:"/game",name:"Game",component:l}]})},,,function(t,e){}],[5]);
//# sourceMappingURL=app.1ad87a4b52144479734e.js.map