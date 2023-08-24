---
sidebar_position: 3
sidebar_class_name: hidden
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Week 3: Divide and Conquer



<ChatBaseBubble/>

### Concept Map

```mermaid
flowchart TD
    A((Week 3<br>Recursion and Mergesort)) --> |learns| ALGO((Algorithm))
    ALGO --> |learns| C((Complexity))
    ALGO --> |learns| R((Recursion))
    ALGO --> |learns| S((Sorting))
    C  --> |computes| CT((Computational Time))
    R --> |may use| HF((Helper Function))
    R --> |has| CS((cases))
    S --> |learns| MS((Mergesort))
    CT --> |draw| RT((Recursive Tree))
    CT --> |is| EXP((exponential))
    EXP --> |for| TOH
    CT --> |is| LL((Log Linear))
    MS --> |uses| R
    CS --> |uses| IE((if-else))
    CS --> |has| BASE((base))
    CS --> |has| REC((recursive))
    RT --> |for| TOH((Tower of Hanoi))
    RT --> |for| MS
    LL --> |for| MS
    TOH --> |uses| R
    CT --> |for| R
```

See below if you need to zoom in.

<iframe src="https://sutdapac-my.sharepoint.com/personal/oka_kurniawan_sutd_edu_sg/_layouts/15/embed.aspx?UniqueId=ea2493e1-e9ca-4f2e-892b-fe82e7b2dec4" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="DDW Concept Map-Week 3.drawio.png"></iframe>

