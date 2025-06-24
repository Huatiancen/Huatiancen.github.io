---
layout: post
title: Target Code Generation
date: 2025-04-04 00:00 +0800
last_modified_at: 2025-04-10 00:00 +0800
tags: [编译原理]
toc:  true
---

## Target Code Generation

**Target Machine**

- 每个字节对应一个地址
- n个寄存器 每个有4个字节
- 有Load/Store/Calculation/Jump......操作

**寻址模式 Addressing Modes**

- LD R1, a(R2)           R1取a + (R2)对应地址中储存的值
- LD R1, *R2             R1取(R2)对应地址中储存的值
- LD R1, #100           R1值为100 

**Memory Structure**

![image-20250404103111110](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404103111110.png)

- **代码/文本区**：存储程序指令。
- **全局/静态区**：存储全局变量和静态变量。
- **堆区**：用于动态内存分配。
- **空闲区**：未使用的内存。
- **栈区**：用于函数调用和局部变量。

**Text Memory**中存储程序指令，其中在跳转指令中，跳转的目的地址会被转化为一个内存地址（如#1024）

要点

- 代码和全局代码的内存位置由编译器决定的！
- 其他变量的内存位置，例如，本地变量，都是由编译器生成的代码控制的，并存储在堆或堆栈中！

**Stack Memory**

- Before call
  - 如果该过程使用了一些寄存器，请将它们推送到栈中
  - 将（记录）返回地址和参数推送到栈
  - 跳转到被调用者的代码
- During a call
  - 为局部变量分配内存空间；以及基于局部变量的行动
- After a call
  - 弹出帧
  - 根据堆栈中的返回地址返回给调用者 
  - 恢复数据；如果函数有返回值，则获取返回值

![image-20250404104612146](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404104612146.png)

![image-20250404111037383](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404111037383.png)

![image-20250404111124253](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404111124253.png)

![image-20250404111824276](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404111824276.png)

通过return的跳转无法进行长跳转（跳过中间的栈），但是异常可以

![image-20250404112158245](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404112158245.png)

抛出异常后，异常会向上传播，寻找能够处理它的 `catch` 块

## In-Block Optimization 块内优化

![image-20250404142228388](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404142228388.png)

就是定义一系列指令选择的规则，然后按照规则去搞就行了

其有效性取决于定义的规则

Local Common Sub-Expression 局部公共子表达式

![image-20250404142835607](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404142835607.png)

![image-20250404142857629](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404142857629.png)

![image-20250404143402780](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404143402780.png)

## Peephole Optimization 窥孔优化

- 移动一个小窗口去扫描代码，对小窗口内的进行优化
- 处理IR或者target code
- cross-block optimization

![image-20250404143910221](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404143910221.png)

![image-20250404143932303](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404143932303.png)

![image-20250404144017679](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404144017679.png)

上面三个都是优化的规则示例，我们可以定义多种规则来进行优化

优化的过程：

![image-20250404144144529](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404144144529.png)

![image-20250404144205764](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404144205764.png)

![image-20250404144233350](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404144233350.png)

![image-20250404144247558](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404144247558.png)

![image-20250404144346972](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404144346972.png)

![image-20250404144402551](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404144402551.png)

以此类推，直至：

![image-20250404144437111](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250404144437111.png)