(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[3997],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,m=p["".concat(o,".").concat(u)]||p[u]||h[u]||i;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1262:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(7294),r=a(2389);function i(e){let{children:t,fallback:a}=e;return(0,r.Z)()?n.createElement(n.Fragment,null,t?.()):a??null}},4673:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),i=a(6010),s=a(2389),l=a(6043);const o={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function p(e){let{summary:t,children:a,...p}=e;const h=(0,s.Z)(),u=(0,r.useRef)(null),{collapsed:m,setCollapsed:g}=(0,l.u)({initialState:!p.open}),[y,b]=(0,r.useState)(p.open),f=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",(0,n.Z)({},p,{ref:u,open:y,"data-collapsed":m,className:(0,i.default)(o.details,h&&o.isBrowser,p.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&d(t,u.current)&&(e.preventDefault(),m?(g(!1),b(!0)):g(!0))}}),f,r.createElement(l.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),b(!e)}},r.createElement("div",{className:o.collapsibleContent},a)))}const h={details:"details_b_Ee"},u="alert alert--info";function m(e){let{...t}=e;return r.createElement(p,(0,n.Z)({},t,{className:(0,i.default)(u,h.details,t.className)}))}},9898:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(7462),r=a(7294),i=a(4673);function s(e){const t=r.Children.toArray(e.children),a=t.find((e=>r.isValidElement(e)&&"summary"===e.props?.mdxType)),s=r.createElement(r.Fragment,null,t.filter((e=>e!==a)));return r.createElement(i.Z,(0,n.Z)({},e,{summary:a}),s)}},505:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(7294);const r=(e,t)=>{(0,n.useEffect)((()=>{if(t){let t=document.createElement("script");t.src=e,t.id="WEKu7pDAS20WhGVVi4yPt",t.setAttribute("id","WEKu7pDAS20WhGVVi4yPt"),t.async=!0,t.type="text/babel",document.body.appendChild(t)}return()=>{if(t){let e=document.getElementById("WEKu7pDAS20WhGVVi4yPt");document.body.removeChild(e)}}}),[e])};var i=a(1262),s=a(412);function l(){let e="";const t=s.Z.canUseDOM;return t&&(e=a(5111).default),r(e,t),n.createElement(i.Z,null,(()=>n.createElement("div",null)))}},1694:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(9898),r=a(7294);const i={collapsible:"collapsible_Vzzz",header:"header_IhdJ"};function s(e){let{children:t,title:a}=e;return r.createElement(n.Z,{className:i.collapsible},r.createElement("summary",{mdxType:"summary",className:i.header},a||"Show Answer"),t)}},3707:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(4673),r=a(7294);const i=e=>{let{title:t}=e;return r.createElement("summary",{style:{fontWeight:"bold"}},t||"Deep Dive")};function s(e){let{children:t,title:a}=e;return r.createElement(r.Fragment,null,r.createElement(n.Z,{summary:r.createElement(i,{title:a})},t))}},6533:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(7294);const r={center_image:"center_image_tcFY"};function i(e){let{path:t,customClass:a,widthPercentage:i}=e,s="";return null!=a&&(s=`, ${a}`),n.createElement("section",null,n.createElement("img",{src:t,className:`${r.center_image} ${s}`,style:{width:`${i}`}}))}},5111:()=>{const e="black",t="KKO2rS1wYKTEyBJVRNa7e";let a="white",n=null,r=!1;const i=document.createElement("div");i.setAttribute("class","chatbase-bubble-button"),i.setAttribute("id","chatbase-bubble-button"),i.style.position="fixed",i.style.bottom="20px",i.style.right="20px",i.style.width="50px",i.style.height="50px",i.style.borderRadius="25px",i.style.backgroundColor=e,i.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)",i.style.cursor="pointer",i.style.zIndex=2,i.style.transition="all .2s ease-in-out";const s=document.createElement("div");s.setAttribute("id","chatbase-message-bubbles"),s.style.position="fixed",s.style.bottom="80px",s.style.borderRadius="10px",s.style.fontFamily="sans-serif",s.style.fontSize="16px",s.style.zIndex=2,s.style.cursor="pointer",s.style.flexDirection="column",s.style.gap="50px",s.style.marginLeft="20px",s.style.maxWidth="70vw",s.style.display="none";const l=document.createElement("div");l.setAttribute("id","chatbase-message-bubbles-close-button"),l.innerHTML="&#10005;",l.style.position="absolute",l.style.top="-7px",l.style.right="-7px",l.style.fontWeight="bold",l.style.display="none",l.style.justifyContent="center",l.style.alignItems="center",l.style.zIndex=2,l.style.width="22px",l.style.height="22px",l.style.borderRadius="50%",l.style.textAlign="center",l.style.fontSize="12px",l.style.cursor="pointer",s.appendChild(l),document.body.appendChild(s),i.addEventListener("mouseenter",(e=>{i.style.transform="scale(1.08)"})),i.addEventListener("mouseleave",(e=>{i.style.transform="scale(1)"}));const o=document.createElement("div");o.setAttribute("id","chatbase-chat-button-icon"),o.style.display="flex",o.style.alignItems="center",o.style.justifyContent="center",o.style.width="100%",o.style.height="100%",o.style.zIndex=2,i.appendChild(o),i.addEventListener("click",(function(){"none"===c.style.display?(r=!0,s.style.display="none",c.style.display="flex",o.innerHTML=u()):(r=!1,c.style.display="none",o.innerHTML=h())})),s.addEventListener("click",(()=>{r=!0,s.style.display="none",c.style.display="flex",o.innerHTML=u()}));const c=document.createElement("div");c.setAttribute("id","chatbase-bubble-window"),c.style.position="fixed",c.style.flexDirection="column",c.style.justifyContent="space-between",c.style.bottom="80px",c.style.width="85vw",c.style.height="70vh",c.style.boxShadow="rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px",c.style.display="none",c.style.borderRadius="10px",c.style.zIndex=2,c.style.overflow="hidden",document.body.appendChild(c),c.innerHTML=`<iframe\nsrc="https://www.chatbase.co/chatbot-iframe/${t}"\nwidth="100%"\nheight="100%"\nframeborder="0"\n></iframe>`;const d=window.matchMedia("(min-width: 550px)");function p(e){e.matches&&(c.style.height="600px",c.style.width="400px",s.style.maxWidth="300px")}d.addEventListener("change",p),p(d);function h(){return n||`\n  <svg id="chatbase-chat-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="${a}" width="24" height="24">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />\n  </svg>`}function u(){return`\n  <svg id="chatbase-close-icon" class="closeIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="${a}" width="24" height="24">\n    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />\n  </svg>\n  `}function m(e,t){"#"===e.charAt(0)&&(e=e.substr(1));const a=e=>Math.min(255,Math.max(0,e)),n=parseInt(e.substr(0,2),16),r=parseInt(e.substr(2,2),16),i=parseInt(e.substr(4,2),16),s=(.299*n+.587*r+.114*i)/255>.5?-1*Math.abs(t):Math.abs(t),l=a(n+Math.round(255*s)),o=a(r+Math.round(255*s)),c=a(i+Math.round(255*s));return"#"+l.toString(16).padStart(2,"0")+o.toString(16).padStart(2,"0")+c.toString(16).padStart(2,"0")}(async()=>{const d=await fetch(`https://www.chatbase.co/api/get-chatbot-styles?chatbotId=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}),{styles:p,initialMessages:u}=await d.json();i.style.backgroundColor=p.button_color||e,"left"===p.align_chat_button?(i.style.left="20px",i.style.right="unset",c.style.left="20px",c.style.right="unset",s.style.left="20px",s.style.right="unset"):(i.style.right="20px",i.style.left="unset",c.style.right="20px",c.style.left="unset",s.style.right="20px",s.style.left="unset"),document.body.appendChild(i),p.chat_icon&&(n=`<img src="https://backend.chatbase.co/storage/v1/object/public/chat-icons/${p.chat_icon}" class="chatbase-bubble-img" id="chatbase-bubble-img" />`);const g=function(e){"#"===e.charAt(0)&&(e=e.substr(1));const t=parseInt(e.substr(0,2),16),a=parseInt(e.substr(2,2),16),n=parseInt(e.substr(4,2),16);return(.299*t+.587*a+.114*n)/255>.5?"black":"white"}(p.button_color||e);a=g,o.innerHTML=h(),u.forEach(((e,t)=>{const a=document.createElement("div");a.style.display="flex",a.style.justifyContent="left"===p.align_chat_button?"flex-start":"flex-end";const n=document.createElement("div");n.style.backgroundColor="dark"===p.theme?"black":"white",n.style.color="dark"===p.theme?"white":"black",n.style.boxShadow="rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px",n.style.borderRadius="10px",n.style.padding="20px",n.style.margin="8px",n.style.fontSize="14px",n.innerText=e,n.style.opacity=0,n.style.transform="scale(0.9)",n.style.transition="opacity 0.5s ease, transform 0.5s ease",a.appendChild(n),s.appendChild(a),p.auto_open_chat_window_after>=0&&setTimeout((()=>{r||"true"!==sessionStorage.getItem("message_bubbles_have_been_shown")&&(0===t&&(s.style.display="block"),n.style.opacity=1,n.style.transform="scale(1)",t===u.length-1&&sessionStorage.setItem("message_bubbles_have_been_shown","true"))}),1e3*p.auto_open_chat_window_after+100*t)})),l.style.backgroundColor="dark"===p.theme?m("#000000",.2):m("#FFFFFF",.12),l.style.color="dark"===p.theme?"white":"black",l.style.boxShadow="rgba(150, 150, 150, 0.15) 0px 6px 24px 0px, rgba(150, 150, 150, 0.15) 0px 0px 0px 1px",s.addEventListener("mouseenter",(()=>{l.style.display="flex"})),s.addEventListener("mouseleave",(()=>{l.style.display="none"})),l.addEventListener("click",(e=>{e.stopPropagation(),s.style.display="none"}))})(),document.onclick=function(e){console.log(e.target.id),"chatbase-bubble-window"!==e.target.id&&"chatbase-bubble-button"!==e.target.id&&"chatbase-bubble-img"!==e.target.id&&"chatbase-close-icon"!==e.target.id&&"chatbase-chat-icon"!==e.target.id&&"chatbase-chat-button-icon"!==e.target.id&&(r&&(c.style.display="none",o.innerHTML=h(),r=!1),console.log("close chat"))}},9052:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),i=(a(1694),a(3707),a(6533)),s=a(505);const l={sidebar_position:1},o="Basics of Graph",c={unversionedId:"graphs/basics-graph",id:"graphs/basics-graph",title:"Basics of Graph",description:"Graph theory is a mathematical discipline that studies the properties and relationships of graphs, which consist of nodes (vertices) connected by edges, enabling analysis of various real-world systems and phenomena.",source:"@site/docs/05-graphs/basics-graph.md",sourceDirName:"05-graphs",slug:"/graphs/basics-graph",permalink:"/10020/notes/graphs/basics-graph",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Graph Theory",permalink:"/10020/notes/category/graph-theory"},next:{title:"Breadth First Search",permalink:"/10020/notes/graphs/bfs"}},d={},p=[{value:"Goals",id:"goals",level:3},{value:"What is a Graph?",id:"what-is-a-graph",level:2},{value:"How to Represent a Graph in a Code?",id:"how-to-represent-a-graph-in-a-code",level:2},{value:"Adjacency Matrix",id:"adjacency-matrix",level:3},{value:"Adjacency List",id:"adjacency-list",level:3},{value:"Using Object Oriented Programming",id:"using-object-oriented-programming",level:3}],h={toc:p},u="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basics-of-graph"},"Basics of Graph"),(0,r.kt)("p",null,"Graph theory is a mathematical discipline that studies the properties and relationships of graphs, which consist of nodes (vertices) connected by edges, enabling analysis of various real-world systems and phenomena."),(0,r.kt)(s.Z,{mdxType:"ChatBaseBubble"}),(0,r.kt)("h3",{id:"goals"},"Goals"),(0,r.kt)("p",null,"By the end of this lesson, you should be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define ",(0,r.kt)("strong",{parentName:"li"},"graph"),", ",(0,r.kt)("strong",{parentName:"li"},"vertices"),", ",(0,r.kt)("strong",{parentName:"li"},"edges")," and ",(0,r.kt)("strong",{parentName:"li"},"weights")),(0,r.kt)("li",{parentName:"ul"},"Differentiate ",(0,r.kt)("strong",{parentName:"li"},"directed")," and ",(0,r.kt)("strong",{parentName:"li"},"undirected")," graphs"),(0,r.kt)("li",{parentName:"ul"},"Define ",(0,r.kt)("strong",{parentName:"li"},"paths")),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Vertex")," class and a Graph class"),(0,r.kt)("li",{parentName:"ul"},"Represent graphs using ",(0,r.kt)("strong",{parentName:"li"},"adjacency-list")," representation or ",(0,r.kt)("strong",{parentName:"li"},"adjacency-matrix")," representation")),(0,r.kt)("admonition",{title:"Keywords",type:"keyword"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"graph,adjacency matrix,adjacency list,vertex,neighbours,edge,weight,directional edge"))),(0,r.kt)("h2",{id:"what-is-a-graph"},"What is a Graph?"),(0,r.kt)("p",null,"In previous sections, we have worked with various algorithms and data. For example, we did sorting algorithm in a sequence of data of a list or array-like type. List and array is one kind of data where the item has relationship only with its previous and next item in a sequence. Stack and Queues are another kind of data structures. Even with these two, each item is related only in linear fashion, either with the next one at the top of the Stack or with the next in the sequence of the Queue. A Graph allows more relationship to be represented between each item. Two examples of graph data structures are shown below."),(0,r.kt)(i.Z,{path:a(5371).Z,widthPercentage:"30%",mdxType:"ImageCard"}),(0,r.kt)(i.Z,{path:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Control-flow-graph-ex.svg/753px-Control-flow-graph-ex.svg.png",widthPercentage:"50%",mdxType:"ImageCard"}),(0,r.kt)("p",null,"In the first example, the graph represent a kind of connection between places like in a map. With this kind of data, we can find a path from one place to another place or finding the shortest distance between two places. In the second example, the graph represent the control flow of a computer program. Compiler can use this information to optimize the code. Both are a Graph data type that represent different things. We can define a few things when dealing with a Graph."),(0,r.kt)(i.Z,{path:a(8999).Z,widthPercentage:"50%",mdxType:"ImageCard"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Vertex"),': A vertex is a node that is connected by edges in a graph. A vertex can have a name which is also called its "key". In the above example, V1, V2, V3, etc are the vertices.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Edge"),": An edge in the figure above is represented by the lines connecting two vertices. An edge can be uni-directinal or bi-directional. The direction is usually represented by the arrow. Bi-directional edges usually do not have arrow heads. In the above examples, E1, E2, E3, etc are edges. Note that E1 and E6 are bi-directional while the rest are uni-directional.")),(0,r.kt)("h2",{id:"how-to-represent-a-graph-in-a-code"},"How to Represent a Graph in a Code?"),(0,r.kt)("p",null,"In the previous section we show some examples how real-world data like train stations or even a computer code can be represented as a graph. In this section we would like to discuss how such graphs are written in a computer code. The main information needed by the computer is the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"what are the vertices"),(0,r.kt)("li",{parentName:"ul"},"what are the edges"),(0,r.kt)("li",{parentName:"ul"},"how the vertices are connected by the edges")),(0,r.kt)("h3",{id:"adjacency-matrix"},"Adjacency Matrix"),(0,r.kt)("p",null,"One way to represent this is to use an ",(0,r.kt)("strong",{parentName:"p"},"Adjencency Matrix"),". In this matrix, if there is a connection between one vertex to another, the cell between that row and column is represented by some number, e.g. 1 instead of 0 as when there is no connection. For example, the last graph above can be written in the following matrix:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"V1"),(0,r.kt)("th",{parentName:"tr",align:null},"V2"),(0,r.kt)("th",{parentName:"tr",align:null},"V3"),(0,r.kt)("th",{parentName:"tr",align:null},"V4"),(0,r.kt)("th",{parentName:"tr",align:null},"V5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V2"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V3"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V4"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V5"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Note the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The connection from vertex ",(0,r.kt)("em",{parentName:"li"},"u")," to vertex ",(0,r.kt)("em",{parentName:"li"},"v")," is represented by a non-zero value at row ",(0,r.kt)("em",{parentName:"li"},"u")," and column ",(0,r.kt)("em",{parentName:"li"},"v"),"."),(0,r.kt)("li",{parentName:"ul"},"For example, there is an edge from V1 to V2, so there is a 1 entry at row V1 and column V2. Similarly, there is an edge from V4 to V3 and this is represented by a 1 at row V4 and column V3."),(0,r.kt)("li",{parentName:"ul"},"If the edge is bi-directional, we have a symmetry in the entry. For example, V1 is connected to V2 with a bi-directional edge. We see a non-zero entry at row V1 and column V2 as well as row V2 and column V1. Similarly between V2 and V3.")),(0,r.kt)("p",null,"The advantage of this representation is that it is simple and intuitive. The only thing is that it may end up in a sparse matrix where most of the entry are zeros and only a few non-zero entry. So this is good when the number of edges is large such as when every vertex is connected to every other vertices."),(0,r.kt)("h3",{id:"adjacency-list"},"Adjacency List"),(0,r.kt)("p",null,"Another way to represent a graph is to use ",(0,r.kt)("strong",{parentName:"p"},"adjacency list"),". This is more suitable when the number of edges is not large. We can use a dictionary for this purpose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"graph1 = {'V1': ['V2', 'V5'],\n          'V2': ['V1', 'V3', 'V4'],\n          'V3': ['V2'],\n          'V4': ['V1', 'V3'],\n          'V5': ['V4']}\n")),(0,r.kt)("p",null,"Notice that the keys are all the vertices in the graph and the value of the dictionary is a list of all the adjacent vertices connected to that particular vertex. For example, vertex V1 is connected to two other vertices V2 and V5. In fact, since there is no particular sequence for the adjacent vertices, you need not use a list and can use a dictionary instead as in the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"graph1 = {'V1': {'V2': 1, 'V5': 1},\n          'V2': {'V1': 1, 'V3': 1, 'V4': 1},\n          'V3': {'V2': 1 },\n          'V4': {'V1': 1, 'V3': 1},\n          'V5': {'V4': 1}}\n")),(0,r.kt)("p",null,"The value in the dictionary of the adjacent vertices are all 1 for this example, but they need not be. These values are called the ",(0,r.kt)("strong",{parentName:"p"},"weights")," or the ",(0,r.kt)("strong",{parentName:"p"},"costs"),". You can assign different weights. For example, in the graph for the MRT train, you can assign more cost to connection between Tampines Downtown Line to Pasir Ris or Simei East West Line if passanger has to go out from the MRT station from one line to the other line."),(0,r.kt)("h3",{id:"using-object-oriented-programming"},"Using Object Oriented Programming"),(0,r.kt)("p",null,"You have learnt Object Oriented programming in the previous week. We can apply this programming concept to represent a graph. We can create two classes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Vertex")," class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Graph")," class")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," class is similar to each entry in the dictionary. This class contains information on that particular vertex and who are the neighbouring or adjacent vertices connected this particular vertex. This class can also contains the weights of the connection between this vertex to its neighbours. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Graph")," class, on the other hand, contains the list of all the vertices in the graph. Each of this vertex is of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex"),". We can draw the UML diagram of these two classes as follows."),(0,r.kt)("mermaid",{value:"classDiagram\n    Graph *-- Vertex"}),(0,r.kt)("br",null),"The above UML diagram shows that a `Graph` is composed of one or more `Vertex` objects. This is another _composition_ relationship between two classes.",(0,r.kt)("p",null,"We can specify the attributes and methods for both classes as shown in the image below."),(0,r.kt)("mermaid",{value:"classDiagram\nclass Graph{\n    vertices\n    add_vertex(id)\n    get_vertex(id)\n    add_edge(start_id, end_id, weight)\n    get_neighbours(id)\n    get_num_vertices()\n}\nclass Vertex{\n    id\n    neighbours\n    add_neighbour(neighbour_vertex,weight)\n    get_neighbours()\n    get_weight(neighbour_vertex)\n}"}),(0,r.kt)("br",null),"The class `Graph` has an attribute called `vertices`. This attribute contains all the vertices in the graph where each vertex is of the type `Vertex`. This class has several methods like how to create or retrieve a `Vertex` object in the graph, add an edge between two vertices given their starting and ending `id`s. It may also have some other helper methods like to get all the neighbouring vertices of a given `Vertex` or to get the number of vertices in the graph. You can design some other methods but these are some of the common operations we may want to perform with a graph.",(0,r.kt)("p",null,"The class ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," has two attributes. The first one is the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or the label for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," object and the second one is its neighbouring ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," objects. The class has some basic operation such as to add a neighbouring ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," to the current ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," object, or to get all the neighbouring ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," objects of the current Vertex. Lastly, it also has a method to get the weight of the edge to the neighbouring ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," object. Similarly, you can think of some other operations of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertex")," object that may not be listed above."))}m.isMDXComponent=!0},8999:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Graphs-e656b2ae8fa3d87dcb0f8a291852e66b.png"},5371:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/MRT_Train-cd89106da00c927ac48ff3792b34ebc2.png"}}]);