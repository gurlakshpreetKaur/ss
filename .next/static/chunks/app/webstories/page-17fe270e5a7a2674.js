(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{8429:function(e,t,n){Promise.resolve().then(n.bind(n,5038))},6219:function(e,t,n){"use strict";n.d(t,{l:function(){return a}});var r=n(7437),l=n(2265),o=n(9150);function a(e){let{name:t,children:n=[],styleNavs:a=!0,height:c="100vh"}=e,[s,i]=(0,l.useState)("carousel".concat(t).concat(Math.random()).replaceAll(".","-")),u=()=>{let e=document.querySelector(".".concat(s));if(console.log(e),e&&e.scrollLeft<(n.length-1)*window.innerWidth){var t,r;e.scrollBy(null!==(r=null===(t=document.querySelector(".".concat(s)))||void 0===t?void 0:t.getBoundingClientRect().width)&&void 0!==r?r:0,0)}},d=()=>{let e=document.querySelector(".".concat(s));if(console.log(e),e&&e.scrollLeft>0){var t,n;e.scrollBy(-(null!==(n=null===(t=document.querySelector(".".concat(s)))||void 0===t?void 0:t.getBoundingClientRect().width)&&void 0!==n?n:0),0)}};return(0,l.useEffect)(()=>{console.log("ID is",s)},[s]),(0,r.jsxs)("section",{id:s,className:"".concat(s," w-full\n     flex flex-wrap flex-col snap-x snap-mandatory overflow-hidden scroll-smooth"),style:{height:c},children:[a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:d,"aria-controls":s,"aria-label":"left control for carousel ".concat(t),className:"absolute left-5 top-1/2 text-lg bg-gray-800 p-4 rounded-full text-white -translate-y-1/2",children:(0,r.jsx)(o.kyg,{})}),(0,r.jsx)("button",{onClick:u,"aria-controls":s,"aria-label":"right control for carousel ".concat(t),className:"absolute right-5 top-1/2 text-lg bg-gray-800 p-4 rounded-full text-white -translate-y-1/2",children:(0,r.jsx)(o.mGl,{})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:d,"aria-controls":s,"aria-label":"left control for carousel ".concat(t),className:"absolute left-5 top-1/2 text-lg p-4 rounded-full text-white -translate-y-1/2",children:(0,r.jsx)(o.kyg,{})}),(0,r.jsx)("button",{onClick:u,"aria-controls":s,"aria-label":"right control for carousel ".concat(t),className:"absolute right-5 top-1/2 text-lg p-4 rounded-full text-white -translate-y-1/2",children:(0,r.jsx)(o.mGl,{})})]}),n]})}},5670:function(e,t,n){"use strict";n.d(t,{r:function(){return l}});var r=n(7437);function l(e){let{colRange:t,children:n=[],className:l=""}=e;return(0,r.jsx)("div",{className:"grid "+l,style:{gridTemplateColumns:"repeat(auto-fill, minmax(".concat(t,"px, 1fr))")},children:n})}},7105:function(e,t,n){"use strict";n.d(t,{I:function(){return c},db:function(){return s}});var r=n(994),l=n(4086),o=n(3085);let a=(0,r.ZF)({apiKey:"AIzaSyB-n-QZ2J_GpHeqhn6uz-TSQAldkvi0lUM",authDomain:"cla-stories.firebaseapp.com",projectId:"cla-stories",storageBucket:"cla-stories.appspot.com",messagingSenderId:"263250403554",appId:"1:263250403554:web:92eba0e0d4ed44941efebb",measurementId:"G-6QJJW9GSGK"}),c=(0,o.v0)(a),s=(0,l.ad)(a)},5038:function(e,t,n){"use strict";n.r(t),n.d(t,{Webstories:function(){return i}});var r=n(7437),l=n(4086),o=n(2265),a=n(6219),c=n(5670),s=n(7105);function i(){var e;let[t,n]=(0,o.useState)();return(0,o.useEffect)(()=>{(0,l.PL)((0,l.hJ)(s.db,"webstories")).then(e=>{n(e.docs.map(e=>e.data()))})},[]),(0,r.jsx)("section",{className:"webstories bg-black px-[12px] pb-12 pt-16",children:(0,r.jsx)(c.r,{colRange:300,className:"gap-[10px]",children:t&&t.map((t,n)=>(0,r.jsx)("div",{className:"h-min rounded-md w-full relative",children:(0,r.jsx)(a.l,{name:"webstories"+n+Math.random(),height:"calc(100vh - 5rem)",styleNavs:!1,children:t.slides.map((t,n)=>(0,r.jsx)("section",{className:"w-full h-full bg-cover py-10 px-20 text-center flex justify-center",style:{backgroundImage:"url('".concat(t.image,"')"),alignItems:t.align},children:(0,r.jsx)("p",{className:"font-playfair text-center text-white h-min",style:{fontSize:null!==(e=t.size)&&void 0!==e?e:"1rem"},children:t.text.split("\\n").map((e,t)=>(0,r.jsxs)("span",{children:[e,(0,r.jsx)("br",{})]},t))})},n))})},n))})})}},1172:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(2265),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(l),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function s(e){return function(t){return r.createElement(i,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var n,l=e.attr,o=e.size,s=e.title,i=c(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,i,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==o?r.createElement(o.Consumer,null,function(e){return t(e)}):t(l)}}},function(e){e.O(0,[358,214,712,647,971,596,744],function(){return e(e.s=8429)}),_N_E=e.O()}]);