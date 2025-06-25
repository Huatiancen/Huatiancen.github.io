---
layout: post
title: Recursion
date: 2024-12-28 16:32 +0800
last_modified_at: 2024-12-30 14:50 +0800
tags: ['数据结构与算法']
toc: true
---

[TOC]

第一章从递归开始看就行

汉诺塔可能选择题

问答题写细

不考泛型

考O，不考小o，看看分治

## 哈诺塔

![](C:\Desktop\Huatiancen\Study\数据结构与算法\img\屏幕截图 2024-12-28 163312.png)

汉诺塔问题 就是搞一个很抽象的过程，每次通过把除了最底下的移到辅助塔上，再把最下面的移到目的塔，从而形成一个递归.

```java
public class TowersOfHanoi {
    public static void main(String[ ] args) {
        System.out.println( “Enter number of disks” );
        int n = MyInput.readInt( );
        System.out.println( “The move are:”);
        moveDISKs(n, ‘A’, ‘B’, ‘C’);
    } 
    public static void moveDISKs(int n, char fromTower, char 
                                 toTower, char auxTower) {
        if (n == 1)
            System.out.prinln( “move disk “ + n + “from “+
                              fromTower +” to” + toTower);
        else {
            moveDISKs(n-1, fromTower, auxTower, toTower);
            System.out.println( “Move disk “ + n + “from “ + 
                               fromTower + “ to “ + toTower );
            moveDISKs(n-1, auxTower, toTower, fromTower);
        }
    } 
}
```

## 分治

![](C:\Desktop\Huatiancen\Study\数据结构与算法\img\屏幕截图 2024-12-28 165450.png)

先分再治 庞大的问题分解成若干小问题

## 一些数学公式

*S*=*n*(*n*+1)(2*n*+1)/6 i平方求和

*S*=(*n*(*n*+1)/2)^2^ i三次方求和
