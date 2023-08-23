---
sidebar_position: 5
sidebar_class_name: hidden
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Week 5: Searching Data


<ChatBaseBubble/>

### Concept Map

```mermaid
flowchart TD
    PK((Prior Knowledge)) --> |how to| CE((check element))
    style PK color:red
    PK --> |how to| A((Access))
    PK --> |how to| T((Traverse))
    PK --> |how to| CT((Create))
    PK --> |on| DT((Dictionary))
    style DT color:dodgerblue
    A --> |has| K((key))
    A --> |has| V((value))
    CE --> |in a| L((List))
    style L color:dodgerblue
    T --> K
    T --> L
    CT --> DT
    DT --> |has| V
    DT --> K
    L --> |as| V
    W((Week 5<br>Graph and Graph Search)) --> |requires| PK
    W --> |learns| DS((Data Structure))
    style DS color:red
    DS --> |learns| G((Graph))
    G --> |represented using| AM((Adjacency Matrix))
    G --> |represented using| AL((Adjacency List))
    AL --> |implemented using| DT
    AL --> |uses| L
    AL --> |implemented using| OO((Object Oriented))
    G --> |creates| V((Vertex))
    G --> |has| D((direction))
    G --> |has| VS((Vertices))
    VS --> |is a| DT
    W --> |learns| ALGO((Algorithm))
    ALGO --> |implements| S2D((Search 2D))
    S2D --> |has a| GS((Graph Search))
    GS --> |is a child of| G
    VS --> |collection of| V
    V  --> |has| ID((id_))
    V --> |has| N((neighbours))
    N --> |collection of| V
    OO --> |defines| CL((Class))
    CL --> |for| V
    N --> |is a| DT
    N --> |for key| DV((destination Vertex))
    N --> |for value| WEIGHT((weight))
    D --> |has| EDGE((Edge))
    EDGE --> |has| WEIGHT
    N --> |describes| EDGE
    EDGE --> |connects two| V
    GS --> |creates| VSH((Vertex Search))
    VSH --> |is a child of| V
    VSH --> |has| CDFP((color,d,f,parent))
    UGS((UGraphSearch)) --> |is a child of| GS
    UGS --> |for| UG((Undirected Graph))
    UG --> |has| BD((bidirectional))
    BD --> EDGE
    SBFS((SearchBFS)) --> |uses| GS
    SBFS --> |is a child of| S2D
    SBFS --> |implements| BFS((Breadth-First Search))
    SBFS --> |uses| CDFP
    SBFS --> |uses| UGS
    SBFS --> |uses| CDFP
    SDFS((SearchDFS)) --> |implements| DFS((Depth-First Search))
    SDFS --> |uses| CDFP
    SDFS --> |is a child of| S2D
    TS((Topological Search)) --> |uses| SDFS
    DFS --> |application| TS
```

<!-- <ImageCard path={"https://drive.google.com/uc?export=view&id=1B91OlTA0Ss2HLDxf_PJcS9O4GZPDRI9K"} widthPercentage="100%"/> -->
