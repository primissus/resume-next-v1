(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5809:function(n,e,t){var r={"./en.json":[6293,293],"./en/home.json":[5835,835],"./es.json":[4887,887],"./es/home.json":[1127,127]};function o(n){if(!t.o(r,n))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e});var e=r[n],o=e[0];return t.e(e[1]).then(function(){return t.t(o,19)})}o.keys=function(){return Object.keys(r)},o.id=5809,n.exports=o},8279:function(n,e,t){Promise.resolve().then(t.t.bind(t,2990,23)),Promise.resolve().then(t.bind(t,4241)),Promise.resolve().then(t.bind(t,6483)),Promise.resolve().then(t.t.bind(t,4688,23))},4241:function(n,e,t){"use strict";t.r(e),t.d(e,{LanguagesDropdown:function(){return h},default:function(){return j}});var r=t(5981),o=t(6072),c=t(3935),i=t(8149);function s(n){let{icon:e,children:t}=n,[o,c]=(0,i.useState)(!1),s=()=>{c(!1)};return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("button",{className:"p-2",onClick:()=>c(!o),children:(0,r.jsx)(e,{color:"white",size:16})}),o?(0,r.jsx)("ul",{className:"absolute right-0 z-50",children:t&&i.Children.map(t,n=>(0,i.cloneElement)(n,{onClick:s}))}):void 0]})}let u="/resume-next-v1";function l(){}function a(n){let{children:e,href:t,onClick:o=l}=n;return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:u?"".concat(u).concat(t):t,onClick:o,children:(0,r.jsx)("div",{className:"p-2",children:e})})})}var f=t(8858),d=t(6483);async function h(){let n=(0,o.usePathname)(),e=await function(){let n=(0,d.useLocale)();return(0,f.Ty)(n)}(),t=function(n){let e=f.k1.find(e=>n.startsWith("/".concat(e)));return e?n.substring(e.length+1):n}(n);return(0,r.jsxs)(s,{icon:c.Z,children:[(0,r.jsx)(a,{href:"/es".concat(t),children:e("languagesDropdown.es")}),(0,r.jsx)(a,{href:"/en".concat(t),children:e("languagesDropdown.en")})]})}function j(){return(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(s,{icon:c.Z}),children:(0,r.jsx)(h,{})})}},6483:function(n,e,t){"use strict";t.r(e),t.d(e,{LocaleContext:function(){return s},LocaleProvider:function(){return u},useLocale:function(){return l}});var r=t(5981),o=t(8149),c=t(6072),i=t(8858);let s=(0,o.createContext)("en");function u(n){let{children:e}=n,{locale:t=i.al}=(0,c.useParams)();return(0,r.jsx)(s.Provider,{value:t,children:e})}function l(){return(0,o.useContext)(s)}},8858:function(n,e,t){"use strict";t.d(e,{Ty:function(){return i},al:function(){return r},k1:function(){return o}});let r="en",o=["en","es"],c=n=>function(e){let{data:t,debug:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=e.split(".").reduce((n,e)=>n&&n[e],n);return o?(r&&console.log(e,n),t&&Object.entries(t).length&&Object.entries(t).forEach(n=>{let[e,t]=n;o=o.replace("{{ ".concat(e," }}"),String(t))}),o):e},i=async n=>{let e=await t(5809)("./".concat(n,".json"));return c(e)}},4688:function(){}},function(n){n.O(0,[263,298,198,744],function(){return n(n.s=8279)}),_N_E=n.O()}]);