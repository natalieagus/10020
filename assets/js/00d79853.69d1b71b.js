(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[5021],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,u=h["".concat(i,".").concat(d)]||h[d]||c[d]||s;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[h]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1262:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(7294),r=a(2389);function s(e){let{children:t,fallback:a}=e;return(0,r.Z)()?n.createElement(n.Fragment,null,t?.()):a??null}},4673:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(7462),r=a(7294),s=a(6010),l=a(2389),o=a(6043);const i={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function m(e,t){return!!e&&(e===t||m(e.parentElement,t))}function h(e){let{summary:t,children:a,...h}=e;const c=(0,l.Z)(),d=(0,r.useRef)(null),{collapsed:u,setCollapsed:y}=(0,o.u)({initialState:!h.open}),[g,b]=(0,r.useState)(h.open),k=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",(0,n.Z)({},h,{ref:d,open:g,"data-collapsed":u,className:(0,s.default)(i.details,c&&i.isBrowser,h.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;p(t)&&m(t,d.current)&&(e.preventDefault(),u?(y(!1),b(!0)):y(!0))}}),k,r.createElement(o.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{y(e),b(!e)}},r.createElement("div",{className:i.collapsibleContent},a)))}const c={details:"details_b_Ee"},d="alert alert--info";function u(e){let{...t}=e;return r.createElement(h,(0,n.Z)({},t,{className:(0,s.default)(d,c.details,t.className)}))}},9898:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(7462),r=a(7294),s=a(4673);function l(e){const t=r.Children.toArray(e.children),a=t.find((e=>r.isValidElement(e)&&"summary"===e.props?.mdxType)),l=r.createElement(r.Fragment,null,t.filter((e=>e!==a)));return r.createElement(s.Z,(0,n.Z)({},e,{summary:a}),l)}},505:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(7294);const r=(e,t)=>{(0,n.useEffect)((()=>{if(t){let t=document.createElement("script");t.src=e,t.id="WEKu7pDAS20WhGVVi4yPt",t.setAttribute("id","WEKu7pDAS20WhGVVi4yPt"),t.async=!0,t.type="text/babel",document.body.appendChild(t)}return()=>{if(t){let e=document.getElementById("WEKu7pDAS20WhGVVi4yPt");document.body.removeChild(e)}}}),[e])};var s=a(1262),l=a(412);function o(){let e="";const t=l.Z.canUseDOM;return t&&(e=a(5111).default),r(e,t),n.createElement(s.Z,null,(()=>n.createElement("div",null)))}},1694:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(9898),r=a(7294);const s={collapsible:"collapsible_Vzzz",header:"header_IhdJ"};function l(e){let{children:t,title:a}=e;return r.createElement(n.Z,{className:s.collapsible},r.createElement("summary",{mdxType:"summary",className:s.header},a||"Show Answer"),t)}},3707:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(4673),r=a(7294);const s=e=>{let{title:t}=e;return r.createElement("summary",{style:{fontWeight:"bold"}},t||"Deep Dive")};function l(e){let{children:t,title:a}=e;return r.createElement(r.Fragment,null,r.createElement(n.Z,{summary:r.createElement(s,{title:a})},t))}},6533:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(7294);const r={center_image:"center_image_tcFY"};function s(e){let{path:t,customClass:a,widthPercentage:s}=e,l="";return null!=a&&(l=`, ${a}`),n.createElement("section",null,n.createElement("img",{src:t,className:`${r.center_image} ${l}`,style:{width:`${s}`}}))}},5111:()=>{const e="black",t="KKO2rS1wYKTEyBJVRNa7e";let a="white",n=null,r=!1;const s=document.createElement("div");s.setAttribute("class","chatbase-bubble-button"),s.setAttribute("id","chatbase-bubble-button"),s.style.position="fixed",s.style.bottom="20px",s.style.right="20px",s.style.width="50px",s.style.height="50px",s.style.borderRadius="25px",s.style.backgroundColor=e,s.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)",s.style.cursor="pointer",s.style.zIndex=2,s.style.transition="all .2s ease-in-out";const l=document.createElement("div");l.setAttribute("id","chatbase-message-bubbles"),l.style.position="fixed",l.style.bottom="80px",l.style.borderRadius="10px",l.style.fontFamily="sans-serif",l.style.fontSize="16px",l.style.zIndex=2,l.style.cursor="pointer",l.style.flexDirection="column",l.style.gap="50px",l.style.marginLeft="20px",l.style.maxWidth="70vw",l.style.display="none";const o=document.createElement("div");o.setAttribute("id","chatbase-message-bubbles-close-button"),o.innerHTML="&#10005;",o.style.position="absolute",o.style.top="-7px",o.style.right="-7px",o.style.fontWeight="bold",o.style.display="none",o.style.justifyContent="center",o.style.alignItems="center",o.style.zIndex=2,o.style.width="22px",o.style.height="22px",o.style.borderRadius="50%",o.style.textAlign="center",o.style.fontSize="12px",o.style.cursor="pointer",l.appendChild(o),document.body.appendChild(l),s.addEventListener("mouseenter",(e=>{s.style.transform="scale(1.08)"})),s.addEventListener("mouseleave",(e=>{s.style.transform="scale(1)"}));const i=document.createElement("div");i.setAttribute("id","chatbase-chat-button-icon"),i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center",i.style.width="100%",i.style.height="100%",i.style.zIndex=2,s.appendChild(i),s.addEventListener("click",(function(){"none"===p.style.display?(r=!0,l.style.display="none",p.style.display="flex",i.innerHTML=d()):(r=!1,p.style.display="none",i.innerHTML=c())})),l.addEventListener("click",(()=>{r=!0,l.style.display="none",p.style.display="flex",i.innerHTML=d()}));const p=document.createElement("div");p.setAttribute("id","chatbase-bubble-window"),p.style.position="fixed",p.style.flexDirection="column",p.style.justifyContent="space-between",p.style.bottom="80px",p.style.width="85vw",p.style.height="70vh",p.style.boxShadow="rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px",p.style.display="none",p.style.borderRadius="10px",p.style.zIndex=2,p.style.overflow="hidden",document.body.appendChild(p),p.innerHTML=`<iframe\nsrc="https://www.chatbase.co/chatbot-iframe/${t}"\nwidth="100%"\nheight="100%"\nframeborder="0"\n></iframe>`;const m=window.matchMedia("(min-width: 550px)");function h(e){e.matches&&(p.style.height="600px",p.style.width="400px",l.style.maxWidth="300px")}m.addEventListener("change",h),h(m);function c(){return n||`\n  <svg id="chatbase-chat-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="${a}" width="24" height="24">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />\n  </svg>`}function d(){return`\n  <svg id="chatbase-close-icon" class="closeIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="${a}" width="24" height="24">\n    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />\n  </svg>\n  `}function u(e,t){"#"===e.charAt(0)&&(e=e.substr(1));const a=e=>Math.min(255,Math.max(0,e)),n=parseInt(e.substr(0,2),16),r=parseInt(e.substr(2,2),16),s=parseInt(e.substr(4,2),16),l=(.299*n+.587*r+.114*s)/255>.5?-1*Math.abs(t):Math.abs(t),o=a(n+Math.round(255*l)),i=a(r+Math.round(255*l)),p=a(s+Math.round(255*l));return"#"+o.toString(16).padStart(2,"0")+i.toString(16).padStart(2,"0")+p.toString(16).padStart(2,"0")}(async()=>{const m=await fetch(`https://www.chatbase.co/api/get-chatbot-styles?chatbotId=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}),{styles:h,initialMessages:d}=await m.json();s.style.backgroundColor=h.button_color||e,"left"===h.align_chat_button?(s.style.left="20px",s.style.right="unset",p.style.left="20px",p.style.right="unset",l.style.left="20px",l.style.right="unset"):(s.style.right="20px",s.style.left="unset",p.style.right="20px",p.style.left="unset",l.style.right="20px",l.style.left="unset"),document.body.appendChild(s),h.chat_icon&&(n=`<img src="https://backend.chatbase.co/storage/v1/object/public/chat-icons/${h.chat_icon}" class="chatbase-bubble-img" id="chatbase-bubble-img" />`);const y=function(e){"#"===e.charAt(0)&&(e=e.substr(1));const t=parseInt(e.substr(0,2),16),a=parseInt(e.substr(2,2),16),n=parseInt(e.substr(4,2),16);return(.299*t+.587*a+.114*n)/255>.5?"black":"white"}(h.button_color||e);a=y,i.innerHTML=c(),d.forEach(((e,t)=>{const a=document.createElement("div");a.style.display="flex",a.style.justifyContent="left"===h.align_chat_button?"flex-start":"flex-end";const n=document.createElement("div");n.style.backgroundColor="dark"===h.theme?"black":"white",n.style.color="dark"===h.theme?"white":"black",n.style.boxShadow="rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px",n.style.borderRadius="10px",n.style.padding="20px",n.style.margin="8px",n.style.fontSize="14px",n.innerText=e,n.style.opacity=0,n.style.transform="scale(0.9)",n.style.transition="opacity 0.5s ease, transform 0.5s ease",a.appendChild(n),l.appendChild(a),h.auto_open_chat_window_after>=0&&setTimeout((()=>{r||"true"!==sessionStorage.getItem("message_bubbles_have_been_shown")&&(0===t&&(l.style.display="block"),n.style.opacity=1,n.style.transform="scale(1)",t===d.length-1&&sessionStorage.setItem("message_bubbles_have_been_shown","true"))}),1e3*h.auto_open_chat_window_after+100*t)})),o.style.backgroundColor="dark"===h.theme?u("#000000",.2):u("#FFFFFF",.12),o.style.color="dark"===h.theme?"white":"black",o.style.boxShadow="rgba(150, 150, 150, 0.15) 0px 6px 24px 0px, rgba(150, 150, 150, 0.15) 0px 0px 0px 1px",l.addEventListener("mouseenter",(()=>{o.style.display="flex"})),l.addEventListener("mouseleave",(()=>{o.style.display="none"})),o.addEventListener("click",(e=>{e.stopPropagation(),l.style.display="none"}))})(),document.onclick=function(e){console.log(e.target.id),"chatbase-bubble-window"!==e.target.id&&"chatbase-bubble-button"!==e.target.id&&"chatbase-bubble-img"!==e.target.id&&"chatbase-close-icon"!==e.target.id&&"chatbase-chat-icon"!==e.target.id&&"chatbase-chat-button-icon"!==e.target.id&&(r&&(p.style.display="none",i.innerHTML=c(),r=!1),console.log("close chat"))}},8525:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>h});var n=a(7462),r=(a(7294),a(3905)),s=(a(1694),a(3707)),l=(a(6533),a(505));const o={sidebar_position:4},i="Heapsort",p={unversionedId:"sorting-algorithms/heapsort",id:"sorting-algorithms/heapsort",title:"Heapsort",description:"Heapsort is a comparison-based sorting algorithm that builds a binary heap data structure and repeatedly extracts the maximum element to sort a given array.",source:"@site/docs/01-sorting-algorithms/heapsort.md",sourceDirName:"01-sorting-algorithms",slug:"/sorting-algorithms/heapsort",permalink:"/10020/notes/sorting-algorithms/heapsort",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Binary Heap",permalink:"/10020/notes/sorting-algorithms/binary-heap"},next:{title:"Computation Time",permalink:"/10020/notes/computation-time"}},m={},h=[{value:"Goals",id:"goals",level:3},{value:"Introduction",id:"introduction",level:2},{value:"(P)roblem Statement",id:"problem-statement",level:3},{value:"Test (C)ases",id:"test-cases",level:3},{value:"(D)esign of Algorithm",id:"design-of-algorithm",level:3}],c={toc:h},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"heapsort"},"Heapsort"),(0,r.kt)(l.Z,{mdxType:"ChatBaseBubble"}),"Heapsort is a comparison-based sorting algorithm that builds a binary heap data structure and repeatedly extracts the maximum element to sort a given array.",(0,r.kt)("h3",{id:"goals"},"Goals"),(0,r.kt)("p",null,"By the end of this lesson, you should be able to implement ",(0,r.kt)("strong",{parentName:"p"},"heapsort")," using iteration."),(0,r.kt)("admonition",{title:"Keywords",type:"keyword"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"heapsort"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Now, we can consider Heapsort algorithm. The idea of a heapsort is pretty simple. For any arbitrary array, we can sort the integers in the array by first building a ",(0,r.kt)("em",{parentName:"p"},"max-heap"),". Once the max-heap is built, we know that the maximum is at the ",(0,r.kt)("em",{parentName:"p"},"root")," node. With this, we can swap the ",(0,r.kt)("em",{parentName:"p"},"root")," node with the last element and then exclude it from our heap. We then should restore the ",(0,r.kt)("em",{parentName:"p"},"max-heap property")," after this swap because now the ",(0,r.kt)("em",{parentName:"p"},"root")," node will be a small number. We can do this repetitively until there is no more element in the heap."),(0,r.kt)("h3",{id:"problem-statement"},"(P)roblem Statement"),(0,r.kt)("p",null,"Given an arbitrary array of integers, sort the element using heapsort algorithm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: array of integers\nOutput: None\nProcess: Sort the elements of the array in place using heapsort\n")),(0,r.kt)("h3",{id:"test-cases"},"Test (C)ases"),(0,r.kt)("p",null,"Let's use the same example as in the previous seciton. Let's say we have the following array."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[1, 2, 8, 7, 14, 9, 3, 10, 4, 16]")),(0,r.kt)("p",null,"We will sort the elements following these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Build a max-heap from this array. The previous section has shown that the final output of building a max-heap will be:"),(0,r.kt)("p",{parentName:"li"},"[16, 14, 9, 10, 2, 8, 3, 7, 4, 1]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now, we will swap the largest element with the last element, and exclude it from the heap. We will put the excluded element in what we called as ",(0,r.kt)("strong",{parentName:"p"},"sorted")," of the list. This sorted section is separated by ",(0,r.kt)("inlineCode",{parentName:"p"},"||")," in the list below."),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"1"),", 14, 9, 10, 2, 8, 3, 7, 4 ,|| ",(0,r.kt)("strong",{parentName:"p"},"16"),"]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Notice, now, that the array does not satisfy the ",(0,r.kt)("em",{parentName:"p"},"max-heap property"),". So we must ",(0,r.kt)("em",{parentName:"p"},"max-heapify")," the array to push the element 1 down to its place. The process of ",(0,r.kt)("em",{parentName:"p"},"max-heapify")," from the root node will result in:"),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"1"),", ",(0,r.kt)("strong",{parentName:"p"},"14"),", 9, 10, 2, 8, 3, 7, 4, || 16]"),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"14"),", ",(0,r.kt)("strong",{parentName:"p"},"1"),", 9, 10, 2, 8, 3, 7, 4, || 16]"),(0,r.kt)("p",{parentName:"li"},"heap = ","[14, ",(0,r.kt)("strong",{parentName:"p"},"10"),", 9, ",(0,r.kt)("strong",{parentName:"p"},"1"),", 2, 8, 3, 7, 4, || 16]"),(0,r.kt)("p",{parentName:"li"},"heap = ","[14, 10, 9, ",(0,r.kt)("strong",{parentName:"p"},"7"),", 2, 8, 3, ",(0,r.kt)("strong",{parentName:"p"},"1"),", 4, || 16]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once we have restored the ",(0,r.kt)("em",{parentName:"p"},"max-heap property"),", we can take out the largest element from the first element and swap it with the last element in the heap."),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"4"),", 10, 9, 7, 2, 8, 3, 1, || ",(0,r.kt)("strong",{parentName:"p"},"14"),", 16]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We then ",(0,r.kt)("em",{parentName:"p"},"max-heapify")," the heap again to restore the ",(0,r.kt)("em",{parentName:"p"},"max-heap property"),"."),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"4"),", ",(0,r.kt)("strong",{parentName:"p"},"10"),", 9, 7, 2, 8, 3, 1, || ",(0,r.kt)("strong",{parentName:"p"},"14"),", 16]"),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"10"),", ",(0,r.kt)("strong",{parentName:"p"},"4"),", 9, 7, 2, 8, 3, 1, || ",(0,r.kt)("strong",{parentName:"p"},"14"),", 16]"),(0,r.kt)("p",{parentName:"li"},"heap = ","[10, ",(0,r.kt)("strong",{parentName:"p"},"7"),", 9, ",(0,r.kt)("strong",{parentName:"p"},"4"),", 2, 8, 3, 1, || ",(0,r.kt)("strong",{parentName:"p"},"14"),", 16]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We then swap the largest element with the last element in the heap, and take it out from the heap."),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"1"),", 7, 9, 4, 2, 8, 3, || ",(0,r.kt)("strong",{parentName:"p"},"10"),", 14, 16]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The same process of ",(0,r.kt)("em",{parentName:"p"},"max-heapify")," happens again. We will now ",(0,r.kt)("em",{parentName:"p"},"remove")," the intermediate step and only show the first and the final state of the heaps."),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"1"),", 7, 9, 4, 2, 8, 3, || ",(0,r.kt)("strong",{parentName:"p"},"10"),", 14, 16]"),(0,r.kt)("p",{parentName:"li"},"heap = ","[9, 7, 8, 4, 2, ",(0,r.kt)("strong",{parentName:"p"},"1"),", 3, || ",(0,r.kt)("strong",{parentName:"p"},"10"),", 14, 16]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We swap and take out again the largest element. The next iteration would be:"),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"3"),", 7, 8, 4, 2, ",(0,r.kt)("strong",{parentName:"p"},"1"),", || ",(0,r.kt)("strong",{parentName:"p"},"9"),", 10, 14, 16]"),(0,r.kt)("p",{parentName:"li"},"then we max-heapify the array:"),(0,r.kt)("p",{parentName:"li"},"heap = ","[8, 7, ",(0,r.kt)("strong",{parentName:"p"},"3"),", 4, 2, 1, || ",(0,r.kt)("strong",{parentName:"p"},"9"),", 10, 14, 16]"),(0,r.kt)("p",{parentName:"li"},"Swapping and taking out the largest element:"),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"1"),", 7, 3, 4, 2, || ",(0,r.kt)("strong",{parentName:"p"},"8"),", 9, 10, 14, 16]"),(0,r.kt)("p",{parentName:"li"},"and max-heapify:"),(0,r.kt)("p",{parentName:"li"},"heap = ","[7, 4, 3, ",(0,r.kt)("strong",{parentName:"p"},"1"),", 2, || ",(0,r.kt)("strong",{parentName:"p"},"8"),", 9, 10, 14, 16]"),(0,r.kt)("p",{parentName:"li"},"Swapping and taking out the largest element:"),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"2"),", 4, 3, 1, || ",(0,r.kt)("strong",{parentName:"p"},"7"),", 8, 9, 10, 14, 16]"),(0,r.kt)("p",{parentName:"li"},"and max-heapify:"),(0,r.kt)("p",{parentName:"li"},"heap = ","[4, ",(0,r.kt)("strong",{parentName:"p"},"2"),", 3, 1, || ",(0,r.kt)("strong",{parentName:"p"},"7"),", 8, 9, 10, 14, 16]"),(0,r.kt)("p",{parentName:"li"},"Swapping and taking out the largest element:"),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"1"),", 2, 3, || ",(0,r.kt)("strong",{parentName:"p"},"4"),", 7, 8, 9, 10, 14, 16]"),(0,r.kt)("p",{parentName:"li"},"and max-heapify:"),(0,r.kt)("p",{parentName:"li"},"heap = ","[3, 2, ",(0,r.kt)("strong",{parentName:"p"},"1"),", || ",(0,r.kt)("strong",{parentName:"p"},"4"),", 7, 8, 9, 10, 14, 16]"),(0,r.kt)("p",{parentName:"li"},"Swapping and taking out the largest element:"),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"1"),", 2, || ",(0,r.kt)("strong",{parentName:"p"},"3"),", 4, 7, 8, 9, 10, 14, 16]"),(0,r.kt)("p",{parentName:"li"},"and max-heapify:"),(0,r.kt)("p",{parentName:"li"},"heap = ","[2, ",(0,r.kt)("strong",{parentName:"p"},"1"),", || ",(0,r.kt)("strong",{parentName:"p"},"3"),", 4, 7, 8, 9, 10, 14, 16]"),(0,r.kt)("p",{parentName:"li"},"Swapping and taking out the largest element:"),(0,r.kt)("p",{parentName:"li"},"heap = ","[",(0,r.kt)("strong",{parentName:"p"},"1"),", || ",(0,r.kt)("strong",{parentName:"p"},"2"),", 3, 4, 7, 8, 9, 10, 14, 16]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"At this point in time, the array is already sorted. If ",(0,r.kt)("inlineCode",{parentName:"p"},"heap")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sorted")," are not a separate array but rather one single array, we will have:"),(0,r.kt)("p",{parentName:"li"},"result = ","[1, 2, 3, 4, 7, 8, 9, 10, 14, 16]"))),(0,r.kt)("h3",{id:"design-of-algorithm"},"(D)esign of Algorithm"),(0,r.kt)("p",null,"Let's write down the steps in the previous section in a pseudocode."),(0,r.kt)(s.Z,{title:"Show Pseudocode",mdxType:"DeepDive"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"def heapsort(array):\nInput:\n  - array: any arbitrary array\nOutput: None\nSteps:\n1. call build-max-heap(array)\n2. heap_end_pos = length of array - 1 # index of the last element in the heap\n3. As long as (heap_end_pos > 0), do:\n    3.1 swap( array[0], array[heap_end_pos])\n    3.2 heap_end_pos = heap_end_pos -1 # reduce heap size\n    3.3 call max-heapify(array[from index 0 to heap_end_pos inclusive], 0)\n"))),(0,r.kt)("p",null,"We first call the procedure in the previous section called ",(0,r.kt)("inlineCode",{parentName:"p"},"build-max-heap")," to create the ",(0,r.kt)("em",{parentName:"p"},"max-heap")," data structure. We then start from the last element in the heap and swap it with the largest element (always at index 0)."),(0,r.kt)("p",null,"We reduce the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"heap_end_pos")," to reduce the heap size and exclude the largest element from the heap."),(0,r.kt)("p",null,"Then, we can call ",(0,r.kt)("inlineCode",{parentName:"p"},"max-heapify")," on a subarray. The subarray starts from index 0 of the current array up to index ",(0,r.kt)("inlineCode",{parentName:"p"},"heap_end_pos"),". In this way, we exclude the largest element from being ",(0,r.kt)("em",{parentName:"p"},"max-heapified"),"."),(0,r.kt)("p",null,"The second argument of ",(0,r.kt)("inlineCode",{parentName:"p"},"max-heapify")," is the starting node where the process should begins. In this case, we always want to start ",(0,r.kt)("inlineCode",{parentName:"p"},"max-heapify")," from index 0 because this is the node where we replace the largest element with some small element from the end of the heap."))}u.isMDXComponent=!0}}]);