webpackJsonp([0],[,,,function(t,e,n){"use strict";var a=n(14);e.a={components:{ShareComponent:a.a},data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"bubble_chart",title:"Inici",path:"/"},{icon:"schedule",title:"Rellotge",path:"clock"},{icon:"videogame_asset",title:"Joc",path:"game"},{icon:"format_paint",title:"Pintar",path:"paint"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Eric Multimedia"}},name:"App"}},function(t,e,n){"use strict";e.a={name:"Share",data:function(){return{data:"example",show:!1}},methods:{share:function(){navigator.share({title:"My awesome post!",text:"El espacio-tiempo le dice a la materia cómo moverse; la materia le dice al espacio-tiempo cómo curvarse.",url:window.location.href}).then(function(){console.log("Thanks for sharing!")}).catch(function(t){console.log("Couldn't share because of",t.message)})}},mounted:function(){navigator.share&&(this.show=!0)}}},function(t,e,n){"use strict";e.a={name:"Music",data:function(){return{data:"example"}},mounted:function(){console.log("Mounted ok")}}},function(t,e,n){"use strict";e.a={name:"name",data:function(){return{data:"example",fps:10}},mounted:function(){function t(){e(s,c),n(s,c),a(s,c)}function e(t,e){var n;t.beginPath(),t.arc(0,0,e,0,2*Math.PI),t.fillStyle="white",t.fill(),n=t.createRadialGradient(0,0,.95*e,0,0,1.05*e),n.addColorStop(0,"#333"),n.addColorStop(.5,"white"),n.addColorStop(1,"#333"),t.strokeStyle=n,t.lineWidth=.1*e,t.stroke(),t.beginPath(),t.arc(0,0,.1*e,0,2*Math.PI),t.fillStyle="#333",t.fill()}function n(t,e){var n,a;for(t.font=.15*e+"px arial",t.textBaseline="middle",t.textAlign="center",a=1;a<13;a++)n=a*Math.PI/6,t.rotate(n),t.translate(0,.85*-e),t.rotate(-n),t.fillText(a.toString(),0,0),t.rotate(n),t.translate(0,.85*e),t.rotate(-n)}function a(t,e){var n=new Date,a=n.getHours(),o=n.getMinutes(),r=n.getSeconds();a%=12,a=a*Math.PI/6+o*Math.PI/360+r*Math.PI/21600,i(t,a,.5*e,.07*e),o=o*Math.PI/30+r*Math.PI/1800,i(t,o,.8*e,.07*e),r=r*Math.PI/30,i(t,r,.9*e,.02*e)}function i(t,e,n,a){t.beginPath(),t.lineWidth=a,t.lineCap="round",t.moveTo(0,0),t.rotate(e),t.lineTo(0,-n),t.stroke(),t.rotate(-e)}var o,r=document.getElementById("canvas"),s=r.getContext("2d"),c=r.height/2;s.translate(c,c),c*=.9,function(){"undefined"!=typeof Worker?(void 0===o&&(o=new Worker("static/js/worker.js")),o.onmessage=function(e){t()}):(t(),document.getElementById("result").innerHTML="Sorry! No Web Worker support.")}()}}},function(t,e,n){"use strict";e.a={data:function(){return{myObstacle:null,myGamePiece:null,myObstacles:[],myScore:null,myGameArea:{canvas:document.createElement("canvas"),start:function(){this.canvas.width=480,this.canvas.height=270,this.context=this.canvas.getContext("2d"),document.getElementById("canvas").appendChild(this.canvas),this.frameNo=0,this.interval=setInterval(this.updateGameArea,20)},clear:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},stop:function(){clearInterval(this.interval)}}}},methods:{everyinterval:function(t){return this.myGameArea.frameNo/t%1==0},restartGame:function(){this.myGameArea.clear()},startGame:function(){this.myGameArea.start(),this.myGamePiece=new this.Component(30,30,"red",10,120,this.myGameArea.context,this.myGameArea.canvas),this.myScore=new this.Component("30px","Consolas","black",280,40,this.myGameArea.context,this.myGameArea.canvas,"text"),this.myObstacle=new this.Component(10,200,"green",300,120,this.myGameArea.context,this.myGameArea.canvas),setInterval(this.updateGameArea,20)},accelerate:function(t){this.myGamePiece.gravity=t},Component:function(t,e,n,a,i,o,r,s){this.type=s,this.width=t,this.height=e,this.speedX=0,this.speedY=0,this.x=a,this.y=i,this.gravity=.05,this.gravitySpeed=0,this.update=function(){"text"===this.type?(o.font=this.width+" "+this.height,o.fillStyle=n,o.fillText(this.text,this.x,this.y)):(o.fillStyle=n,o.fillRect(this.x,this.y,this.width,this.height))},this.newPos=function(){this.gravitySpeed+=this.gravity,this.x+=this.speedX,this.y+=this.speedY+this.gravitySpeed,this.hitBottom()},this.hitBottom=function(){var t=r.height-this.height;this.y>t&&(this.y=t)},this.crashWith=function(t){var e=this.x,n=this.x+this.width,a=this.y,i=this.y+this.height,o=t.x,r=t.x+t.width,s=t.y,c=t.y+t.height,l=!0;return(i<s||a>c||n<o||e>r)&&(l=!1),l}},updateGameArea:function(){for(var t,e,n,a,i,o,r,s=0;s<this.myObstacles.length;s+=1)if(this.myGamePiece.crashWith(this.myObstacles[s]))return void this.myGameArea.stop();for(this.myGameArea.clear(),this.myGameArea.frameNo+=1,(1===this.myGameArea.frameNo||this.everyinterval(150))&&(t=this.myGameArea.canvas.width,a=20,i=200,e=Math.floor(Math.random()*(i-a+1)+a),o=50,r=200,n=Math.floor(Math.random()*(r-o+1)+o),this.myObstacles.push(new this.Component(10,e,"green",t,0,this.myGameArea.context,this.myGameArea.canvas)),this.myObstacles.push(new this.Component(10,t-e-n,"green",t,e+n,this.myGameArea.context,this.myGameArea.canvas))),s=0;s<this.myObstacles.length;s+=1)this.myObstacles[s].x+=-1,this.myObstacles[s].update();this.myScore.text="SCORE: "+this.myGameArea.frameNo,this.myScore.update(),this.myGamePiece.newPos(),this.myGamePiece.update()},moveup:function(){this.myGamePiece.speedY-=1},movedown:function(){this.myGamePiece.speedY+=1},moveleft:function(){this.myGamePiece.speedX-=1},moveright:function(){this.myGamePiece.speedX+=1},stopMove:function(){this.myGamePiece.speedX=0,this.myGamePiece.speedY=0}},mounted:function(){this.startGame()}}},function(t,e,n){"use strict";var a=n(36),i=n.n(a);e.a={name:"name",data:function(){return{mouseDrawing:!1}},methods:{CanvasDrawr:function(t){var e=document.getElementById(t.id),n=e.getContext("2d");e.style.width="100%",e.width=e.offsetWidth,e.style.width="",n.lineWidth=t.size||Math.ceil(35*Math.random()),n.lineCap=t.lineCap||"round",n.pX=void 0,n.pY=void 0;var a=[],o=i()(e).offset(),r={init:function(){e.addEventListener("touchstart",r.preDrawTouch,!1),e.addEventListener("touchmove",r.drawTouch,!1),e.addEventListener("mousedown",r.preDrawMouse,!1),e.addEventListener("mousemove",r.drawMouse,!1),e.addEventListener("mouseup",r.quitMouse,!1)},quitMouse:function(){this.mouseDrawing=!1},preDrawTouch:function(t){i.a.each(t.touches,function(t,e){var n=e.identifier,i=["red","green","yellow","blue","magenta","orangered"],r=i[Math.floor(Math.random()*i.length)];a[n]={x:this.pageX-o.left,y:this.pageY-o.top,color:r}}),t.preventDefault()},preDrawMouse:function(t){this.mouseDrawing=!0;var e=["red","green","yellow","blue","magenta","orangered"],n=e[Math.floor(Math.random()*e.length)];a[0]={x:t.pageX-o.left,y:t.pageY-o.top,color:n},t.preventDefault()},drawTouch:function(t){i.a.each(t.touches,function(t,e){var n=e.identifier,i=this.pageX-o.left-a[n].x,s=this.pageY-o.top-a[n].y,c=r.move(n,i,s);a[n].x=c.x,a[n].y=c.y}),t.preventDefault()},drawMouse:function(t){if(this.mouseDrawing){var e=t.pageX-o.left-a[0].x,n=t.pageY-o.top-a[0].y,i=r.move(0,e,n);a[0].x=i.x,a[0].y=i.y,t.preventDefault()}},move:function(t,e,i){return n.strokeStyle=a[t].color,n.beginPath(),n.moveTo(a[t].x,a[t].y),n.lineTo(a[t].x+e,a[t].y+i),n.stroke(),n.closePath(),{x:a[t].x+e,y:a[t].y+i}}};return r.init()}},mounted:function(){this.CanvasDrawr({id:"example",size:15})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=n(13),o=n(19),r=n(38),s=n.n(r),c=n(39);n.n(c);a.a.use(s.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,components:{App:i.a},template:"<App/>"})},,,,function(t,e,n){"use strict";var a=n(3),i=n(18),o=n(0),r=o(a.a,i.a,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";function a(t){n(15)}var i=n(4),o=n(17),r=n(0),s=a,c=r(i.a,o.a,!1,s,null,null);e.a=c.exports},function(t,e){},,function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.show?n("v-btn",{attrs:{fab:"",bottom:"",right:"",color:"pink",dark:"",fixed:""},on:{click:t.share}},[n("v-icon",[t._v("share")])],1):n("v-speed-dial",{attrs:{fixed:"",bottom:!0,right:!0,direction:"top"}},[n("v-btn",{attrs:{slot:"activator",color:"blue darken-2",dark:"",fab:"",hover:""},slot:"activator"},[n("v-icon",[t._v("account_circle")]),t._v(" "),n("v-icon",[t._v("close")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"green"}},[n("v-icon",[t._v("edit")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"indigo"}},[n("v-icon",[t._v("add")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"red"}},[n("v-icon",[t._v("delete")])],1)],1)],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,a){return n("v-list-tile",{key:a,attrs:{value:"true",to:e.path}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),t._v(" "),n("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("web")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("remove")])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("menu")])],1)],1),t._v(" "),n("v-content",[n("router-view")],1),t._v(" "),n("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:"",app:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-tile",{on:{click:function(e){t.right=!t.right}}},[n("v-list-tile-action",[n("v-icon",[t._v("compare_arrows")])],1),t._v(" "),n("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),n("share-component"),t._v(" "),n("v-footer",{attrs:{fixed:t.fixed,app:""}},[n("span",[t._v("© 2017")])])],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},function(t,e,n){"use strict";var a=n(2),i=n(20),o=n(21),r=n(25),s=n(28),c=n(31),l=n(34);a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"HelloWorld",component:o.a},{path:"/music",name:"Music",component:r.a},{path:"/clock",name:"Clock",component:s.a},{path:"/game",name:"Game",component:c.a},{path:"/paint",name:"Paint",component:l.a}]})},,function(t,e,n){"use strict";function a(t){n(22)}var i=n(23),o=n(0),r=a,s=o(null,i.a,!1,r,"data-v-a83890d0",null);e.a=s.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-slide-y-transition",{attrs:{mode:"out-in"}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("img",{staticClass:"mb-5",attrs:{src:n(24),alt:"Vuetify.js"}}),t._v(" "),a("blockquote",[a("h1",[t._v("Eric multimedia 2n DAM")]),t._v(" "),a("footer",[a("small",[a("em",[t._v("—Eric Garcia Reverter")])])])])])],1)],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfgDAgBJwAB06yeAAAAanRFWHRSYXcgcHJvZmlsZSB0eXBlIGFwcDEACmFwcDEKICAgICAgMzQKNDk0OTJhMDAwODAwMDAwMDAxMDAzMTAxMDIwMDA3MDAwMDAwMWEwMDAwMDAwMDAwMDAwMDUwNjk2MzYxNzM2MTAwMDAK3JU+DAAAFGVJREFUeNrtnXuU1dV1xz/7/O5j5s6DVwQ1AgafgIAWRR1AraVJtGoMikp8xWiMTdOmq+1aSdulaZgxaf5su9IWkGIVkDcKKAoCoqgYJWKUiMpDBEEFZpjHvTP39dv943fvqDgz3Ln3nt+9M6vftViLgbm/fc753u/vnLPP2XsLJcLI37YChEXkN6B1QNq60WQCd88u0URcQPzopiBymEDwr4CDB/5jsh82v4SA7xazPRcQkbjCRyg/9cWogrouqHo/+NJRZxGh8Gekkv7YOwGmJFaBD39ckx3iNcBef6z6RGoWIm0Y8xixtsSBf7vcX9sZlIxg8ISUdAO7EVlbynZYg8hWguGXCYVL1oSSErz/x9UETUqBZUBTKdtSfEgC4yygPdqmp1aXrBUlJRjIvDVlO8hLpW5KUWFkB05gPaEwB/9xXOmaUepxcF0FaEd4AkiUuj1FgiJmMS1NR6geUNKGlJzgj35Sk/mbbAZ5275FHxZaYt7HCayiZgAHfn2BfXs9oOQEA6gqgn6KsNyyIX86ZMzKA/9e9yHhCn/s9QBfdvu54Mz/igKMQXUd6AgrXY23k97zLiQt7klFDhMIXYPqWwd+O9WenRxRFgoG78WpgeAuhGdL3ZaCIOZprR24U0u4Nfoiyobgppa3kVTCBZYCLdYM2XxLizTjOIuk6WhKLppg0VDuKBuCW352GYqgmNcQebXU7ckLYjYTqthGOMyBu/5fwV9FOo3gtgGLgVSpm9M7SAfGLCTa0q4VpXNsnIiyInj/T2qzf90A8m7xLVh8Pxt5g0BwI+EKDv5r6RwbJ6LL06RfvKao0vkHoKHOpwW3gggfq7ASpbgjZY9fFzELaWtpcocMsz1CnZj39pc7dO+4r3LUJcFpAUcBYaLAdEAeetX6HjIJPA7sfmxHFOBJ4H7gNN9GLF+IeRcnsFaqqlnwdxNo+pFOcwzTsO9VMS5s/7iZZTWhrm11SbCb+SQQVbgNZZQv4ySowL8MiRiOxnhHxN2A6l3FtWJhzI0slcOHD/7iwRv4rIXaoMPPXZc/82HI4i7cO3wAery9m6Z19Y+/muRJPR1jF56qfIEq0134+rXnVCJoCmUJEC3Kw8WSnEQ+wjgrdNhQBlUHcQxXCfhy+KuwJZFmTXsS7h7T9RTa7SJrVp1gIgAsBD7wo8HAaIFvZm57gJiXQV73yXZ+ELNGTh3x7j03jiOaJGyE24GID5ZjrjK7MkBLogfHXM+raIWg8IEIC30arkBmSqieOa4ScJuBJXizRvlB5BjGWaSHPnQnjBpIZYCLBab5YVphU8plfTwNd43tfgHcI8H1k4WU917zT8XK5cBlAQEQEFkH8n4xHi1ocd/TYjYRrtw+fvRpHIliRPgeMNiHUWpzlf+uDND2T1t6/sWT74MVUml2i7DAh4YD1AC3iYPzp98IETGh/QhPFePBRT1MEolhzOPEWuP3XHMOQyKcb+B6PwZI4bl4ms2xJOy5r+ft60kJnjVZCDgALER4z5cOKN9y04w+ozZALB0HZSVwxA/bOUNkG4HQi1UDqhkaASPMAIb7YLnZVeZEAsRiORyK5ebJEnAT7BF8m4vPAG5EoSokqJgdiGzyyXYuA5LCOAuJtTb/8r6L+STKcIEZflhWeCbhsiWehnsvOLnzKSeCZ10umDAg/qkYuEmE06aPiSC4CbzFVodPtnuGyNs4gXUmUkVVEBzDdQKjfbDcmFk5x/c35vaBnH3RroKj7MWvfbEyVmGadP7IFpA3C31oUVZZxizl6OHD9fdPIppgsMD38MGv78LqaJJX25Pws8tycx3n3KiGOiEFiHfSs8t2Z4AgMBOhaua4CAZpRFiK77fXT4CYvTjOChk8lNpKh4DhaoFLfLB8RJVHqkMkvnde7ucCvfrWqQsKexDfVDxZlUuDRjKsylqQfb7Y7g4iTzqjx+9+YMYEYkkiItwJWD/8VVjVluC1eC8PUXtFcMOUzm/OE4CF47yvoBa4RQRz8WlBEmlnD0L+URCFal/kCI6zOL1zh55/Rg0hh0sFrvRhHA6nlbk1YVK7c5x7s8hr3jAu+/BrX6xc4yrnjR4aJOSUOApCzLNEanZMnjiSljhOxi1p/eKzC8uPd/BmPAUPXd67Y9teE1xfJ6gBgUX4o+IRwHeMQIUjKPIGyIs+2P0yRFoxZiEtTcmbrxhBJMh4gWttm1U46CrzBleS7s3cm0VeCnYBUT5EeMx2BzO9vFmVYTMuiCBoB8IS8o2CyPc1LbKVQHDr0GEDuekscDzHhvWzalUW723kD7k4NbpCXgQ31Amu92VaDPzRdieBcQpXeyYFkI35RUHkzW4CMQtoj0V/dseFLNvNKBFust1phQ/TyqNnDUbvPD+/GzX5790UcDtVbHvrEsLbMlXePLYSA58hLOvtQ/K+dCSyg0BwQ6g6wuAKMMKNAudY7jMKC2/5FTs7CrinnzfB9ZMl+2l/VKxMVeXiSEBwUUDWAAd6OWD5WTZmEW0tR2bdP4ljHZxihNuwHxWy23V5bPk/wx2j8zdVkPfFBQKw3ycVDxS4xTXI+UOCpFV2IfJMr56QTwvFvI9xVhOppipkcIRvC1xoua+4yuPTzuT9RIGZSwoi+OE6IU2nd8u6ilW5zrice8kZIRxxXbwtUy+iIPJwVRqzkjXz9/38+xcTS1Kd2RoFrfYTdqWVxzfuh3xWzl9qfhEaA8pHCP+LfRWfCVwvQNARQLYh8oo1ayKHMGYJ193N6YPChANMFbCdKkcV5o8YwL7WIkRLF0xwfZ1kSV4C7LTceVSZoXDKrWMjANGMXTtREGLWUTPonenTzqMtQUjgdsBq2ILCO2mXxQea4Z4xhU/zxTkBEVD/VDwBuMpk+y6yHqT404NIM8ZZwPFj6SvGD6UyyIUC37TcN1eV+QMr+ChapAjXohBcXycYz7u1BOEdy4MQxtsyVXzn/AqMcAhhVU6f7M1XT8wLhEK/O3PkEPa3IJn7VqfY7JjCjpSy5HgHfL8I6oUinmG6CuJtW+yrWLlSlYm1YYPrXbRaBRwu2vNF4hizgPZo7G9uHsvwGs41cIPVPkHaVR6pDXMoXsT49KIR3DBZsndblwK2c20MFrg5MhCG1zqoOju9V/XJkOP3TuR1AsFN4aoIgzzHxk3AN2x2SOH1tLKyNQ53Fkm9UOxbCK6nYhEexbKKFa6PHefsq75RgUg6hffFKkYUhIs4i2hraWy4fxJHY5wucIvNvgBJVR6pDPBpb897T4aiElz/+XnxMoQ/WB0SZZTAdQI4RlBkKyK/K/i5Yv5IwFkjVdVEQkLQcK2A1VQ5CtuSLk+2J+HOArxWXaHo94gUUOUg3lxsMyJBFG5BGOJd6dEWPBUXZtOY5ezeefChey8hmmSgeI4Nx2I/4q4ytzrEsSYLVwqLTnB9nSAGRFjqg4ovQrnSCKh3ytRzFMTJJg2RAzjOMkaN5pTaIEEvkOxSu11ga1pZE0vBA+OL7962chPQVTDKxwKPYlfFFQozgfC3zw4zaXDkJFEQJ2FYzGp36Nd33XX9WGJJKoxwB1Bpsf0drjK7IsDxo812DFghuKGuc0W9HOEtW6MDgHKVKhcOrXL4XWMMkBUgR3r4/a4h0ohxnjCHP3Innj2IgOESgavtNp3NiTTPtSfgxxPtHE5Zu8urXt5tP1T8NYEZTYNhaMSg8BbQ+ygIkee1ouKNcaNP51AbxvEcG4MstjvqKnMiQVqOxOwZsUZw/RRBvC/lcoQd9roAqtwwsJFR3zqnAlE9SRREFxIWiWGchRJti//gmrMZVsVY4DqrbYbnky4bOlLw1xfZO1q2exvfgCqHfFDx2cC1AhgjqMgWRH6f86dFthEIvjBgcA3TzvICycSLj7KF1kwISvS3my1awTLBsy7zVtSIdRULyq0Kg267IIKoNqIs4yty7WoClhRiFhJrbXnonoms381IgZttjovCs8kUL8RT8NKP7F4MsR5Poy6gHBaYj93KKhOBqQFDtuLHGpAv14Lokl8vkMyJVFMdAke4QeA8i+087iqzK0K0N7YX/rCTwTrB9ZMle49ihWUVV+KdMoWuOjNM0pW9kEMUhDFLOH7s8C/vn0RrnCEizLQ5LgprY3G2xuLwlxPs5x7zJ9Odx7B9FStXqzJh+ACHoFHN5J/uPgpCZC/GrGLAIAZ4gWR/LvAnFkfiWFqZWxUmfnuRXZLdwReC6ydLNo3RCoQCQ0B7xFBgugjUhgVFtiPSfRYLMU+mL5rywU9nXkQsSVXGLWktkEzhqfYUr8btlwDrhG+5KsXr4SfYV/GNKCO/c34lgrZDN1EQIp/hOIud37+ko06rIuRwucAVFofgM1eZUx0kWczz3pPBN4Jn1XVWk1uJkPsWpvc4V+EaIZNry4uCyPjEv7DKErOeisiOqyaNJBonkLktWZuHvZzgwopoku3xNNyTQ+qFYsHXbLMKiH0VG+BWhAG3XlCJoEeAFZ0NgExFMmcB0dbkjVNGUBFgvMA1Frt+OBO8nZp5rr9VFHwluKHOS0aJd8XGnoqVSapMCXnnxCDyFMhHnf8vspVQ+OVThg7kpishE6lgLU2sC0sOtbGjvQTlC33PF63erY9PEP4He0m/I8BtCsFJXw+iynsI6zL/l8Q4C4i1tv38jgks2cRZInzXYpcPuMr806tx78gzgKwQ+E5ww5RsOgZWWZ2LlWnABed9LYiIuhhnGepGMeZNnMD6QFUVgyshYPiueK5OK3CVxbsbebujRPnrS5LxXTyGPwWrKj5VMlumqqBBasPbSKW24ASW0d52pP6Hl3A0xjDxXs+2sM+F+ecOQUuhXigRwbMmd3Z2FbDdlh1VvqvK8OljKun4zS+imkz+kmBokVTVMjBiCBi+JTDeln1XWTDjbN6NlbBgX8kKYz34infJRuGHKP+JnWLVaYQHRHgknYaHM5cCl3ygKNSGDCtsZYdVeD/lcp3ABzPOKV39sZIV5cjGNAk8hfCGJTMO3mKrxmR6+s9blLADAWGqzcTdqjw+YgAfFBr+WShKW3XFK/rxmcA8bM3FyqUoddkfx5wKLQlCmftWVZa69ce0suBAC9xeork3i5ISXD85c+tDeArBVmb3aoHbxBB48BWlIgARu4m71VUeHTWQD1vKILNmyesmZUJPjwCP4FVeKb4N5ZvqMjYgsL8Jk3FsfM1Sf/7gwhP7mnPLBmsbJSe4PuvdEtZYVPHpwI2n18DwgZwn9gLJXFXm1YY4GItbstBLlJxgyHi3lCOZudiOQ0+Zvu84pznCdGCkHRP8PumyvLkD7h5bevVCmRDcMLnTu7UaofD4oq4xuibMDyzet0qpMq82zOFipF4oFsqC4CwUjmJJxQrBoPAPwFhLbX89paxoS8B9ZTD3ZlE2BNdnaiOKsBrhNRs2RBiodjLkJBRmR4IcSZRZzdSyIRjIntceE4srakvNfjXlehXICklaZgNlRXB91kctrEXYVuznC1Z8s3FXmVMZpPGQvbrleaOsCIbOe9RZFZfRcqWb9sKLKZen2xPwt5YCyApB2RFc//mK2oqKi4xYJvyzOVGexffKj+AsFBrxVtRFU3Gx9aWwOenyXDwN+ab7tY2yJLi+TjLRJ6xFeLVoDy4uB179wCBtTW1+j1DuKEuCwcsSgNJYrnOxwoZEmk0dSXjAYvhnoShbghvqOgftaYSiJBwtIg0tmbk3Vi4+5+5QtgQDpL3VVhOeistmKBXWtafY0pGCH4wrX/VCmRP88GTJloR9plgqLgKaXGV2VZCOcjjvPRnKmmDACyBXmqQIKi6G1lxYG03xcnsKHvAh/LNQlD3Bsy7vzPXxDJRcxUdVmVMTJHF7gZnY/ULZEwydlbuPI8ylEBUXyInCqrY420oRgpIv+gTBX/BurQNezvc5BfL7SdrlkZowqWjZbdq6R58gGCDtxTRlVez78kZhRWsm/PN+CykHbaHPEPyrKZ0r6oJUnCc+Tnu3NfKqH1hK9BmCgexiq9lvFbvKkr3HeautD72as+hTBM/63Lv1LMLW3n4+H+0p7Hdh/lmDcL9fZof5uaBPEQzeilqgGfxRscKile/yTnsfVC+UMPisEDz4ioJXmHkpmlupGwWGReCMXmThUNiTcvkLgfdKGUBWCPqcggHUy+fSnPFu5ZwvTqR332j1wj/fK1XwdjHQJwlu+LzM+XMIL9mwofBeWnl8+Z7i11HwE32SYADX8ya14M3Fxc76qAqPjhjInmJXQfEbfZbghisz3i1hPcKLuXwmVx0q7Ey7PHGgGUqVeqFY6LMEA7hpEGgRmEPxVOyqMn9whP3NFjOx+4U+TfDDUz3vlsIGhBdO+oEcxKjwVlpZ3NQO9/Uhl2R36NMEA7jeHNmKt6LuUXM50JVWmFcT5lBHHzox6gl9nuCHr+iMaVqfk4p7gML2tMvy1njfXjl/EX2eYIBEDFDaxFtR5ztzplSZWx3m0xYfMrH7hX5B8G+mdart+XxVnK0f2NrRP+beLPoFwQCuCwhtmRV1lyrugbaEq8yNBDna2gcu0vUG/YbghimdK+qNCF0Xq+mGYYWX0y6r25P9S73QjwiGzn1xG95c/KVawj3Q1uEqsyuDHD/SWuoeFB/9iuCHp2ay5wnPd6XirkhW2JJIsy6WhJ+UYfhnoehXBENnbYgoJ6i4m5qUMVeZHQnR0tbP5t4s+h3Bs+o6b2Bu5AtFKrtR78ZkmvUdif4392bR7wgGwLuBGc3c3epU8QkUtrousyuDRD9u6uXz+xD6JcH1Uzoz2W5C2NjV7yisT7hs6kjB31/WP9UL/ZRgAPF81Nm52AvR/pzH5szKub2vn/eeDP2W4FlXdJ4Xb86qOMuvC093JHmxIwl3j+m/6oV+THAWoieoGBpVmRMJEZ95balbZx/9muD6z1fUm4ENAAqr25O8Ek8Be/q3eqGfEwxeGnmBGMI8YI/C3EiI5Mw+FoKSL/o9wb+uE4xAhcNWhFkuvOln9c9S4/8AnvsEmK7rtXMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTYtMTItMDhUMDE6Mzk6MDArMDE6MDBqlVScAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE2LTEyLTA4VDAxOjM5OjAwKzAxOjAwG8jsIAAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg=="},function(t,e,n){"use strict";function a(t){n(26)}var i=n(5),o=n(27),r=n(0),s=a,c=r(i.a,o.a,!1,s,"data-v-293e672a",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{attrs:{color:"success"}},[t._v("Do")]),t._v(" "),n("v-btn",{attrs:{color:"error"}},[t._v("Re")]),t._v(" "),n("v-btn",{attrs:{color:"warning"}},[t._v("Mi")]),t._v(" "),n("v-btn",{attrs:{color:"info"}},[t._v("Fa")]),t._v(" "),n("v-btn",{attrs:{color:"success"}},[t._v("Sol")]),t._v(" "),n("v-btn",{attrs:{color:"error"}},[t._v("La")]),t._v(" "),n("v-btn",{attrs:{color:"warning"}},[t._v("Si")]),t._v(" "),n("v-btn",{attrs:{color:"info"}},[t._v("Do'")])],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},function(t,e,n){"use strict";function a(t){n(29)}var i=n(6),o=n(30),r=n(0),s=a,c=r(i.a,o.a,!1,s,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas",{staticStyle:{"background-color":"#333"},attrs:{id:"canvas",width:"400",height:"400"}}),t._v(" "),n("output",{attrs:{id:"result"}})])}],o={render:a,staticRenderFns:i};e.a=o},function(t,e,n){"use strict";function a(t){n(32)}var i=n(7),o=n(33),r=n(0),s=a,c=r(i.a,o.a,!1,s,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{attrs:{id:"canvas"}}),t._v(" "),n("div",[n("v-btn",{on:{mousedown:function(e){t.accelerate(-.2)},mouseup:function(e){t.accelerate(.1)},touchstart:function(e){t.accelerate(-.2)},touchend:function(e){t.accelerate(-.1)}}},[t._v("ACCELERATE")])],1)])},i=[],o={render:a,staticRenderFns:i};e.a=o},function(t,e,n){"use strict";function a(t){n(35)}var i=n(8),o=n(37),r=n(0),s=a,c=r(i.a,o.a,!1,s,null,null);e.a=c.exports},function(t,e){},,function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{attrs:{id:"content"}},[n("canvas",{attrs:{id:"example",height:"450",width:"300"}})])])},i=[],o={render:a,staticRenderFns:i};e.a=o},,function(t,e){}],[9]);
//# sourceMappingURL=app.82a388a5fb4b1cee931e.js.map