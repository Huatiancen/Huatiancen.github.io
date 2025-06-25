---
layout: post
title: Priority Queues
date: 2024-12-23 20:38 +0800
last_modified_at: 2024-12-30 14:51 +0800
tags: ['数据结构与算法']
toc: true
---

**Heap**(~~这下听懂了~~)

[TOC]

## Definition

**definition: A max heap(min Heap)**

• **is A complete binary tree**

• **The value in each node is greater(less)** **than or equal to those in its children(if** **any).**

## Insertion

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-12-23%20204253.png)

先加到最下面,再逐级调整

```java
private static Heap insert(Comparable x){
    int i = ++CurrentSize;
    while(i != 1 && x > heap[i / 2]){
        heap[i] = heap[i / 2];
        i /= 2;
    }
    heap[i] = x;
    return this;
}//这是i = 0位置不放元素的情况 放的话把i / 2改成 (i - 1) / 2即可
```



## Deletion

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-12-23%20204817.png)

其实原理也一样,就是把最上面的删了之后,把最下面的放上去,然后调整

```java
public static delete(){
    if(CurrentSize == 0){
        throw OutOfBounds();
    }
    Comparable y = heap[CurrentSize--];
    int i = 1;
 	int ci = 2;
    while(ci <= CurrentSize){
        if(ci < CurrentSize && heap[ci] < heap[ci + 1]){
            ci++;
        }
        if(y.compareTo(heap[ci]) >= 0){
            break;
        }
        heap[i] = heap[ci];
        i = ci;
        ci *= 2;
    }
    heap[i] = y;
    return this;
}
```



## Initialize

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-12-23%20205318.png)

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-12-29%20200203.png)

```java
private void buildHeap(){
    for(int i = currentSize / 2; i > 0; i--){
        prelocateDown(i);
    }
}
//自顶向下，逐层判断
private void percolateDown( int hole ){
    int child;
    Comparable tmp = array[ hole ];
    for( ; hole *2 <= currentSize; hole = child )
    { child = hole * 2;//左孩子
     if ( child != currentSize && array[ child + 1 ].compareTo( array[ child ] ) < 0 )
         child++;//先找到两个child中最大的那个
     if( array[child ].compareTo( tmp ) < 0 )
         array[ hole ] = array[ child ];
     else
         break;
    }
    array[hole] = tmp;
}
//这个前提是第一个节点存储在i = 1
```

## PercUp

```java
private static void percUp( Comparable [ ] a, int start ){  
    int j = start,  i = j / 2;
    Comparable temp = a [j];
    while (j > 1){ 
        if ( a[i] <= temp) 
            break;
        else {
            a[j] = a[i]; 
            j= i;  
            i = i / 2; 
        }
    }
    a[j] = temp;
}
```

