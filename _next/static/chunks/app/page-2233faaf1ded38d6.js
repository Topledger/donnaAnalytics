(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9114:function(e,t,n){Promise.resolve().then(n.t.bind(n,5107,23)),Promise.resolve().then(n.bind(n,624)),Promise.resolve().then(n.t.bind(n,4844,23)),Promise.resolve().then(n.t.bind(n,1714,23)),Promise.resolve().then(n.t.bind(n,5747,23)),Promise.resolve().then(n.t.bind(n,5482,23)),Promise.resolve().then(n.t.bind(n,3153,23)),Promise.resolve().then(n.t.bind(n,5481,23)),Promise.resolve().then(n.t.bind(n,1925,23)),Promise.resolve().then(n.t.bind(n,3525,23)),Promise.resolve().then(n.bind(n,6986)),Promise.resolve().then(n.bind(n,1373)),Promise.resolve().then(n.t.bind(n,2550,23)),Promise.resolve().then(n.t.bind(n,1946,23)),Promise.resolve().then(n.t.bind(n,286,23)),Promise.resolve().then(n.t.bind(n,5170,23)),Promise.resolve().then(n.t.bind(n,61,23)),Promise.resolve().then(n.t.bind(n,6168,23)),Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,231,23))},656:function(e,t,n){"use strict";n.d(t,{s:function(){return _}});var o=n(7437),r=n(6800),i=n.n(r),c=n(5482),s=n.n(c),l=e=>{let{children:t,className:n,color:r,style:c,...l}=e;return(0,o.jsx)("span",{className:i()(s().chip,n),style:{...c,color:r,backgroundColor:r+"20"},...l,children:t})},a=n(4109);n(3153);var u=n(3077);let{Link:d}=a.default,_=function(){let{type:e,isSelected:t,primary:n,secondary:r,tertiary:i,forwardArrow:c,...s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_=n||t&&r;switch(e){case"button":return(0,o.jsxs)(d,{...s,primary:_,secondary:r&&!t,href:s.href,target:s.target,color:"#085ED4",children:[s.text,c&&(0,o.jsx)(u.Z,{style:{marginLeft:"0.5rem"},name:"forward-arrow"})]});case"link":return(0,o.jsxs)(d,{...s,color:"#085ED4",primary:_,secondary:!n&&!i||r&&!t,tertiary:!n&&!i,children:[s.text,c&&(0,o.jsx)(u.Z,{style:{marginLeft:"0.5rem"},name:"forward-arrow"})]});case"comingSoon":return(0,o.jsx)(l,{color:"#59B077",...s,style:{...null==s?void 0:s.style,width:"100%",textAlign:"center"},children:"Coming Soon"});default:return(0,o.jsx)(a.default,{...s})}}},4109:function(e,t,n){"use strict";var o=n(7437);n(2265);var r=n(7138),i=n(4839),c=n(1448),s=n.n(c),l=n(3077),a=n(5107),u=n.n(a);let d=e=>{let{primary:t,secondary:n,tertiary:o,noArrow:r,...c}=e;return{...c,className:(0,i.Z)(u().button,c.className,{[u().primary]:t,[u().secondary]:n,[u().tertiary]:o,[u().disabled]:c.disabled})}},_=e=>{let{color:t,...n}=e;return{...null==n?void 0:n.style,...n.primary&&{backgroundColor:t,backgroundImage:"none"},...n.secondary&&{backgroundColor:"transparent",backgroundImage:"none",borderColor:t,color:t},...n.tertiary&&{color:t}}},h=e=>{let{color:t,children:n,className:r,...i}=e,c=d({...i,className:r}),s=_({color:t,...c});return(0,o.jsx)("button",{...c,style:s,children:n})},m=e=>{let{children:t,...n}=e;return(0,o.jsx)("a",{...n,children:t})};h.Link=e=>{let{color:t,href:n,children:c,className:s,noArrow:a,arrowOnHover:h,...p}=e,f=d({...p,className:s}),v="_blank"===p.target,y=_({color:t,...f}),g=n?r.default:m,x=(0,o.jsxs)(o.Fragment,{children:[c,v&&!a&&(0,o.jsx)(l.Z,{className:(0,i.Z)(u().newWindowIcon,{[u().arrowOnHover]:h}),name:"out-arrow"})]}),b={...f,className:(0,i.Z)(f.className,u().link),style:y};return(0,o.jsx)(g,{...b,href:n,children:x})},h.Link.displayName="Button.Link",h.propTypes=h.Link.propTypes={color:s().string,href:s().string,children:s().node,className:s().string,noArrow:s().bool,arrowOnHover:s().bool,primary:s().bool,secondary:s().bool,tertiary:s().bool,disabled:s().bool,target:s().string,style:s().object,onClick:s().func},t.default=h},624:function(e,t,n){"use strict";n.d(t,{default:function(){return H}});var o=n(7437),r=n(2265),i=n(6648),c=n(637),s=n(4839),l=n(656),a=n(3856),u=n(61),d=n.n(u),_=e=>{let{children:t,tagline:n,description:r}=e;return(0,o.jsxs)("div",{className:d().sectionHead,children:[(0,o.jsx)("div",{className:d().tagline,children:n}),(0,o.jsx)("div",{children:(0,o.jsx)("h2",{className:d().sectionTitle,children:t})}),r&&(0,o.jsx)("p",{className:d().sectionDescription,children:r})]})},h=n(7640),m=n.n(h),p=n(6800),f=n.n(p),v=n(286),y=n.n(v),g=e=>{let{children:t}=e;return r.Children.map(t,e=>r.cloneElement(e,{className:f()(e.props.className,y().mobileHidden)}))},x=n(1165),b=n(179),j=n.n(b),w=n(7655),S=n.n(w),C=e=>{let{title:t,description:n,image:r,isOpen:c,onToggle:s}=e;return(0,o.jsxs)("div",{className:f()(j().accordionItem,{[j().selected]:c}),children:[(0,o.jsxs)("div",{className:j().accordionHeader,onClick:s,children:[(0,o.jsx)("h3",{className:j().accordionTitle,children:t}),(0,o.jsx)("span",{className:j().accordionIcon,children:c?"":(0,o.jsx)(S(),{width:"1rem",height:"1rem",color:"#001A72"})})]}),c&&(0,o.jsxs)("div",{className:j().accordionContent,children:[(0,o.jsx)("div",{className:j().description,children:(0,o.jsx)("span",{children:n})}),(0,o.jsx)("div",{className:j().image,children:(0,o.jsx)(i.default,{src:r,alt:t,width:240,height:208})})]})]})};let k=e=>{let{title:t,description:n,onClick:r,selected:i}=e;return(0,o.jsxs)("div",{className:(0,s.Z)(m().cultureContent,{[m().cultureContentSelected]:i}),onClick:r,children:[(0,o.jsx)("h3",{className:m().cultureTitle,children:t}),(0,o.jsx)("div",{className:m().cultureDescription,children:(0,o.jsx)("span",{children:n})})]})};var H=e=>{let{journeys:t=[]}=e,[n,u]=(0,r.useState)(0),d=(0,r.useRef)(null),h=t[n].image,p=t[n].title,f=t[n].action;(0,r.useEffect)(()=>(d.current=setInterval(()=>{u(e=>{var n;return(e+1)%(null!==(n=null==t?void 0:t.length)&&void 0!==n?n:1)})},1e4),()=>clearInterval(d.current)),[t]);let v=e=>{d.current&&clearInterval(d.current),u(e)};return(0,o.jsxs)(c.Z,{className:m().empoweringJourneySection,id:(0,a.z)("Empowering Your Blockchain Journey"),children:[(0,o.jsx)(_,{description:"Customized Solutions to Propel Your Success in the Digital Ledger World",tagline:"SERVICES",children:"Empowering Your Blockchain Journey"}),(0,o.jsxs)("div",{className:m().sectionBody,children:[(0,o.jsxs)(g,{children:[(0,o.jsx)("div",{className:m().resultsContainer,children:null==t?void 0:t.map((e,t)=>(0,r.createElement)(k,{...e,key:e.id,onClick:()=>v(t),selected:t===n}))}),(0,o.jsx)("div",{className:m().image,children:(0,o.jsx)(i.default,{src:h,alt:p,width:419,height:362})}),(0,o.jsx)("div",{className:m().indicators,children:t.map((e,t)=>(0,o.jsx)("span",{className:(0,s.Z)(m().indicator,{[m().selectedIndicator]:t===n}),onClick:()=>v(t)},null==e?void 0:e.id))})]}),(0,o.jsx)(x.Z,{children:(0,o.jsx)("div",{className:m().accordionContainer,children:t.map((e,t)=>(0,o.jsx)(C,{title:e.title,description:e.description,image:e.image,isOpen:t===n,onToggle:()=>v(t)},e.id))})})]}),(0,o.jsx)("div",{className:m().cultureAction,children:(0,l.s)(f)})]})}},6986:function(e,t,n){"use strict";var o=n(7437),r=n(2265),i=n(4839),c=n(6648),s=n(3181),l=n.n(s),a=n(4109),u=n(1165),d=n(6176),_=n.n(d);let h=e=>{let{className:t,onClick:n}=e;return(0,o.jsx)(a.default,{className:(0,i.Z)(_().burgerButton,t),onClick:n,noArrow:!0,tertiary:!0,color:"#283D6D",children:(0,o.jsx)(l(),{width:32,height:32,size:32})})};t.default=e=>{let{className:t}=e,[n,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(n){let e=e=>{e.target.closest(".".concat(_().appHeader))||s(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}},[n]),(0,o.jsx)("header",{className:(0,i.Z)(_().appHeader,t),children:(0,o.jsxs)("span",{className:_().headerWrapper,children:[(0,o.jsx)(a.default.Link,{className:_().logoContainer,href:"/",tertiary:!0,children:(0,o.jsx)(c.default,{src:"/assets/images/logo/donna-analytics-full.svg",width:122,height:24,alt:"Top Ledger logo"})}),(0,o.jsx)(u.Z,{children:(0,o.jsx)(h,{onClick:()=>{s(e=>!e)}})}),(0,o.jsxs)("nav",{className:(0,i.Z)(_().headerLinks,{[_().mobileHeaderOpen]:n}),children:[(0,o.jsx)(a.default.Link,{tertiary:!0,className:_().headerLink,href:"/about",children:"About"}),(0,o.jsx)(a.default.Link,{tertiary:!0,className:_().headerLink,children:"Blogs"}),(0,o.jsx)(a.default.Link,{tertiary:!0,className:(0,i.Z)(_().headerLink),href:"https://docs.topledger.xyz/",target:"_blank",noArrow:!0,children:"Docs"}),(0,o.jsx)(a.default.Link,{tertiary:!0,className:(0,i.Z)(_().headerLink),href:"https://blogs.topledger.xyz/",target:"_blank",noArrow:!0,children:"Github"})]})]})})}},1373:function(e,t,n){"use strict";n.d(t,{default:function(){return S}});var o=n(7437),r=n(6648),i=n(637),c=n(656),s=n(3856),l=n(3673),a=n.n(l),u=n(551),d=n.n(u),_=n(6800),h=n.n(_),m=n(2478),p=n.n(m),f=e=>{let{children:t,extraContent:n={},className:r,contentClassName:i,...c}=e,{bottom:s,bottomClassName:l,bottomStyle:a}=n;return(0,o.jsxs)("div",{className:h()(p().card,r),...c,children:[s&&(0,o.jsx)("div",{className:h()(p().bottom,l),style:a,children:s}),(0,o.jsx)("div",{className:h()(p().cardContent,i),children:t})]})},v=n(8678),y=n.n(v),g=n(4040);let x=e=>{let{children:t,onShadowClick:n}=e;return(0,o.jsxs)("div",{className:y().modalContainer,children:[(0,o.jsx)("div",{className:y().shadow,onClick:n}),(0,o.jsx)(f,{className:y().modal,contentClassName:y().modalContent,children:t})]})},b=()=>{document.body.style.overflow="hidden"},j=()=>{document.body.style.overflow="auto"},w=((e,t)=>{let n=null,r="modal-root-".concat(e),i=null;function c(){n||((i=document.createElement("div")).id=r,i.style.transition="all ".concat(500,"ms ease"),i.style.opacity="1",document.body.append(i),n=(0,g.createRoot)(i))}return t.show=e=>{c(),null==n||n.render(null),b(),null==n||n.render((0,o.jsx)(x,{onShadowClick:t.hide,children:(0,o.jsx)(t,{...e,hide:t.hide})}))},t.hide=()=>{c(),i&&(i.style.opacity="0",i.style.zIndex="100",i.style.position="absolute"),setTimeout(()=>{null==n||n.render(null),j(),i&&(i.style.opacity="1",i.style.zIndex="unset",i.style.position="relative")},500)},t})("query-form",d()(()=>Promise.all([n.e(709),n.e(629),n.e(617)]).then(n.bind(n,4617)),{loadableGenerated:{webpack:()=>[4617]},ssr:!1}));var S=e=>{let{tagline:t,title:n,description:l,image:u}=e;return(0,o.jsx)(i.Z,{className:a().homeHeroSection,id:(0,s.z)("Home Hero"),children:(0,o.jsxs)("div",{className:a().sectionBody,children:[(0,o.jsxs)("div",{className:a().sectionHead,children:[(0,o.jsx)("div",{className:a().tagline,children:t}),(0,o.jsx)("div",{children:(0,o.jsx)("h2",{className:a().sectionTitle,children:n})}),l&&(0,o.jsx)("p",{className:a().sectionDescription,children:l}),(0,o.jsx)("div",{className:a().cultureAction,children:(0,c.s)({type:"link",text:"Try it out",primary:!0,forwardArrow:!0,onClick:()=>w.show()})})]}),(0,o.jsx)("div",{className:a().image,children:(0,o.jsx)(r.default,{src:u,width:512,height:351,alt:n})})]})})}},1165:function(e,t,n){"use strict";var o=n(2265),r=n(6800),i=n.n(r),c=n(1946),s=n.n(c);t.Z=e=>{let{children:t}=e;return o.Children.map(t,e=>o.cloneElement(e,{className:i()(e.props.className,s().mobileOnly)}))}},637:function(e,t,n){"use strict";var o=n(7437),r=n(4839),i=n(2550),c=n.n(i);t.Z=e=>{let{background:t,style:n,containerStyle:i,children:s,className:l,containerClassName:a,component:u="section",id:d,..._}=e;return(0,o.jsx)(u,{..._,className:(0,r.Z)(c().section,l),style:{...n,backgroundImage:"url(".concat(t,")")},id:d,children:(0,o.jsx)("div",{className:(0,r.Z)(c().container,a),style:i,children:s})})}},3077:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(7437);n(2265);let r={"out-arrow":e=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 18 18",fill:"none",...e,children:(0,o.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m12.62 5.333-9.237 5.334m9.237-5.334-1.464 5.464m1.464-5.464L7.156 3.87"})}),"chevron-left":e=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",color:"#4E618D",viewBox:"14 16 26 27",...e,children:(0,o.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m31 19-9 10.5L31 40"})}),"diamond-bullet":e=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",color:"#59B077",viewBox:"0 0 16 16",...e,children:[(0,o.jsx)("path",{fill:"currentColor",d:"M11.5 8 8 4.5 4.5 8 8 11.5 11.5 8Z"}),(0,o.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"m8 0 8 8-8 8-8-8 8-8Zm0 1.5L14.5 8 8 14.5 1.5 8 8 1.5Z",clipRule:"evenodd"})]}),user:e=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...e,children:(0,o.jsx)("path",{fill:"#374151",d:"M9.498 9.785c2.154 0 3.9-1.742 3.9-3.892A3.896 3.896 0 0 0 9.498 2a3.896 3.896 0 0 0-3.9 3.893 3.896 3.896 0 0 0 3.9 3.892ZM9.5 10.253C5.912 10.253 3 13.107 3 17h13c0-3.893-2.912-6.747-6.5-6.747Z"})}),email:e=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...e,children:(0,o.jsx)("path",{fill:"#374151",d:"M17.175 6.003a.747.747 0 0 1 .139 0l-6.197 5.187a1.224 1.224 0 0 1-1.234 0L3.687 6.003a.746.746 0 0 1 .138 0h13.35ZM18 14.207a.78.78 0 0 1-.243.564.819.819 0 0 1-.582.229H3.825a.835.835 0 0 1-.582-.23.794.794 0 0 1-.243-.563v-7.41a.78.78 0 0 1 .121-.414l6.346 5.3.038.027a1.878 1.878 0 0 0 1.961 0l.038-.028 6.346-5.3c.089.122.14.265.15.414v7.411Z"})}),company:e=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...e,children:(0,o.jsx)("path",{fill:"#374151",d:"M11.946 2H9.058v2.25H7.613V17h5.778V4.25h-1.445V2ZM9.78 16.25H8.335v-1.5H9.78v1.5Zm0-2.25H8.335v-1.5H9.78V14Zm0-2.25H8.335v-1.5H9.78v1.5Zm0-2.25H8.335V8H9.78v1.5Zm0-2.25H8.335v-1.5H9.78v1.5Zm2.889 9h-1.445v-1.5h1.445v1.5Zm0-2.25h-1.445v-1.5h1.445V14Zm0-2.25h-1.445v-1.5h1.445v1.5Zm0-2.25h-1.445V8h1.445v1.5Zm0-3.75v1.5h-1.445v-1.5h1.445ZM15.554 6.125v-1.5h-1.445V17H17V6.125h-1.445Zm.722 9.75h-1.444v-1.5h1.444v1.5Zm0-2.25h-1.444v-1.5h1.444v1.5Zm0-2.25h-1.444v-1.5h1.444v1.5Zm0-2.25h-1.444v-1.5h1.444v1.5ZM6.889 5H5.444v1.5H4V17h2.889V5Zm-.722 11.25H4.722v-1.5h1.445v1.5Zm0-2.25H4.722v-1.5h1.445V14Zm0-2.25H4.722v-1.5h1.445v1.5Zm0-2.25H4.722V8h1.445v1.5Z"})}),designation:e=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...e,children:[(0,o.jsxs)("g",{clipPath:"url(#a)",children:[(0,o.jsx)("path",{fill:"#374151",d:"M9.498 9.785c2.154 0 3.9-1.742 3.9-3.892A3.896 3.896 0 0 0 9.498 2a3.896 3.896 0 0 0-3.9 3.893 3.896 3.896 0 0 0 3.9 3.892ZM9.5 10.253C5.912 10.253 3 13.107 3 17h13c0-3.893-2.912-6.747-6.5-6.747Z"}),(0,o.jsx)("path",{fill:"#FDFDFF",stroke:"#374151",d:"M9.995 10.904a.52.52 0 0 0-.99 0l-.879 2.705H5.282a.52.52 0 0 0-.306.941l2.301 1.672-.879 2.705a.52.52 0 0 0 .8.582l-.29-.4.29.4L9.5 17.837l2.301 1.672a.52.52 0 0 0 .8-.582l-.879-2.705 2.302-1.672a.52.52 0 0 0-.306-.94h-2.844l-.88-2.706Zm-.038.309Z"})]}),(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"a",children:(0,o.jsx)("path",{fill:"#fff",d:"M0 0h20v20H0z"})})})]}),checkmark:e=>{let{color:t,...n}=e;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",color:t,width:24,height:24,...n,children:(0,o.jsxs)("g",{fill:"none",stroke:"#487efb",strokeWidth:2,children:[(0,o.jsx)("circle",{cx:77,cy:77,r:72,style:{strokeDasharray:"480,480",strokeDashoffset:960}}),(0,o.jsx)("circle",{id:"colored",cx:77,cy:77,r:72,fill:"#487efb",style:{strokeDasharray:"480,480",strokeDashoffset:960}}),(0,o.jsx)("path",{stroke:"#fff",strokeWidth:10,d:"m43.5 77.8 20.2 20.1 48.5-48.5",className:"st0",style:{strokeDasharray:"100,100",strokeDashoffset:200}})]})})},"forward-arrow":e=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:11,fill:"none",viewBox:"78 12 18 11",...e,children:(0,o.jsx)("path",{fill:"#fff",d:"M95.354 17.854a.5.5 0 0 0 0-.708l-3.182-3.182a.5.5 0 1 0-.707.708l2.828 2.828-2.829 2.828a.5.5 0 1 0 .708.707l3.182-3.181ZM79 18h16v-1H79v1Z"})})};var i=e=>{let{name:t,...n}=e,i=r[t];return i?(0,o.jsx)(i,{width:24,height:24,...n}):null}},3856:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});let o=/^[a-z0-9\s\-]$/,r=e=>null==e?void 0:e.toLowerCase().replace(/./g,e=>o.test(e)?e:"").replace(/\s+/g,"-")},4541:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},7655:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let r=(o=n(4649))&&o.__esModule?o:{default:o};t.default=r,e.exports=r},4649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});var o=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=s(void 0);if(n&&n.has(e))return n.get(e);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=r?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(o,i,c):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}(n(2265)),r=c(n(4541)),i=c(n(6125));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var l=o.forwardRef(function(e,t){var n,c;return o.createElement(i.default,(n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){var o;o=n[t],t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o})}return e}({},e),c=c={ref:t,icon:r.default},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(c)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n.push.apply(n,o)}return n})(Object(c)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(c,e))}),n))})},551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let o=n(9920);n(7437),n(2265);let r=o._(n(148));function i(e,t){var n;let o={loading:e=>{let{error:t,isLoading:n,pastDelay:o}=e;return null}};"function"==typeof e&&(o.loader=e);let i={...o,...t};return(0,r.default)({...i,modules:null==(n=i.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let o=n(5592);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new o.BailoutToCSRError(t);return n}},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let o=n(7437),r=n(2265),i=n(912),c=n(1481);function s(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},a=function(e){let t={...l,...e},n=(0,r.lazy)(()=>t.loader().then(s)),a=t.loading;function u(e){let s=a?(0,o.jsx)(a,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,o.jsxs)(o.Fragment,{children:["undefined"==typeof window?(0,o.jsx)(c.PreloadCss,{moduleIds:t.modules}):null,(0,o.jsx)(n,{...e})]}):(0,o.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,o.jsx)(n,{...e})});return(0,o.jsx)(r.Suspense,{fallback:s,children:l})}return u.displayName="LoadableComponent",u}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let o=n(7437),r=n(8512);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),i=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));i.push(...t)}}return 0===i.length?null:(0,o.jsx)(o.Fragment,{children:i.map(e=>(0,o.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},179:function(e){e.exports={accordionItem:"Accordion_accordionItem__txb_U",selected:"Accordion_selected__Wxvi0",accordionHeader:"Accordion_accordionHeader__K3tjD",accordionTitle:"Accordion_accordionTitle__CsU0a",accordionIcon:"Accordion_accordionIcon__q9cLp",accordionContent:"Accordion_accordionContent__3C6Ge",description:"Accordion_description__OuoHF",image:"Accordion_image__i0XqW"}},3525:function(e){e.exports={advanceGoalsSection:"AdvanceGoalsSection_advanceGoalsSection__SYLbo",sectionBody:"AdvanceGoalsSection_sectionBody__yCSlk",sectionHead:"AdvanceGoalsSection_sectionHead__Sk8E0",sectionTitle:"AdvanceGoalsSection_sectionTitle__6PAOG",sectionDescription:"AdvanceGoalsSection_sectionDescription__Kr7XX",chartIcons:"AdvanceGoalsSection_chartIcons__4q8xm",chartIcon:"AdvanceGoalsSection_chartIcon__8Gk6A",culture:"AdvanceGoalsSection_culture__SA1w6",cultureContent:"AdvanceGoalsSection_cultureContent__pUix9",bullet:"AdvanceGoalsSection_bullet__6GRQB",cultureTitle:"AdvanceGoalsSection_cultureTitle___cjkm",cultureDescription:"AdvanceGoalsSection_cultureDescription___RlZb",cultureAction:"AdvanceGoalsSection_cultureAction__IV6hK",ideaSection:"AdvanceGoalsSection_ideaSection___vN7_",bottomIcon:"AdvanceGoalsSection_bottomIcon__aQ2u2",bottomText:"AdvanceGoalsSection_bottomText__ClqNA",image:"AdvanceGoalsSection_image__4DEDM"}},3153:function(e){e.exports={footer:"ArticleFooter_footer__Dgi2q"}},5107:function(e){e.exports={button:"Button_button__VpC7b",link:"Button_link__85UxB",arrowOnHover:"Button_arrowOnHover__a_P75",primary:"Button_primary__rI6yw",tertiary:"Button_tertiary__w0Gud",newWindowIcon:"Button_newWindowIcon__DKqp_",disabled:"Button_disabled__uJNp4"}},2478:function(e){e.exports={card:"Card_card__Og35w",cardContent:"Card_cardContent__cNNP4",bottom:"Card_bottom__E0u7_"}},5482:function(e){e.exports={chip:"Chip_chip__tXKoE"}},5481:function(e){e.exports={cultureSection:"CultureSection_cultureSection__tfu_d",sectionHead:"CultureSection_sectionHead__ASSoI",sectionTitle:"CultureSection_sectionTitle__WKaJT",sectionDescription:"CultureSection_sectionDescription__CRB6W",chartIcons:"CultureSection_chartIcons__wDi1i",mobileOnly:"CultureSection_mobileOnly__BDKOh",chartIcon:"CultureSection_chartIcon__eoH_d",cultureContainer:"CultureSection_cultureContainer__VSLe_",culture:"CultureSection_culture__G7zVy",cultureContent:"CultureSection_cultureContent__gLLM6",cultureTitle:"CultureSection_cultureTitle__GIyoT",cultureDescription:"CultureSection_cultureDescription__6_KpN",cultureDescriptionText:"CultureSection_cultureDescriptionText__41A6f",cultureAction:"CultureSection_cultureAction__wPtQb",ideaSection:"CultureSection_ideaSection__yS7oX",bottomIcon:"CultureSection_bottomIcon__Oan5c",bottomText:"CultureSection_bottomText__dUHzs"}},7640:function(e){e.exports={empoweringJourneySection:"EmpoweringJourneySection_empoweringJourneySection__PTNog",sectionHead:"EmpoweringJourneySection_sectionHead__iXji7",sectionTitle:"EmpoweringJourneySection_sectionTitle__M9Wtx",sectionDescription:"EmpoweringJourneySection_sectionDescription__aOv6r",sectionBody:"EmpoweringJourneySection_sectionBody__gQ5Hy",resultsContainer:"EmpoweringJourneySection_resultsContainer__XVOdd",culture:"EmpoweringJourneySection_culture__TtSfu",cultureContent:"EmpoweringJourneySection_cultureContent__lq9yD",cultureContentSelected:"EmpoweringJourneySection_cultureContentSelected__7WrAq",cultureTitle:"EmpoweringJourneySection_cultureTitle__DSP0r",cultureDescription:"EmpoweringJourneySection_cultureDescription__I8zE_",cultureAction:"EmpoweringJourneySection_cultureAction__WbF8e",ideaSection:"EmpoweringJourneySection_ideaSection__M4oTh",bottomIcon:"EmpoweringJourneySection_bottomIcon__ZF69I",bottomText:"EmpoweringJourneySection_bottomText__fPoUW",indicators:"EmpoweringJourneySection_indicators__u0GeR",indicator:"EmpoweringJourneySection_indicator__mAmkB",selectedIndicator:"EmpoweringJourneySection_selectedIndicator__BP2KW"}},1925:function(e){e.exports={enhanceBusinessResultSection:"EnhanceBusinessResultsSection_enhanceBusinessResultSection__2bRE6",sectionHead:"EnhanceBusinessResultsSection_sectionHead__7QBZT",sectionTitle:"EnhanceBusinessResultsSection_sectionTitle__FSd2K",sectionDescription:"EnhanceBusinessResultsSection_sectionDescription__gsAjj",chartIcons:"EnhanceBusinessResultsSection_chartIcons__WWQss",chartIcon:"EnhanceBusinessResultsSection_chartIcon__bIp5M",resultsContainer:"EnhanceBusinessResultsSection_resultsContainer__M4XyW",culture:"EnhanceBusinessResultsSection_culture__GCKaH",cultureContent:"EnhanceBusinessResultsSection_cultureContent__NkimM",cultureTitle:"EnhanceBusinessResultsSection_cultureTitle__kqw1z",cultureDescription:"EnhanceBusinessResultsSection_cultureDescription__V_yiI",cultureAction:"EnhanceBusinessResultsSection_cultureAction__Imk5e",ideaSection:"EnhanceBusinessResultsSection_ideaSection__P9fqV",bottomIcon:"EnhanceBusinessResultsSection_bottomIcon__qWpki",bottomText:"EnhanceBusinessResultsSection_bottomText__bg_gG"}},4844:function(e){e.exports={container:"ContactUs_container__tZrQM",title:"ContactUs_title__zuxja",row:"ContactUs_row__gC7UJ",mailLink:"ContactUs_mailLink__uXgJm",shareRow:"ContactUs_shareRow__QYUk2"}},1714:function(e){e.exports={container:"FooterLinks_container__LvOTs",title:"FooterLinks_title__R_oDr",links:"FooterLinks_links___OYOW",link:"FooterLinks_link__8kvcq"}},5747:function(e){e.exports={container:"Footer_container__p92xm",title:"Footer_title__KYesT",leftSection:"Footer_leftSection___7Hiv",footerLinksContainer:"Footer_footerLinksContainer__WbNk9",rightSection:"Footer_rightSection__AfZDP",copyLink:"Footer_copyLink__e_uiN",copyContainer:"Footer_copyContainer__2Oxli",innerCopyContainer:"Footer_innerCopyContainer__tm4Ko",privacyPolicy:"Footer_privacyPolicy__5zpbX"}},6176:function(e){e.exports={appHeader:"Header_appHeader__TEmL7",headerWrapper:"Header_headerWrapper__wtHjB",logoContainer:"Header_logoContainer__qXhWx",headerLinks:"Header_headerLinks__HZFkZ",mobileHeaderOpen:"Header_mobileHeaderOpen__iqhec",headerLink:"Header_headerLink__3k6id",headerButtons:"Header_headerButtons___Ishu",burgerButton:"Header_burgerButton__WQnzk","blur-in":"Header_blur-in__DRL7W"}},3673:function(e){e.exports={homeHeroSection:"HomeHeroSection_homeHeroSection__uS2km",sectionBody:"HomeHeroSection_sectionBody__sYvaq",sectionHead:"HomeHeroSection_sectionHead__eDEgX",tagline:"HomeHeroSection_tagline__yW4Nc",sectionTitle:"HomeHeroSection_sectionTitle__oQbZV",sectionDescription:"HomeHeroSection_sectionDescription__aXI6O",cultureAction:"HomeHeroSection_cultureAction__2ledn",image:"HomeHeroSection_image__wVSju"}},286:function(e){e.exports={mobileHidden:"MobileHidden_mobileHidden__R8byf"}},1946:function(e){e.exports={mobileOnly:"MobileOnly_mobileOnly__S6Dr6"}},8678:function(e){e.exports={modalContainer:"Modal_modalContainer__WfdwT",shadow:"Modal_shadow__T_ME3",modal:"Modal_modal__aYALd",appearIn:"Modal_appearIn__BV5kC",modalContent:"Modal_modalContent__hVO1_"}},5170:function(e){e.exports={pageBody:"Page_pageBody__f9olQ",bodyContent:"Page_bodyContent__gKGKU"}},6168:function(e){e.exports={partnerSection:"PartnerSection_partnerSection__4qthy",container:"PartnerSection_container__EFWso",content:"PartnerSection_content__iXCjq",contentTitle:"PartnerSection_contentTitle__h_eza",contentDescription:"PartnerSection_contentDescription__a76o_",cultureAction:"PartnerSection_cultureAction__4j_CE"}},2550:function(e){e.exports={section:"Section_section__TwzwZ",container:"Section_container__FBUAj"}},61:function(e){e.exports={sectionHead:"SectionHead_sectionHead__NwGK8",tagline:"SectionHead_tagline__JN1M_",sectionTitle:"SectionHead_sectionTitle__SaIDN",sectionDescription:"SectionHead_sectionDescription__45LA1"}}},function(e){e.O(0,[169,162,468,971,23,744],function(){return e(e.s=9114)}),_N_E=e.O()}]);