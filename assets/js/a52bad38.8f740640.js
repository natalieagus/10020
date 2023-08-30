"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[6973],{4204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(7462),i=(t(7294),t(3905)),a=(t(1694),t(3707),t(6533),t(505));const r={sidebar_position:6,sidebar_class_name:"hidden"},c="Week 6: Inheritance and Object-Oriented Design",o={unversionedId:"inheritance",id:"inheritance",title:"Week 6: Inheritance and Object-Oriented Design",description:"Concept Map",source:"@site/learning-objectives/06-inheritance.md",sourceDirName:".",slug:"/inheritance",permalink:"/2023/learning-objectives/inheritance",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"Week 5: Searching Data",permalink:"/2023/learning-objectives/searching-data"},next:{title:"Week 8: Visualizing and Processing Data",permalink:"/2023/learning-objectives/vis-proc"}},l={},d=[{value:"Concept Map",id:"concept-map",level:3}],x={toc:d},p="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,s.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"week-6-inheritance-and-object-oriented-design"},"Week 6: Inheritance and Object-Oriented Design"),(0,i.kt)(a.Z,{mdxType:"ChatBaseBubble"}),(0,i.kt)("h3",{id:"concept-map"},"Concept Map"),(0,i.kt)("mermaid",{value:"flowchart TD\n    W((Week 6<br>Inheritance and<br>Abstract Base Class)) --\x3e |learns| OO((Object Oriented<br>Programming))\n    style OO color:red\n    W((Week 6<br>Inheritance and<br>Abstract Base Class)) --\x3e |learns| DS((Data Structure))\n    style DS color:red\n    OO --\x3e |learns| INH((Inheritance))\n    style INH color:blue\n    OO --\x3e |learns| ABC((Abstract Base<br>Class))\n    style ABC color:blue\n    INH --\x3e |requires| PK((Prior Knowledge))\n    INH --\x3e |defines| CC((Child Class))\n    PK --\x3e |defines| CLA((Class))\n    PK --\x3e |instantiates| OBJ(Object)\n    CLA --\x3e |defines| PRO((Property))\n    PRO --\x3e |encapsulates| ATTR\n    CLA --\x3e |defines| ATTR((Attribute))\n    CLA --\x3e |defines| METH((Methods))\n    OBJ --\x3e CLA\n    OBJ --\x3e |access| ATTR\n    OBJ --\x3e |calls| METH\n    ABC --\x3e |uses| PABC((Python's<br>Abstract Base<br>Class))\n    ABC --\x3e |enforces implementation in| CC\n    CC --\x3e |inherits from| PABC\n    CC --\x3e |has| METH\n    CC --\x3e |has| ATTR\n    CC --\x3e |can use| SUP((super))\n    CC --\x3e |can| OVE((override))\n    SUP --\x3e |to access| PC((parent class))\n    SUP --\x3e |to access| METH\n    OVE --\x3e METH\n    ABCI((abc.Iterable)) --\x3e |is| PABC\n    ABCI --\x3e |is| ABC\n    MyAbstractList --\x3e |inherits from| ABCI\n    MAL --\x3e |is| ABC\n    DS --\x3e |learns| DEQ((Deque))\n    DEQ --\x3e |inherits from| QUE(Queue)\n    QUE --\x3e |is| PC\n    DS --\x3e |learns| ADT((Abstract Data<br>Type))\n    ADT --\x3e |implements| LIST((List))\n    ADT --\x3e |implements| BO((Basic Operations))\n    LIST --\x3e |implements| MyArrayList\n    LIST --\x3e |implements| MyLinkedList\n    MyArrayList --\x3e |inherits from| MyAbstractList\n    MyArrayList --\x3e |implemented using| FSA((Fixed Size Array))\n    MyLinkedList --\x3e |inherits from| MyAbstractList\n    MyLinkedList --\x3e |implemented using| LL((Linked List))\n    LL --\x3e |implements| BO\n    FSA --\x3e |implements| BO\n    BO --\x3e |has| INS((insert))\n    BO --\x3e |has| REM((remove))\n    BO --\x3e |has| ADD((add))\n    BO --\x3e |for| ELE((elements))\n    LIST --\x3e |has| ELE\n    LIST --\x3e |has| BO\n    INS --\x3e ELE\n    REM --\x3e ELE\n    ADD --\x3e ELE\n"}),(0,i.kt)("p",null,"See below if you need to zoom in."),(0,i.kt)("iframe",{src:"https://sutdapac-my.sharepoint.com/personal/oka_kurniawan_sutd_edu_sg/_layouts/15/embed.aspx?UniqueId=bbf1ab08-5a84-4ee8-b5e9-7e1c67ee57b5",width:"640",height:"360",frameborder:"0",scrolling:"no",allowfullscreen:!0,title:"DDW Concept Map-Week 6.drawio.png"}))}m.isMDXComponent=!0}}]);