---
layout: post
title: Register Allocation
date: 2025-04-18 00:00 +0800
last_modified_at: 2025-06-24 00:00 +0800
tags: [编译原理]
toc:  true
---

## Local Register Allocation

寄存器存取速度大于内存，物理机寄存器数量有限，但是有无穷多个虚拟寄存器与其对应

我们需要实现

- 使用k个或更少的寄存器生成正确的代码
- 最小化加载、存储和容纳溢出值的空间
- 高效的寄存器分配（O(n)或O（nlogn））

溢出（spilling）

- 将一个值从寄存器存入内存
- 这个寄存器就可以供其他值使用
- 必要时我们可以将溢出值从内存中加载到寄存器中

maxlive：每个指令中同时活跃的值的最大数量

如果maxlive小于k 则分配很简单

否则 值必须溢出到内存

![image-20250505203002305](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505203002305.png)

![image-20250505202909979](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505202909979.png)

上图就给了一个例子，我们通过st和ld来将暂时用不到的值存入主存，再在下一次用它之前把它取出来

## Global Register Allocation

局部寄存器分配不能观测到各个基本块中的值的复用

全局分配一般用图着色方法

- 建立一个冲突/干扰图
- 为图找到一个k-着色，或者将代码改为一个可以着色的邻近问题
- 在几乎所有假设下都是NP完全问题，因此需要使用启发式方法

![image-20250505203813097](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505203813097.png)

将图的顶点映射到虚拟寄存器上，将颜色映射到物理寄存器上

从实时范围构建冲突图

给图着色，使没有两个邻居具有相同的颜色

如果图需要超过k种颜色-溢出

![image-20250505210714161](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505210714161.png)

- 顶点的度是可着色性的松散上限值
- 顶点的度<k时，总是k-可着色的
- 移除这些顶点并将其推入栈中，直到图为空为止（以后再着色）

![image-20250505211607696](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505211607696.png)

![image-20250505211628033](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505211628033.png)

![image-20250505211706121](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505211706121.png)

类似高中学的着色问题，就是通过一个栈，把值一个一个推进去，再一个一个push出来着色，着色时保证相邻颜色不同

Chaitin算法

当这个算法遇到每个顶点的度数都大于等于k时，需要选择一个值去溢出，把这个值放入溢出列表

如果溢出列表不为空，请插入溢出代码（st和reload），重建冲突图，并重试分配

如果溢出列表不为空，请插入溢出代码，重建冲突图，并重试分配。

![image-20250505212232862](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505212232862.png)

![image-20250505212246529](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505212246529.png)

此时向代码插入对于R2的st和reload，再重构这个冲突图

![image-20250505212330176](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505212330176.png)

后面的步骤就和之前一样了

Chatin-Briggs算法

与chatin算法相比，处理溢出方式不同

- 将顶点（溢出）推入栈。
- 当它被弹出时，我们可能有一个可用的颜色

比如下面这个例子

![image-20250505212719857](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505212719857.png)

![image-20250505212750838](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505212750838.png)

可以看到，这里其实不需要溢出list也能正常分配颜色

而对于下面的例子

![image-20250505212828396](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505212828396.png)

![image-20250505212841090](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505212841090.png)

在分配过程中遇到了无法分配，就把它溢出

对于溢出的选择而言，顶点度数越大，其溢出对于着色帮助越大

还有两种帮助着色的方法

![image-20250505213644431](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505213644431.png)

![image-20250505213813051](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250505213813051.png)