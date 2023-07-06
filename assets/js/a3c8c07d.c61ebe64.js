"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[1506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=r(7462),a=r(7294),o=r(3905);r(1694),r(3707),r(6533);function l(){return a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.createElement("iframe",{src:"https://www.chatbase.co/chatbot-iframe/KKO2rS1wYKTEyBJVRNa7e",width:"80%",style:{height:"100%","min-height":"700px"},frameborder:"0"}))}const i={sidebar_position:3},c="DDW Chatbot",s={unversionedId:"chatbot",id:"chatbot",title:"DDW Chatbot",description:"You can ask our chatbot, cschatbot anything pertaining information related to this website.",source:"@site/about/chatbot.md",sourceDirName:".",slug:"/chatbot",permalink:"/10020/about/chatbot",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Learning Objectives",permalink:"/10020/about/learning-objectives"}},u={},m=[],p={toc:m},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ddw-chatbot"},"DDW Chatbot"),(0,o.kt)("p",null,"You can ask our chatbot, ",(0,o.kt)("inlineCode",{parentName:"p"},"cschatbot")," anything pertaining information related to this website."),(0,o.kt)(l,{mdxType:"ChatBase"}))}f.isMDXComponent=!0},4673:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),i=r(6043);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function s(e){return!!e&&("SUMMARY"===e.tagName||s(e.parentElement))}function u(e,t){return!!e&&(e===t||u(e.parentElement,t))}function m(e){let{summary:t,children:r,...m}=e;const p=(0,l.Z)(),d=(0,a.useRef)(null),{collapsed:f,setCollapsed:b}=(0,i.u)({initialState:!m.open}),[y,h]=(0,a.useState)(m.open),g=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,n.Z)({},m,{ref:d,open:y,"data-collapsed":f,className:(0,o.default)(c.details,p&&c.isBrowser,m.className),onMouseDown:e=>{s(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;s(t)&&u(t,d.current)&&(e.preventDefault(),f?(b(!1),h(!0)):b(!0))}}),g,a.createElement(i.z,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{b(e),h(!e)}},a.createElement("div",{className:c.collapsibleContent},r)))}const p={details:"details_b_Ee"},d="alert alert--info";function f(e){let{...t}=e;return a.createElement(m,(0,n.Z)({},t,{className:(0,o.default)(d,p.details,t.className)}))}},9898:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7462),a=r(7294),o=r(4673);function l(e){const t=a.Children.toArray(e.children),r=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==r)));return a.createElement(o.Z,(0,n.Z)({},e,{summary:r}),l)}},1694:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(9898),a=r(7294);const o={collapsible:"collapsible_Vzzz",header:"header_IhdJ"};function l(e){let{children:t,title:r}=e;return a.createElement(n.Z,{className:o.collapsible},a.createElement("summary",{mdxType:"summary",className:o.header},r||"Show Answer"),t)}},3707:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(4673),a=r(7294);const o=e=>{let{title:t}=e;return a.createElement("summary",{style:{fontWeight:"bold"}},t||"Deep Dive")};function l(e){let{children:t,title:r}=e;return a.createElement(a.Fragment,null,a.createElement(n.Z,{summary:a.createElement(o,{title:r})},t))}},6533:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a={center_image:"center_image_tcFY"};function o(e){let{path:t,widthPercentage:r}=e;return n.createElement("section",null,n.createElement("img",{src:t,className:a.center_image,style:{width:`${r}`}}))}}}]);