!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){t.exports=(()=>{"use strict";var t={594:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Explosion=void 0;var i=n(485);e.Explosion=class{constructor(t){var{x:e,y:n,ctx:o,hue:r,friction:s,gravity:a,explosionLength:h,brightness:c}=t;for(this._coordinates=[],this._alpha=1,this._x=e,this._y=n,this._ctx=o,this._friction=s,this._gravity=a,this._explosionLength=h;this._explosionLength--;)this._coordinates.push([e,n]);this._angle=(0,i.randomFloat)(0,2*Math.PI),this._speed=(0,i.randomInteger)(1,10),this._hue=(0,i.randomInteger)(r-20,r+20),this._brightness=(0,i.randomInteger)(c.min,c.max),this._decay=(0,i.randomFloat)(c.decay.min,c.decay.max)}update(t){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._friction,this._x+=Math.cos(this._angle)*this._speed,this._y+=Math.sin(this._angle)*this._speed+this._gravity,this._alpha-=this._decay,this._alpha<=this._decay&&t()}draw(){var t=this._coordinates.length-1;this._ctx.beginPath(),this._ctx.moveTo(this._coordinates[t][0],this._coordinates[t][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle="hsla(".concat(this._hue,", 100%, ").concat(this._brightness,"%, ").concat(this._alpha,")"),this._ctx.stroke()}}},716:function(t,e,n){var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function s(t){try{h(i.next(t))}catch(t){r(t)}}function a(t){try{h(i.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}h((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Sound=void 0;var o=n(485);e.Sound=class{constructor(t){this._buffer=[];var e=window.AudioContext||window.webkitAudioContext;this._audioContext=new e,this.options=Object.assign({enable:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},t),this.options.enable&&this.load()}load(){return i(this,void 0,void 0,(function*(){for(var t of this.options.files){var e=yield(yield fetch(t)).arrayBuffer();this._audioContext.decodeAudioData(e,t=>{this._buffer.push(t)})}}))}play(){return i(this,void 0,void 0,(function*(){if(this.options.enable)if(this._buffer.length){var t=this._audioContext.createBufferSource(),e=this._buffer[(0,o.randomInteger)(0,this._buffer.length-1)],n=this._audioContext.createGain();t.buffer=e,n.gain.value=(0,o.randomFloat)(this.options.volume.min/100,this.options.volume.max/100),n.connect(this._audioContext.destination),t.connect(n),t.start(0)}else yield this.load()}))}}},377:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Trace=void 0;var i=n(485);e.Trace=class{constructor(t){var{x:e,y:n,dx:o,dy:r,ctx:s,hue:a,speed:h,acceleration:c,traceLength:d}=t;for(this._coordinates=[],this._currentDistance=0,this._x=e,this._y=n,this._sx=e,this._sy=n,this._dx=o,this._dy=r,this._ctx=s,this._hue=a,this._speed=h,this._acceleration=c,this._traceLength=d,this._totalDistance=this.getDistance(e,n,o,r);this._traceLength--;)this._coordinates.push([e,n]);this._angle=Math.atan2(r-n,o-e),this._brightness=(0,i.randomInteger)(50,70)}update(t){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._acceleration;var e=Math.cos(this._angle)*this._speed,n=Math.sin(this._angle)*this._speed;this._currentDistance=this.getDistance(this._sx,this._sy,this._x+e,this._y+n),this._currentDistance>=this._totalDistance?t(this._dx,this._dy,this._hue):(this._x+=e,this._y+=n)}draw(){var t=this._coordinates.length-1;this._ctx.beginPath(),this._ctx.moveTo(this._coordinates[t][0],this._coordinates[t][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle="hsl(".concat(this._hue,", 100%, ").concat(this._brightness,"%)"),this._ctx.stroke()}getDistance(t,e,n,i){var o=Math.pow;return Math.sqrt(o(t-n,2)+o(e-i,2))}}},485:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.randomInteger=e.randomFloat=void 0;var i=n(461);Object.defineProperty(e,"randomFloat",{enumerable:!0,get:function(){return i.randomFloat}});var o=n(732);Object.defineProperty(e,"randomInteger",{enumerable:!0,get:function(){return o.randomInteger}})},461:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.randomFloat=void 0,e.randomFloat=function(t,e){return Math.random()*(e-t)+t}},732:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.randomInteger=void 0,e.randomInteger=function(t,e){return Math.floor(t+Math.random()*(e+1-t))}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}var i={};return(()=>{var t=i;Object.defineProperty(t,"__esModule",{value:!0}),t.Fireworks=void 0;var e=n(377),o=n(716),r=n(594),s=n(485);t.Fireworks=class{constructor(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.hue={min:0,max:360},this.rocketsPoint=50,this.speed=2,this.acceleration=.05,this.friction=.95,this.gravity=1.5,this.particles=50,this.trace=3,this.explosion=5,this.autoresize=!0,this.boundaries={visible:!1,x:50,y:50,width:0,height:0},this.mouse={click:!1,move:!1,max:3},this.delay={min:15,max:30},this.brightness={min:50,max:80,decay:{min:.015,max:.03}},this._tick=0,this._version="1.2.3",this._running=!1,this._randomRocketsPoint=!1,this._m=!1,this._container=t,this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this._container.appendChild(this._canvas),this._sound=new o.Sound(e.sound),this.setOptions(e),this.setSize(),this.autoresize&&window.addEventListener("resize",()=>this.setSize()),this._canvas.addEventListener("mousedown",t=>this.useMouse(t,this.mouse.click)),this._canvas.addEventListener("mouseup",t=>this.useMouse(t,!1)),this._canvas.addEventListener("mousemove",t=>this.useMouse(t,this._m))}get isRunning(){return this._running}get version(){return this._version}start(){this._running||(this._running=!0,this.clear(),this.render())}stop(){this._running=!1,this.clear()}pause(){this._running=!this._running,this._running&&this.render()}clear(){this._ctx&&(this._traces=[],this._explosions=[],this._ctx.clearRect(0,0,this._width,this._height))}setOptions(t){Object.assign(this,t),t.sound&&Object.assign(this._sound.options,t.sound)}setSize(){var{width:t=this._container.clientWidth,height:e=this._container.clientHeight}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._width=t,this._height=e,this._canvas.width=t,this._canvas.height=e,this.setBoundaries({width:t,height:e})}setBoundaries(t){this.boundaries=Object.assign(Object.assign({},this.boundaries),t)}useMouse(t,e){(this.mouse.click||this.mouse.move)&&(this._mx=t.pageX-this._canvas.offsetLeft,this._my=t.pageY-this._canvas.offsetTop,this._m=e)}render(){this._ctx&&this._running&&(requestAnimationFrame(()=>this.render()),this.boundaries.visible&&(this._ctx.beginPath(),this._ctx.strokeStyle="red",this._ctx.rect(this.boundaries.x,this.boundaries.y,this.boundaries.width-2*this.boundaries.x,.5*this.boundaries.height),this._ctx.stroke()),this._ctx.globalCompositeOperation="destination-out",this._ctx.fillStyle="rgba(0, 0, 0, 0.5)",this._ctx.fillRect(0,0,this._width,this._height),this._ctx.globalCompositeOperation="lighter",this.initTrace(),this.drawTrace(),this.drawExplosion(),this._tick++)}initTrace(){this._ds=(0,s.randomInteger)(this.delay.min,this.delay.max),(2*this._ds<this._tick||this._m&&this.mouse.max>this._traces.length)&&(this._traces.push(new e.Trace({x:this._width*(this._randomRocketsPoint?(0,s.randomInteger)(0,100):this.rocketsPoint)/100,y:this._height,dx:this._m||this.mouse.move?this._mx:(0,s.randomInteger)(this.boundaries.x,this.boundaries.width-2*this.boundaries.x),dy:this._m||this.mouse.move?this._my:(0,s.randomInteger)(this.boundaries.y,.5*this.boundaries.height),ctx:this._ctx,hue:(0,s.randomInteger)(this.hue.min,this.hue.max),speed:this.speed,acceleration:this.acceleration,traceLength:this.trace})),this._tick=0)}drawTrace(){for(var t=this._traces.length;t--;)this._traces[t].draw(),this._traces[t].update((e,n,i)=>{this.initExplosion(e,n,i),this._sound.play(),this._traces.splice(t,1)})}initExplosion(t,e,n){for(var i=this.particles;i--;)this._explosions.push(new r.Explosion({x:t,y:e,ctx:this._ctx,hue:n,friction:this.friction,gravity:this.gravity,explosionLength:this.explosion,brightness:this.brightness}))}drawExplosion(){for(var t=this._explosions.length;t--;)this._explosions[t].draw(),this._explosions[t].update(()=>{this._explosions.splice(t,1)})}}})(),i})()},function(t,e,n){"use strict";n.r(e);n(2);var i=n(0);window.addEventListener("load",t=>{const e=document.querySelector("#cs_loginInfo");new i.Fireworks(e,{rocketsPoint:50,hue:{min:0,max:360},delay:{min:7,max:15},speed:1.5,acceleration:1.02,friction:.96,gravity:1.1,particles:230,trace:3,explosion:130,autoresize:!0,brightness:{min:50,max:85,decay:{min:.015,max:.03}},boundaries:{x:50,y:50,width:e.clientWidth,height:e.clientHeight},sound:{enable:!1}}).start(),window.alert("課題お疲れさま！花火を楽しんでね！")})},function(t,e,n){var i=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);t.exports=o.locals||{}},function(t,e,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),s=[];function a(t){for(var e=-1,n=0;n<s.length;n++)if(s[n].identifier===t){e=n;break}return e}function h(t,e){for(var n={},i=[],o=0;o<t.length;o++){var r=t[o],h=e.base?r[0]+e.base:r[0],c=n[h]||0,d="".concat(h," ").concat(c);n[h]=c+1;var u=a(d),l={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(s[u].references++,s[u].updater(l)):s.push({identifier:d,updater:f(l,e),references:1}),i.push(d)}return i}function c(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var s=r(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function l(t,e,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function _(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var p=null,g=0;function f(t,e){var n,i,o;if(e.singleton){var r=g++;n=p||(p=c(e)),i=l.bind(null,n,r,!1),o=l.bind(null,n,r,!0)}else n=c(e),i=_.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=h(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var o=a(n[i]);s[o].references--}for(var r=h(t,e),c=0;c<n.length;c++){var d=a(n[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=r}}}},function(t,e,n){(e=n(5)(!1)).push([t.i,":root {\n    --dark-bg-color: rgb(25,25,25); /* 暗い黒色 */\n    --bright-bg-color: rgb(46,51,58); /* 明るい黒色 */\n    --a-tag-blue: rgb(101,153,238); /* リンク用の青色 */\n    --text-white: rgb(175,186,198); /* 暗い白色 */\n    --snow-white: rgb(255,250,250); /* 明るい白色 */\n    --border-color: rgb(70,76,85); /* 枠線の色 */\n}\n\n* {\n    background-color: var(--dark-bg-color) !important; /* 背景色 */\n    border-color: var(--border-color) !important; /* 枠線の色 */\n    color: var(--text-white) !important; /* 文字色 */\n}\n\n#system, .back_l, .back_r {\n    height: 26px !important; /* 授業支援システムの画像を隠す */\n}\n\na {\n    color: var(--a-tag-blue) !important; /* リンクの文字色 */\n}\n\na.tooltip {\n    color: var(--text-white) !important; /* 教員名の文字色 */\n}\n\nh2, h3 {\n    background-color: var(--bright-bg-color) !important; /* 見出しの背景 */\n}\n\ninput {\n    background-color: var(--bright-bg-color) !important; /* ボタンの背景色 */\n    border: 0.5px solid var(--border-color) !important; /* ボタンの枠線 */\n}\n\n.cs_hideVox_left, .cs_hideVox_center > a, .cs_hideVox_right, .cs_hideVox_right2 {\n    background-color: var(--bright-bg-color) !important; /* 課題タブの背景色 */\n    color: var(--text-white) !important;\n}\n\n.label {\n    background-color: var(--bright-bg-color) !important; /* 「お知らせ」の背景色 */\n}\n\nspan, span > img, span > a {\n    background-color: var(--bright-bg-color) !important; /* 「一覧表示・仮登録」ボタンの背景色 */\n}\n\n.highLite {\n    background-color: var(--dark-bg-color) !important; /* 検索条件の文字の背景色 */\n}\n\n.cs_taOpen, .cs_taClose, .cs_taReady, .cs_taExtend {\n    color: var(--snow-white) !important; /* 公開状況のステータス文字色 */\n}\n\np.box06 {\n    background-color: var(--bright-bg-color) !important; /* 課題説明の背景色 */\n}\n\n/* 講義・コミュニケーション・学習成果管理 */\n#cat006, #cat008, #CAT_CUST002_002 {\n    background: none !important; /* 背景のテクスチャ削除 */\n    background-color: var(--dark-bg-color) !important; /* 背景色 */\n    border: 1px solid var(--border-color) !important; /* 左右の枠線を追加 */\n}\n\n/* 講義・コミュニケーション・学習成果管理 */\n.item_selected > a {\n    background-color: var(--bright-bg-color) !important; /* 選択タブの背景色 */\n}\n\n/* 選択された「〜別に表示する」タブ */ \n.tab_active {\n    background: none !important; /* 背景のテクスチャ削除 */\n    background-color: var(--bright-bg-color) !important; /* 背景色 */\n}\n\n/* 講義・コミュニケーション・学習成果管理 */\n#side_menu > .top {\n    background: none !important; /* 太い白線を削除 */\n}\n\n#stage {\n    background: none !important; /* 無駄な背景を削除 */\n}\n\ncanvas {\n    background-color: var(--dark-bg-color) !important;\n    height: 600 !important;\n    width: 100% !important;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),h="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(h," */")),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([o]).join("\n")}var s,a,h;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var h=[].concat(t[a]);i&&o[h[0]]||(n&&(h[2]?h[2]="".concat(n," and ").concat(h[2]):h[2]=n),e.push(h))}},e}}]);