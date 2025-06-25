---
layout: post
title: List Stack Queue
date: 2024-12-17 18:13 +0800
last_modified_at: 2024-12-28 20:13 +0800
tags: ['数据结构与算法']
toc: true
---

[TOC]

线性表肯定有题目 单链表尤其高 栈和队列也高 双向链表好像不考 约瑟夫没考 多项式没考

排序必看

不考一个数组实现两个栈

## Linear List

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-12-15%20162942.png)

## Linked List

几个基本方法`delete insert`

可能带有表头有，表头不存放数据

```java
package DataStructures;
class ListNode{
    ListNode( object theElement){ 
        this( theElement, null);
    }
    ListNode( object theElement, ListNode n){ 
        element = theElement;
        next = n;
    }
    object element;
    ListNode next;
}

public class LinkedListItr{ 
    LinkedListItr( ListNode theNode){ 
        current = theNode;
    }
    public boolean isPastEnd( ){ 
        return current = = null;
    }
    public object retrieve( ){ 
        return isPastEnd( ) ? Null : current.element;
    }
    public void advance( ){
        if( ! isPastEnd( ) ){
            current = current.next;
        }
    }
    ListNode current;
}

public class LinkedList{ 
    public LinkedList( )
    { header = new ListNode( null ) ; }
    public boolean isEmpty( )
    { return header.next = = null ; }
    public void makeEmpty( )
    { header.next = null; }
    public LinkedListItr zeroth( )
    { return new LinkedListItr( header ) ; }
    public LinkedListItr first( )
    { return new LinkedListItr( header.next ) ; }
    public LinkedListItr find( object x )
    public void remove( object x )
    public LinkedListItr findPrevious( object x )
    public void insert( object x, LinkedListItr p )
    private ListNode header;
}
```

## Stack

LIFO

## Queue

杨辉三角
