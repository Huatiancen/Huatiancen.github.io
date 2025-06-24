---
layout: post
title: Symbolic Execution
date: 2025-05-26 00:00 +0800
last_modified_at: 2025-06-24 00:00 +0800
tags: [编译原理]
toc:  true
---

## Symbolic Execution

符号执行是一种经典的路径敏感分析方法，它枚举并分析程序的每一条路径。

- 用于发现错误；
- 用于软件测试；

![image-20250527201608286](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527201608286.png)

程序路径转化成路径约束

![image-20250527202807311](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527202807311.png)

右下角这个check是判断这个assert何时fail的

![image-20250527203259587](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527203259587.png)

还有这种路径可能

需要分析那么多路径，太麻烦了，且约束求解很难搞

优化

- 路径合并

![image-20250527205659131](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527205659131.png)

- 循环的导入

![image-20250527210142590](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527210142590.png)

但是实际上不是每个都适用，比如在while里再放一层ifelse就失效了

- 并发执行

![image-20250527210332439](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527210332439.png)

- 推测执行

![image-20250527210718671](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527210718671.png)

## Satisfiability

Propositional Logic(PL)

![image-20250527211619056](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/image-20250527211619056.png)

- 在PL中，公式F的解是指映射I，该映射将每个变量映射为⊤或⊥
- 若存在映射I：I⊨F，则PL中的公式F是可满足的
- 若对于所有映射I：I⊨F，公式F都是有效的。