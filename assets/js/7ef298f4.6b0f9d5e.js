"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[734],{35:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>h,metadata:()=>d,toc:()=>c});var i=s(7462),a=(s(7294),s(3905)),r=(s(1694),s(3707)),n=s(6533),o=s(505);const h={sidebar_position:3},l="Depth First Search",d={unversionedId:"graphs/dfs",id:"graphs/dfs",title:"Depth First Search",description:"Depth First Search is a graph traversal algorithm that explores as far as possible along each branch before backtracking.",source:"@site/docs/05-graphs/dfs.md",sourceDirName:"05-graphs",slug:"/graphs/dfs",permalink:"/2023/notes/graphs/dfs",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Breadth First Search",permalink:"/2023/notes/graphs/bfs"},next:{title:"Week 6: Inheritance and Object-Oriented Design",permalink:"/2023/notes/category/week-6-inheritance-and-object-oriented-design"}},p={},c=[{value:"Goals",id:"goals",level:3},{value:"Depth-First Search",id:"depth-first-search-1",level:2},{value:"(C)ases",id:"cases",level:3},{value:"(D)esign of Algorithm",id:"design-of-algorithm",level:3},{value:"Topological Sort",id:"topological-sort",level:2}],g={toc:c},f="wrapper";function m(e){let{components:t,...h}=e;return(0,a.kt)(f,(0,i.Z)({},g,h,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"depth-first-search"},"Depth First Search"),(0,a.kt)(o.Z,{mdxType:"ChatBaseBubble"}),(0,a.kt)("p",null,"Depth First Search is a graph traversal algorithm that explores as far as possible along each branch before backtracking."),(0,a.kt)("h3",{id:"goals"},"Goals"),(0,a.kt)("p",null,"By the end of this lesson, you should be able to explain and implement ",(0,a.kt)("strong",{parentName:"p"},"depth")," first search."),(0,a.kt)("admonition",{title:"Keywords",type:"keyword"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"depth first search"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"topological search"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"colour"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"parent vertex"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"start/finish time"))),(0,a.kt)("h2",{id:"depth-first-search-1"},"Depth-First Search"),(0,a.kt)("p",null,"There is another kind of search that can be done on a graph. This is called ",(0,a.kt)("strong",{parentName:"p"},"depth-first")," search (DFS). As the name implies, this algorithm explores the neighbouring vertices in a depth-wise manner. DFS is used in topological sorting, scheduling problems, cycle detection in graph and solving puzzles with only one solution such as finding a path in a maze or solving a sudoku puzzle. Let's illustrate this with the same graph as we have seen previously."),(0,a.kt)("h3",{id:"cases"},"(C)ases"),(0,a.kt)(n.Z,{path:s(256).Z,widthPercentage:"20%",mdxType:"ImageCard"}),(0,a.kt)("p",null,"In depth-first search, we go down the tree before moving to the next siblings. For example, as we start from A, we look into its neighbouring vertices. So vertex A has two neighbours, i.e. B and D. The depth-first search algorithm will visit one of them, say vertex B. After it visits B, it will explore one of the neighbours of B instead of visiting D. This is illustrated below."),(0,a.kt)(n.Z,{path:s(3906).Z,widthPercentage:"40%",mdxType:"ImageCard"}),(0,a.kt)("p",null,"In the figures above, every time we visit a vertex, we put a timestamp on that vertex called ",(0,a.kt)("strong",{parentName:"p"},"discovery time"),". Once we finish visiting all the neighbours of that vertex, we put another timestamp called ",(0,a.kt)("strong",{parentName:"p"},"finishing time"),". For example, vertex A has a discovery time 1 and finishing time 12 as indicated by 1/12 in the figure."),(0,a.kt)("p",null,"We also labelled the edges with two different kind of symbols. The solid line edges are called ",(0,a.kt)("strong",{parentName:"p"},"tree edges"),". These are edges in the depth-first forest. An edge (u, v) is a tree edge if v was first discovered by exploring edge (u, v). For example, the edge (A, B) is a tree edge since B is first discovered by exploring the edge (A, B). On the other hand the edge (A, D) is not a tree edge since D was not first discovered by exploring edge (A, D). Rather, D was first discovered by exploring the edge (C, D)."),(0,a.kt)("p",null,"This brings us to the other kind of edges discovered by depth-first search. The dashed line edges are called ",(0,a.kt)("strong",{parentName:"p"},"back edges"),". These are those edges connected a vertex u to an ancestor v in a depth-first tree. For example, A is an ancestor of D. We can see that because we explore D through A - B - C - D. So the edge connecting D to A is a back edge since it connects D to one of its ancestor. Similarly with the edge (C, F). The depth-first forest is shown below."),(0,a.kt)(n.Z,{path:s(1573).Z,widthPercentage:"20%",mdxType:"ImageCard"}),(0,a.kt)("h3",{id:"design-of-algorithm"},"(D)esign of Algorithm"),(0,a.kt)("p",null,"Now we can try to write the steps to do depth-first search. We will write the steps using two functions. The first one is called DFS as shown below."),(0,a.kt)(r.Z,{title:"Show Pseudocode",mdxType:"DeepDive"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DFS\nInput:\n- G: graph\nOutput:\n- G: graph with the following attributes marked\n  - colour\n  - discovery time\n  - finishing time\n  - parent\nSteps:\n1. Initialize each vertex as follows:\n  1.1 set colour to white\n  1.2 set parent to NILL\n2. set time to 0\n3. for each vertex in the graph G\n  3.1 if the vertex's colour is white, do:\n    3.1.1 dfs-visit(G, u)\n"))),(0,a.kt)("p",null,"The above algorithm simply initialize the vertices and go through every vertex to perform the second function DFS-VISIT."),(0,a.kt)(r.Z,{title:"Show Pseudocode",mdxType:"DeepDive"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DFS-Visit\nInput:\n- G: graph\n- u: vertex to visit\nOutput:\n- G: graph with the following attributes marked\n  - colour\n  - discovery time\n  - finishing time\n  - parent\nSteps:\n1. increase time by 1\n2. set current time to be the discovery time for u\n3. set u's colour to gray\n4. for each vertex in u's neighbours, do:\n  4.1 if the vertex's colour is white, do:\n    4.1.1 set u as the parent of the vertex\n    4.1.2 call dfs-visit(G, the current vertex)\n5. set u's colour to black\n6. increase time by 1\n7. set current time to be the finishing time\n"))),(0,a.kt)("p",null,"This function simply set the discovery time for the visited vertex u and begins to visit all the neighbouring vertices of u. However, it only calls DFS-VISIT if the neighbouring vertices are white, which means these vertices have not been visited yet. Once it finishes visiting all the neighbouring vertices, it marks the vertex u to be black and set the finishing time."),(0,a.kt)("h2",{id:"topological-sort"},"Topological Sort"),(0,a.kt)("p",null,"One application of depth-first search algorithm is to perform a topological sort. For example, if we have list of task with dependencies, we can sort which task should be performed first. The figure below gives an example of this dependencies tasks"),(0,a.kt)(n.Z,{path:s(2240).Z,widthPercentage:"70%",mdxType:"ImageCard"}),(0,a.kt)("p",null,"The figure above shows a directed graph of dependencies between different tasks. For example, the task wearing a pant must be done only after the task of wearing underpant and wearing a shirt. We can use the finishing time of DFS to determine the sequence of tasks."),(0,a.kt)("p",null,"Let's try to perform DFS for the above graph. The discovery time and the finishing time for each task is shown in the figure below."),(0,a.kt)(n.Z,{path:s(1790).Z,widthPercentage:"70%",mdxType:"ImageCard"}),(0,a.kt)("p",null,'In the process of DFS, it somehow starts with "undershirt" and traverse to all the children vertices in the tree, i.e. "pants", "wallets", "belt", and then "shoes". After this, it creates another tree starting from "socks", and then another tree starting from "watch", and finally another tree starting from "underpant". The depth-first forest looks like the figure below.'),(0,a.kt)(n.Z,{path:s(933).Z,widthPercentage:"70%",mdxType:"ImageCard"}),(0,a.kt)("p",null,"We can re-order the tasks by its finishing time from the largest to the smallest as shown in the figure below."),(0,a.kt)(n.Z,{path:s(3306).Z,widthPercentage:"100%",mdxType:"ImageCard"}),(0,a.kt)("p",null,'The sequence above is based on its finishing time from the largest to the smallest. The first three are independent and their sequence can be interchanged, but subsequently, "shirt" must be done only after "undershirt" task. This sequence may also depends on which vertex the search encounters first. With this in mind, we can write the topological sort steps as follows.'),(0,a.kt)(r.Z,{title:"Show Pseudocode",mdxType:"DeepDive"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Topological-Sort\nInput:\n- G: graph\nOutput:\n- list of sorted vertices\nSteps:\n1. call DFS(G) to compute the finishing time for each vertex in G\n2. sort the vertices based on its finishing time from largest to smallest\n3. return a list of sorted vertices\n"))))}m.isMDXComponent=!0},256:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/bfs_graph_example-a3c01246bcad91ad23506c95cad9316f.jpg"},933:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/depth_first_forest-ce4da2fc1d5d207cdb5b2d48b31ed294.jpg"},1573:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/dfs_forest-c06883b5422409b295ce3516e28baae7.jpg"},3906:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/dfs_graph-9dc97f1d709f160e242b6a123999ae5e.jpg"},3306:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/sorted_graph-bff681b2d78404d2b607a7e53ee33bf1.jpg"},1790:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/topological_sort_finishingtime-2e4346e400678429465951a972e41c7a.jpg"},2240:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/topological_sort_graph-ef9638824d3354c02084923254f0d763.jpg"}}]);