---
layout: post
title: Instruction Scheduling
date: 2025-05-27 00:00 +0800
last_modified_at: 2025-06-24 00:00 +0800
tags: [编译原理]
toc:  true
---

- 依靠软件管理其并发性的机器称为VLIW机器
  - 指令字同一时钟周期内发送多条指令的编码
- 依靠硬件管理其并发性的机器称为超标量机器
  - 自动检测指令之间的依赖关系，在指令的运算分量变得可用时发送他们

![image-20250527164447141](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/202506241428431.png)

上图是一个超标量机器的示例，但还不够优化

![image-20250527164808112](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/202506241428474.png)

改变指令顺序以及对应寄存器

第一个图的指令并行性不如下图

## Scheduling Constraints

性能与顺序有关（上面两张图就是例子）

- 数据依赖

  - 真依赖 写之后再读

  - 反依赖 读之后再写

  - 输出依赖 写之后再写

反依赖和输出依赖是存储相关的依赖，可以通过不同内存位置存放不同的值来消除这些依赖关系（上图就有对这两种的处理示例）

## Basic Block Scheduling

依赖图

- 结点：基本块中机器指令的运算
- 有向边：运算之间的数据依赖约束

![image-20250527170536619](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/202506241428467.png)

但是注意到，上图中存在假依赖未被连接，我们需要消除假依赖

![image-20250527170749839](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/202506241428482.png)

![image-20250527170850895](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/202506241428493.png)

这里圆球里的数字表示对应指令需要的时钟周期

框代表深度



列表调度

- 检查每个时钟周期
- 在指令准备就绪时安排指令
- 当可以安排多个指令时，检查它们的优先级
  - 最长延迟路径（最大深度）
  - 使用最多资源
  - ........

根据带优先级的拓扑排序去排指令执行的顺序

![image-20250527171823692](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/202506241428524.png)

对应上面的依赖图，带优先级的拓扑排序顺序排的

## Global Code Scheduling

![image-20250527191341358](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/202506241428085.png)

向下的代码移动

![image-20250527192437358](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/202506241428119.png)

也就是说如果src不支配dst，就需要在不经过src的路径加一个dst的拷贝，从而防止出错

![image-20250527192538699](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/202506241428211.png)

如果dst不反向支配src，那我需要在不经过dst的路径插入我移动的指令



向上的代码移动

![image-20250527192936255](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/202506241428229.png)

dst不支配src时，需要在不经过dst的路径加移动的指令

![image-20250527193027038](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/202506241428270.png)

那其实如果无害的，就没事，否则是非法移动



调度完一个EBB路径之后，移除他，然后调度下一个直至全都调度完

![image-20250527194134325](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/202506241428296.png)

这里undo也可能出现问题，需要复制一个块



跟踪调度

感觉不重要，就两页

## Software Pipelining

软件流水线化

通过展开循环里的指令，去做几次循环中指令的并行

至于软件流水线化，ppt上让参考课本

是不断运行指令对，不断有老的退出，新的加入，直至全部运行结束