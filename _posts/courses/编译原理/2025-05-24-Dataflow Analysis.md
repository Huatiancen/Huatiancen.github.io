---
layout: post
title: Dataflow Analysis
date: 2025-05-24 00:00 +0800
last_modified_at: 2025-06-24 00:00 +0800
tags: [编译原理]
toc:  true
---

## DFA Scheme

- 描述“数据流事实”在一个程序中的传递过程，程序通常包含无限数量的执行路径。
- 数据流事实（或值）是所有可能的具体程序行为的抽象，例如：
  - 一个变量 *v* 可能具有具体值集合 {1, 2, 4, 5, 6, ...} 中的一个值。
  - 在数据流分析中不可能枚举所有情况。
- 抽象：*v*=NAC；
  - NAC 是具体值集合 {1, 2, 4, 5, 6, ...} 的一个抽象值。

![image-20250520162333500](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250520162333500.png)

- 为了执行数据流分析，定义
- 每个语句/块的转移函数f
- 多条路径交汇点的合并函数∧
- 每个块的初始数据流事实集
- 数据流分析生成•IN[B]/OUT[B]包括程序点处的数据流事实
- 所得的数据流事实在程序执行期间始终为真

**The Worklist Algorithm**

- 对每个块B初始化它的in和out
- worklist是一个基本块的结合

![image-20250520163910178](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250520163910178.png)

**可达定义分析**

![image-20250525095736709](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250525095736709.png)

例子如下

![image-20250525100317105](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250525100317105.png)

**Available Expression**

- 一个表达式*x*+*y* 在一个节点是可用表达式如果
  - 从程序入口到节点的所有路径都计算了*x*+*y* 
  - 在到达点 *p* 之前的最后一次计算 *x*+*y* 之后，没有对变量 *x* 或 *y* 的后续赋值操作

![image-20250525101315415](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250525101315415.png)



![image-20250525103339022](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250525103339022.png)

活性变量分析

- 一个已死值
  - 变量被修改后，其先前的值（在寄存器中）是已死的
  - 我们需要从内存重新加载该值到寄存器
- 一个活值
  - 变量未被重新定义
  - 在加载到寄存器后，寄存器中的值是有效的
  - 不需要从内存重新加载该值

![image-20250525110000042](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250525110000042.png)

![image-20250525130614424](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250525130614424.png)

![image-20250525131213568](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250525131213568.png)

## Partial Redundancy

![image-20250526162430780](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250526162430780.png)

第一个是公用的表达式

第二个是循环里冗余的语句（这里面b + c值一直没变）

第三个部分冗余，循环的某些路径里有冗余





减少冗余

- 只有允许创建新的块或者复制代码才可能消除所有冗余

![image-20250526163437665](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250526163437665.png)

![image-20250526163452686](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250526163452686.png)

左侧是在另一个路径里也做一个相同的计算

右边是通过加一个新的块

但其实两者都是让t = b + c这个计算在其他路径也算了一次，这样每个path都做了这个计算，就可以进行消除冗余了![image-20250526163739121](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250526163739121.png)

这个是另一个方法，把计算了b + c和没计算的路径彻底分开来，从而优化计算了b + c的那条，从而保证每一条路径的正确性

The Lazy Code Motion Problem

- 任何可消除的冗余表达式计算都将被消除，无需代码复制。
- 优化后的程序不会执行原始程序中未包含的任何计算。
- 表达式将在最晚可能的时间点进行计算。
  - 步骤1：预期表达式（向后）
  - 步骤2：可用表达式（向前）
  - 步骤3：可推迟表达式（向前）
  - 步骤4：已用表达式（向后）

- 预期表达式的定义：表达式 *b*+*c* 在程序点 *p* 处是预期的，如果从点 *p* 出发的所有路径最终都会计算该表达式，并且计算该表达式时使用的 *b* 和 *c* 的值在该点是可用的。

![image-20250526165907525](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250526165907525.png)

B2不能预期是因为这里对c的值做了修改，所以这个点c的值不可用

B3可以是因为后续没有对b和c的值的修改，且后面一定会路过B7块，计算b + c

- 可用表达式：在程序的某个点 *p*，如果一个表达式（如 *b*+*c*）在到达 *p* 的所有路径上都被计算过，并且在最后一次计算后，表达式中涉及的变量（如 *b* 和 *c*）没有被重新赋值，则该表达式在 *p* 点是可用的。
  - 将图中的b+c都可以替换成t

![image-20250526200346905](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250526200346905.png)

- 可推迟表达式

![image-20250526200329579](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250526200329579.png)

 

这个B3能推迟到B4是因为这中间用不到b + c，同理B3不能推迟是因为B3要用

- 已用表达式

![image-20250526200611876](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250526200611876.png)

消除只使用一次的临时变量

## Constant Propagation

Each variable v -> UNDEF, Constant, NAC, denoted as m(v)

![image-20250521130223893](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250521130223893.png)

![image-20250521130551132](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250521130551132.png)

判断一个变量在程序某一点是否有常量

- 它具有无限的可能数据流值集合
- 它不是分配式的

无界性：每个变量可以对应无限个数的常量

单调性：

![image-20250521130951048](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250521130951048.png)

非分配式

![image-20250521131029013](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250521131029013.png)

意思是数据流分析中，操作顺序的不同会导致不同的结果，从而影响分析的精确度

![image-20250521131332262](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250521131332262.png)



## Sparse DFA

![image-20250526201143252](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250526201143252.png)

- 时间稀疏性：跳过不必要的控制流
- 空间稀疏性：在程序点保留必要的数据流事实