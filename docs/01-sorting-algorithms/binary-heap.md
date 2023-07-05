---
sidebar_position: 3
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';

# Binary Heap

Binary heap is a complete binary tree-based data structure that satisfies the heap property, where the key of each parent node is either greater than or equal to (in a max heap) or less than or equal to (in a min heap) the keys of its child nodes.

### Goals

By the end of this lesson, you should be able to write functions to do **binary heap** data structure operation.

:::keyword Keywords
`tree`, `binary tree`, `root`, `heap`, `heap property`, `heapify`, `node`, `leaf`, `parent node`, `child node`
:::

## Introduction

Previously, we discussed two sorting algorithms called [Bubble Sort](/notes/sorting-algorithms/bubble-sort) and [Insertion Sort](/notes/sorting-algorithms/bubble-sort). In this section we will apply our programming skills to investigate another sorting algorithm called the Heapsort. We will then compare the performance of Heapsort with the previous sorting algorithms. We will discuss some notations on how to analyze these performance.

:::tip Why so many sorting algorithms?
One reason why we introduce different sorting algorithms is to show you that there are many ways to solve the same problems. At the same time, these different ways may have different performances. After we introduce binary heap and heapsort algorithm, we will begin to introduce you how to analyze these different algorithms in terms of computation time. You will notice that Heapsort algorithm is a much better sorting algorithm as compared to Bubble sort and Insertion sort algorithms.
:::
