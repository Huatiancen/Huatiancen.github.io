---
layout: post
title: inter-procedural Analysis
date: 2025-05-28 00:00 +0800
last_modified_at: 2025-06-24 00:00 +0800
tags: [编译原理]
toc:  true
---

## Basics

-  节点——函数
-  边——函数间的调用关系
-  边标签——调用位置

![image-20250527212607759](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527212607759.png)

![image-20250527212857425](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527212857425.png)

Context-Sensitive DFA

- 基于克隆的跨程序DFA

![image-20250527231816942](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527231816942.png)

每个调用上下文指向一个不同的克隆，因此不会存在混淆的情况

但是不好处理递归

- 基于摘要的跨程序DFA
  - 分成两个部分

一个自底向上的阶段 为每个过程计算出一个总结该过程的效果的传递函数

![image-20250527233411298](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527233411298.png)

一个自顶向下的阶段 传播和调用者有关的信息 计算出被调用者的结果

![image-20250527233638740](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527233638740.png)

## DFA as Graph Reachability

可能未初始化的定量

![image-20250527234345144](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527234345144.png)

这个可能未初始化变量的分析过程和常量传播不太一样



**IFDS as Graph Reachability**

![image-20250528130515019](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250528130515019.png)

上图就是一个关于节点转移规则的示意

![image-20250528130842262](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250528130842262.png)

![image-20250528131230496](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250528131230496.png)

整个过程就是

1. 把0连接起来
2. 某个变量未被涉及则自己连接自己，表示未变化（比如右上角z连接z）
3. 某个变量被定义但是未被初始化，则0连接它（如右上角x、y）
4. 某个变量被外部赋值，则不连接（比如read()）
5. z被y赋值，则数据流从y传到z，y连接z（右下角）

![image-20250528132412023](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250528132412023.png)

涉及函数调用的则如上图所示

**CFL Reachability**

![image-20250528132834480](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250528132834480.png)

就是给边一个标签，通过这个检验文法

**Tabulation Algorithm**

![image-20250528133743798](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250528133743798.png)

**Demand-Driven CFL-Reachability**

![image-20250528133904384](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250528133904384.png)

**Indexing Conventional Reachability**

节点标签的含义

- **Label: [low, high]**：
  - **low**：表示子树中所有节点的最小编号。
  - **high**：表示节点的后序遍历值，即离开该节点时的顺序

- **A → B ⇔ Label_B ⊆ Label_A**：
  - 如果节点 B 的标签区间是节点 A 标签区间的子集，则表示从 A 可以到达 B。

![image-20250528135414853](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250528135414853.png)

![image-20250528140059157](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250528140059157.png)

![image-20250528141517969](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250528141517969.png)