(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4118:function(e,t,n){Promise.resolve().then(n.bind(n,1198))},6219:function(e,t,n){"use strict";n.d(t,{l:function(){return o}});var l=n(7437),r=n(2265),s=n(9150);function o(e){let{name:t,children:n=[],styleNavs:o=!0,height:a="100vh"}=e,[c,i]=(0,r.useState)("carousel".concat(t).concat(Math.random()).replaceAll(".","-")),u=()=>{let e=document.querySelector(".".concat(c));if(console.log(e),e&&e.scrollLeft<(n.length-1)*window.innerWidth){var t,l;e.scrollBy(null!==(l=null===(t=document.querySelector(".".concat(c)))||void 0===t?void 0:t.getBoundingClientRect().width)&&void 0!==l?l:0,0)}},d=()=>{let e=document.querySelector(".".concat(c));if(console.log(e),e&&e.scrollLeft>0){var t,n;e.scrollBy(-(null!==(n=null===(t=document.querySelector(".".concat(c)))||void 0===t?void 0:t.getBoundingClientRect().width)&&void 0!==n?n:0),0)}};return(0,r.useEffect)(()=>{console.log("ID is",c)},[c]),(0,l.jsxs)("section",{id:c,className:"".concat(c," w-full\n     flex flex-wrap flex-col snap-x snap-mandatory overflow-hidden scroll-smooth"),style:{height:a},children:[o?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{onClick:d,"aria-controls":c,"aria-label":"left control for carousel ".concat(t),className:"absolute left-5 top-1/2 text-lg bg-gray-800 p-4 rounded-full text-white -translate-y-1/2",children:(0,l.jsx)(s.kyg,{})}),(0,l.jsx)("button",{onClick:u,"aria-controls":c,"aria-label":"right control for carousel ".concat(t),className:"absolute right-5 top-1/2 text-lg bg-gray-800 p-4 rounded-full text-white -translate-y-1/2",children:(0,l.jsx)(s.mGl,{})})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{onClick:d,"aria-controls":c,"aria-label":"left control for carousel ".concat(t),className:"absolute left-5 top-1/2 text-lg p-4 rounded-full text-white -translate-y-1/2",children:(0,l.jsx)(s.kyg,{})}),(0,l.jsx)("button",{onClick:u,"aria-controls":c,"aria-label":"right control for carousel ".concat(t),className:"absolute right-5 top-1/2 text-lg p-4 rounded-full text-white -translate-y-1/2",children:(0,l.jsx)(s.mGl,{})})]}),n]})}},5670:function(e,t,n){"use strict";n.d(t,{r:function(){return r}});var l=n(7437);function r(e){let{colRange:t,children:n=[],className:r=""}=e;return(0,l.jsx)("div",{className:"grid "+r,style:{gridTemplateColumns:"repeat(auto-fill, minmax(".concat(t,"px, 1fr))")},children:n})}},1198:function(e,t,n){"use strict";n.r(t),n.d(t,{Home:function(){return m}});var l=n(7437),r=n(4086),s=n(2265),o=n(7105),a=n(6219),c=n(9150),i=n(5670);function u(e){let{likedBy:t,id:n,prefCol:r}=e;return(0,l.jsxs)("span",{className:"text-black cursor-text",children:[(0,l.jsx)(e=>{let{onClick:n=()=>{}}=e;return o.I.currentUser&&o.I.currentUser.email&&t.includes(o.I.currentUser.email)?(0,l.jsx)(c.L7p,{className:"inline-block",onClick:n,style:{color:r}}):(0,l.jsx)(c.DZs,{className:"inline-block",onClick:n})},{}),(0,l.jsxs)("span",{style:{color:r},className:"text-[10px]",children:[" ",t.length]})]})}function d(e){let{title:t,text:n,datePosted:r,datePostedDisplay:s,likedBy:o,comments:a,views:i,id:d,bgImage:p,prefCol:x}=e;return(0,l.jsxs)("div",{className:"rounded-md pt-[30px] pb-[60px] px-[30px] bg-opacity-80     hover:bg-opacity-50 transition-all hover:rounded-lg cursor-pointer overflow: none relative",onClick:()=>window.open("/post/"+d),style:{backgroundImage:"url('".concat(p,"')")},children:[(0,l.jsxs)("span",{className:"text-[7px] text-slate-600 m-0 p-0",style:{color:x},children:["POSTED ON ",s.toUpperCase()]}),(0,l.jsx)("h2",{className:"text-lg tracking-[0.5px] transition-all font-playfair font-medium m-0",style:{color:x},children:t}),(0,l.jsx)("div",{className:"w-full h-[0.75px] bg-transparent mb-2 cursor-pointer",style:{color:x}}),(0,l.jsxs)("p",{className:"text-xs transition-all font-a min-h-10 help max-w-full",style:{color:x},children:[n.substring(0,94).trim(),"..."]}),(0,l.jsxs)("span",{className:"w-full flex flex-row justify-around absolute bottom-[30px] left-0 right-0 px-2",children:[(0,l.jsxs)("span",{style:{color:x},children:[(0,l.jsx)(c.Zju,{className:"cursor-text inline-block"})," ",(0,l.jsx)("span",{className:"text-[10px]",children:i})]}),(0,l.jsx)(u,{likedBy:o,id:d,prefCol:x}),(0,l.jsxs)("span",{style:{color:x},children:[(0,l.jsx)(c.RG4,{className:"inline-block"})," ",(0,l.jsx)("span",{className:"text-[10px]",children:a.length})]})]})]})}function p(e){let{cards:t}=e,[n,r]=(0,s.useState)(0),[o,a]=(0,s.useState)(window.innerWidth>500?290:200);function c(e,t){document.querySelectorAll(".sorting-btn").forEach(e=>{e.classList.remove("text-purple-500"),e.classList.add("text-black")}),console.log(t),t.classList.add("text-purple-500"),r(e)}return(0,s.useEffect)(()=>{let e=()=>a(window.innerWidth>500?290:200);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,l.jsxs)("section",{className:"px-10 py-12 min-h-screen bg-white",children:[(0,l.jsxs)("span",{className:"[&>*]:p-4 [&>*]:text-[0.75rem] mb-3 inline-block",children:[(0,l.jsx)("button",{className:"hover:text-purple-500 transition-all sorting-btn text-black",onClick:e=>{c(0,e.currentTarget)},children:"NEWEST"}),(0,l.jsx)("button",{className:"hover:text-purple-500 transition-all sorting-btn text-black",onClick:e=>c(1,e.currentTarget),children:"MOST LIKED"}),(0,l.jsx)("button",{className:"hover:text-purple-500 transition-all sorting-btn text-black",onClick:e=>c(2,e.currentTarget),children:"MOST VIEWED"})]}),(0,l.jsx)(i.r,{className:"gap-[10px] m-0",colRange:o,children:t.sort([(e,t)=>e.datePosted-t.datePosted,(e,t)=>t.likedBy.length-e.likedBy.length,(e,t)=>t.comments.length-t.comments.length][n]).map(e=>(0,s.createElement)(d,{...e,key:e.title}))})]})}function x(){let[e,t]=(0,s.useState)([]);return(0,s.useEffect)(()=>{(0,r.PL)((0,r.hJ)(o.db,"carousel")).then(e=>{t(e.docs.map(e=>({id:e.id,...e.data()})))})},[]),(0,l.jsx)(a.l,{name:"home",children:e.map((e,t)=>(0,l.jsx)("section",{className:"w-full h-screen p-20 min-[550px]:pl-32 min-[720px]:pl-44    snap-always snap-start bg-cover bg-center flex justify-center flex-col max-[500px]:items-center items-start",style:{backgroundImage:"url('".concat(e.image,"')")},children:(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"font-playfair text-center text-lg max-w-[200px]",style:{color:e.textWhite?"white":"black"},children:e.text}),e.navLink&&(0,l.jsx)("button",{className:"bg-gray-800 text-white px-5 py-3 rounded-full mt-2",onClick:()=>window.open(e.navLink),children:"Read More"})]})},t))})}function m(){let[e,t]=(0,s.useState)([]);return(0,s.useEffect)(()=>{(async()=>{let e=await (0,r.PL)((0,r.hJ)(o.db,"posts")),n=[];e.docs.forEach(e=>n.push({id:e.id,...e.data()})),t(n)})().then(()=>{}).catch(e=>{})},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{}),(0,l.jsx)(p,{cards:e})]})}},7105:function(e,t,n){"use strict";n.d(t,{I:function(){return a},db:function(){return c}});var l=n(994),r=n(4086),s=n(3085);let o=(0,l.ZF)({apiKey:"AIzaSyB-n-QZ2J_GpHeqhn6uz-TSQAldkvi0lUM",authDomain:"cla-stories.firebaseapp.com",projectId:"cla-stories",storageBucket:"cla-stories.appspot.com",messagingSenderId:"263250403554",appId:"1:263250403554:web:92eba0e0d4ed44941efebb",measurementId:"G-6QJJW9GSGK"}),a=(0,s.v0)(o),c=(0,r.ad)(o)},1172:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var l=n(2265),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=l.createContext&&l.createContext(r),o=function(){return(o=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},a=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)0>t.indexOf(l[r])&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]]);return n};function c(e){return function(t){return l.createElement(i,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return l.createElement(t.tag,o({key:n},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var n,r=e.attr,s=e.size,c=e.title,i=a(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),l.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,i,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),e.children)};return void 0!==s?l.createElement(s.Consumer,null,function(e){return t(e)}):t(r)}}},function(e){e.O(0,[358,214,712,647,971,596,744],function(){return e(e.s=4118)}),_N_E=e.O()}]);