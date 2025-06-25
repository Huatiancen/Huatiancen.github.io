---
layout: post
title: Disjoint Set
date: 2024-12-23 20:55 +0800
last_modified_at: 2024-12-25 21:14 +0800
tags: ['数据结构与算法']
toc: true
---

[TOC]

Union-Find Set~~(这下听懂了)~~

## 基本

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-12-23%20210015.png)

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-12-25%20202808.png)

一个类似树的物理层实现,一个类的节点通过类似链表一样的link在一起

数组有效的是1~n,-1/0表示空

```java
void Initialize(int n){
    parent = new int [n + 1];
    for(int i = 1; i <= n; i++){
        parent[i] = 0;
    }
}

int find(int e){
    while(parent[e]){
        e = parent[e];
    }
    return e;
} 

void Union(int i, int j){
    parent[j] = i;
}
```

## 优化

### Weight rule

**If the number of nodes in tree i is** **less than the number in tree j, then make j the** **parent of i; otherwise,make i the parent of j.**

一言以蔽之,谁孩子多谁当爹

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-12-25%20204357.png)

如果是root的话，parent就用来放他的整个树的节点个数

相对应的需要一个新的root数组来存放是否是root

```java
void Initialize(int n){
    root = new bool[n + 1];
    parent = new int[n + 1];
    for(int i = 1; i < n; i++){
        root[i] = true;
        parent[i] = 1;
    }
}

int Find(int e){
    while(!bool[e]){
        e = parent[e];
    }
    return e;
}

void Union(int i, int j){
    if(parent[i] < parent[j]){
        parent[j] += parent[i];
        parent[i] = j;
        root[i] = false;
    }
    else{
        parent[i] += parent[j];
        root[j] = false;
        parent[j] = i;
    }
}
```



### Height rule

**If the height of tree i is less than** **that of tree j, then make j the parent of i;** **otherwise,make i the parent of j.**

一言以蔽之,谁长谁当爹

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-12-25%20210133.png)

root的parent放-height-1

```java
void Initialize(int n){
    parent = new int [n + 1];
    for(int i = 1; i <= n; i++){
        parent[i] = -1;
    }
}

int Find(int e){
    while(!parent[e]){
        e = parent[e];
    }
    return e;
}

void Union(int i, int j){
    if(parent[i] < parent[j]){
        parent[j] = i;
    }
    else if(parent[i] == parent[j]){
        parent[i]--;
        parent[j] = i;
    }//特别注意
    else{
        parent[i] = j;
    }
}
```



### Improvement

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-12-25%20210930.png)

```java
int Find(int e){
    int j = e;
    while(!root[j]){
        j = parent[j];
    }
    int f = e;
    while(f != j){
        int pf = parent[f];
        parent[f] = j;
        f = pf;
    }
    return j;
}//非递归实现

public int find( int x ){ 
    if( s[ x ] < 0 )
        return x;
    else
        return s[ x ] = find( s[ x ] );
}//递归实现
```

