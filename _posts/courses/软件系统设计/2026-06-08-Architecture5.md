---
layout: post
title: 'Architecture5'
date: 2026-06-08 00:23 +0800
last_modified_at: 2026-06-16 00:23 +0800
tags: ['软件系统设计']
toc: true
---
# Designing Software Architectures

## Architectural Drivers and Design Strategies

整体总结

- 架构设计从输入开始，提炼出 architectural drivers，尤其是 ASRs；然后根据系统类型和约束，采用分解、面向 ASR 设计、生成并测试等策略；在这个过程中不断做 design decisions；而做决策时不要重复造轮子，要复用 reference architectures、deployment patterns、architectural/design patterns、tactics、frameworks 等 design concepts。对于 Greenfield system，这些 design concepts 的选择还可以按照 selection roadmap 分阶段进行：第一轮先建立整体系统结构，第二轮识别支撑主要功能的结构，后续迭代再细化已有结构以满足剩余 drivers，最终形成满足关键需求的架构方案

### Software Architectural Activities

![截屏2026-05-31 16.39.27](https://hua-tian-cen.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2026-05-31%2016.39.27.png)

架构设计活动的输入

- 设计目的
- 主要功能
- 质量属性
- 约束
- 架构关注点

### Architectural drivers

对做什么和为什么做这类问题进行分类

- 需求中影响架构形态的部分
  - 功能需求
  - 质量属性
  - 约束
- 正在设计的系统的类型
- 设计目标
- 关注点

这些都是设计过程的输入

- Functionnal drivers
  - 涉及主要功能即直接支持业务目标的功能
- Quality attribute drivers
  - 用户和开发者关心的、可度量的系统特征

系统类型

- Greenfield system
  - in novel domains 在新领域
    - 领域认知较少，创新性更强
  - in mature domains 在成熟领域
    - 领域认知较充分，创新性弱
- Brownfield system
  - 对已有系统进行修改

### Design Strategies

**分解 Decomposition**

- 质量属性驱动因素可以被分解并分配给分解后的元素
  - 通过为模块或组件分配明确职责，使抽象需求变得可执行
- 要牢记已有的constrains，并组织分解方式，使其能够适应这些约束
- 设计活动的目标，是生成一个既能适应constrains又能实现质量目标和业务目标的设计

**Designing to ASRs**

- 对ASRs的选择意味着对需求进行了优先级排序
- 仍然可以满足其他需求
- 可以通过对现有设计进行稍作调整来满足其他需求
- 当前设计下无法满足其他需求
  - 已经接近满足这些需求
  - 重新确定需求优先级，并审视设计
  - 无法满足这些需求
- 设计是一次满足所有ASRs还是逐一考虑
  - 答案取决于经验
  - 通过经验和学习会逐渐形成设计直觉，并应用patterns/tacics来帮助自己同时应对多个ASRs

**Generate and Test**

- 将具体设计看作一个hypothesis（假设） 当前设计假设中有问题的部分在下一个假设中被修正，正确的部分保留下来
  - 初始hypothesis从哪来
    - 现有系统
    - 框架 Frameworks（部分设计）
    - Patterns and tactics
    - Design checklists（用于提供指导和信心）
  - tests
    - 分析技术
    - Design checklists
  - 什么时候结束
    - 拥有一个满足ASRs的设计或者设计的预算用完
    - 实现你所能做的最佳假设

### Design Decisions

设计过程的核心

设计过程包含不同类型的Design Decisions

- 选择要decompose的元素
- 选择一个或多个能够满足本轮迭代输入的design concepts
- 实例化架构元素，分配职责并分配接口

### Design Concepts

避免重复造轮子

- 每次迭代中遇到的大多数子问题，都可以使用已有解决方案来解决，也就是Design Concepts
- design concepts的类别
  - Reference Architectures 参考架构
    - 为应用程序的设计提供了蓝图
      - 比如移动应用、富客户端应用、富互联网应用
    - Reference Architecture 不等于 Architectural Style。Reference Architecture 通常会基于一种或多种 Architectural Styles，但它更加具体、领域化、可直接指导系统结构设计
  - Deployment Patterns
    - 从物理角度为如何组织系统结构提供指导
    - 关于软件系统部署好的决策对于实现quality attributes比如availability很重要
  - Architectural / Design Patterns
    - 针对反复出现的设计问题的、经过验证的概念性解决方案
  - Tactics
    - 影响某个quality attribute响应控制方式的design decisions
  - Externally developed components 
    - 可复用的代码解决方案
    - 可复用的软件元素，提供通用功能，用于解决一系列应用中反复出现的关注点
    - 比如Frameworks（比如Spring）

### Selection roadmap

对于greenfield systems的Design concept的Selection roadmap

1. 建立初始整体系统结构
   - Reference Architectures
   - Deployment Patterns
   - Externally Developed
2. 识别支持主要功能的结构
   - Architectural Patterns
   - Externally Developed Components
3. 细化已有结构以完全处理剩余驱动因素
   - Tactics
   - Architectural Patterns
   - Deployment Patterns
   - Externally Developed Components

![截屏2026-06-01 00.55.37](https://hua-tian-cen.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2026-06-01%2000.55.37.png)

## Attribute-Driven Design Method（ADD 3.0）

现代、迭代、经受时间检验

![截屏2026-06-01 01.01.37](https://hua-tian-cen.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2026-06-01%2001.01.37.png)

## 过程

- **Step1 Review Inputs**

  - 在开始一轮设计之前需要确保设计过程中的输入是可用且正确的

    - Design Purpose

    - Primary functionality

    - Quality attribute scenarios

    - Architectural constrains

    - Concerns

    - Existing architecture design

  - 具体比如

    - primary functionality 和 quality attribute scenarios需要被排序确定优先级

    - 确保drivers以其优先级是正确的

- **Step2 Establish the Iteration Goal by Selecting Drivers**

  - 设计问题被分割成几个子问题

  - 一个迭代开始于决定解决哪个子问题

  - 建立一个大小合适的迭代目标

  - 可以是解决一个重要的driver

  - 可以是作出一组决策来满足一系列相似的drivers
    - 例如一组用例或相关的quality attribute scenarios

  - 可以是作出一组决策来满足一组相关的drivers
    - 一个用户故事及其相关的quality attribute scenario

- **Step3 Choose One or More Elements of the System to Refine**

  - refinement可以是

    - 将元素分解为更细粒度的元素（自顶向下方法）

    - 将元素结合为更粗粒度的元素（自底向上方法）

    - 改进之前已识别的元素

  - 对于Greenfield 开发，我们可以从以下步骤开始

    - 建立系统上下文

    - 选择唯一可用的元素（即系统本身）并通过decomposition进行细化

  - 对于existing systems or for later design iterations in greenfield systems

    - refine之前迭代中已经识别中的元素

    - 需要充分理解系统中的元素

  - step 2正常情况先于step3，但有时也可以反过来

- **Step4 Choose One or more Design Concepts That Satisfy the Selected Drivers**

  - 属于三种Decision的类型之一

  - 分为

    - Step 4.1 Identify Design Concepts

    - Step 4.2 Selection of Design Concepts

- **Step5 Instantiate Architectural Elements，Allocate Responsibilities，and Define Interfaces**
  - 属于三种Decision的类型之一

- **Step 6 Sketch Views and Record Design Decisions**

  - 蓝图会进一步被细化，这一步可以和step5并行完成

  - 这不是正式的文档，而是草图

  - 当你实例化Design Concepts时，通常会创建草图，这些草图是架构的初始文档

  - 养成记录以下内容的习惯
    - 分配给元素的职责
    - 已做出的相关设计决策

- **Step7 Perform Analysis of Current Design and Review Iteration Goal and Achievement of Design Purpose**

  - 分析当前设计，并审查迭代目标和设计目标的实现情况

  - 需要分析已经做出的决策以及整体设计过程中的进展从而决定是否还需要更多迭代

**Design Process Termination Criteria**

- 设计过程会跨越多次迭代持续进行，直到至少满足下面三种其中之一
  - 已经为所有驱动性的架构需求做出设计决策，即达到设计目标
  - 最重要的技术风险已经得到缓解
  - 分配给架构设计的时间被耗尽，但这种情况不理解

### Tailoring Design Aprroaches by System Type

**Applying ADD to Different System Contexts**

- Greenfield systems in mature domains
  - 用于从零开始设计系统，适用于成熟领域
    - 初始迭代目标
      - 建议整体系统结构，选择参考架构、模式和框架，优先考虑非功能约束和质量属性
    - 下一次迭代目标
      - 识别支持主要功能的结构，将用例分配给元素，分解参考架构中的元素，规划团队分工
    - 后续迭代
      - 针对剩余驱动因素细化结构
      - 使用战术、模式、组件和最佳实践（模块化，低耦合）
  - 路线图好处
    - 指导初始设计，并帮助早期估算
    - 使用已知组件遵循明确路线图，可以降低风险，并从一开始就支持质量目标
- Greenfield systems in novel domains
  - 没有参考架构
    - 没有现有模型或者可复用组件，设计需要从第一原则开始
  - 使用原型和一般设计概念
  - 应对新兴挑战

- Brownfield
  - 多种重新设计目标
  - 首先理解已有架构
  - 评估后的设计迭代

- Replace a Legacy Application
  -  当 ADD 用于替换遗留系统时，重点不是从零设计一个全新系统，而是在识别旧系统技术债和约束的基础上，通过代理层和 Strangler Fig Pattern，让新系统逐步接管旧系统功能，并在每一轮 ADD 迭代中选择具体组件进行迁移

 ## Documenting Software Architectures

架构文档的用途

- 帮助新人或外部人员理解系统
- 作为架构师、开发者和其他利益相关者之间沟通的主要载体
- 作为系统实现、问题记录和架构评估的基础

Notation 表示法

| 类型                 | 中文              | 特点                                      |
| -------------------- | ----------------- | ----------------------------------------- |
| Informal notations   | 非正式表示法      | 普通画图 + 文字说明，易懂但不能形式化分析 |
| Semiformal notations | 半正式表示法      | 有标准图形规则，如 UML，但语义不完全严格  |
| Formal notations     | 正式/形式化表示法 | 有精确定义和数学语义，可支持自动化分析    |

选择架构表示法时要权衡：越正式越精确、歧义越少、越便于分析，但创建和理解成本更高；越非正式越容易画、容易沟通，但保证更少，所以应根据要表达和分析的问题选择合适的表示法

### Views

视图让我们能够将软件架构划分为若干有意义的且可管理的系统表示

架构文档化的原则

- 文档化一个架构，就是文档化相关视图，然后添加适用于多个视图的文档内容

**Module Views**

- **Elements**	
  - 软件的实现单元，提供一组内聚的职责
- **Relations**
  - Is Part of
  - Depends on
  - Is a
- **Constrains**
  - 不同模块视图可能施加特定拓扑约束
    - 例如限制模块之间的可见性
- **Usage**
  - 作为代码构造的蓝图，帮助分析变更影响、规划增量开发、追踪需求到代码结构的对应关系，并支持任务分配、进度预算和系统信息结构的沟通

**C&C Views**

- **Elements**
  - Components
    - 运行时的主要处理单元和数据存储单元
    - 一个 component 通过一组 **ports** 和其他 component 交互
    - 例如：服务、进程、数据库、缓存、运行时模块等
  - Connectors
    - component 之间的交互路径
    - connector 有一组 **roles / interfaces**，表示 component 如何通过它进行交互
    - 例如：函数调用、HTTP 请求、消息队列、数据库连接、事件通道等
- **Relations**
  - **Attachments**
    - component 的 port 与 connector 的 role 连接起来，从而形成 component-connector 图
    - 简单理解：谁通过什么连接件和谁交互
  - **Interface delegation**
    - 外部 component 的 port 可以委托给内部子架构中的 port
    - 简单理解：外部接口背后可能转发到内部组件接口
- **Constraints**
  - component 不能直接连接 component，必须通过 connector 连接
  - connector 不能直接连接 connector，必须连接 component
  - attachments 只能发生在兼容的 port 和 role 之间
  - interface delegation 只能发生在兼容的 port 之间，或者兼容的 role 之间
  - connector 不能孤立存在，必须连接到某个 component
- **Usage**
  - 展示系统在运行时是如何工作的
  - 指导开发者理解运行时元素的结构和行为
  - 帮助分析运行时质量属性，例如性能、可用性等

**Allocation Views**

- **Elements**
  - **Software element**
    - 软件元素，例如模块、组件、服务、进程、代码单元等
    - 它对运行环境有一定要求
  - **Environmental element**
    - 环境元素，例如服务器、容器、虚拟机、开发团队、文件目录、处理器、网络节点等
    - 它向软件元素提供运行或组织条件
- **Relations**
  - **Allocated to**
    - 软件元素被分配到某个环境元素上
    - 例如：
      - 某个服务部署到某台服务器
      - 某个模块分配给某个开发团队
      - 某个组件映射到某个进程
      - 某份代码存放到某个代码仓库目录
- **Constraints**
  - 取决于具体的 allocation view 类型
  - 不同分配视图有不同约束
    - 部署视图会受硬件、网络、容器、节点资源约束
    - 工作分配视图会受团队能力、组织结构、人员安排约束
    - 实现视图会受代码仓库结构、构建方式、版本管理方式约束
- **Usage**
  - 分析性能、可用性、安全性和安全保障
  - 分析分布式开发和团队工作分配
  - 分析多个软件版本的并发访问和版本管理
  - 分析系统安装、部署和交付机制

**Quality Views**

- **Elements**
  - 来自其他结构视图中与某个质量属性相关的元素
  - 它不是从零定义一套新元素，而是从 module view、C&C view、allocation view 中抽取相关部分重新组合
  - 例如安全视图中可能包含：
    - 认证组件
    - 授权组件
    - 安全数据仓库
    - 敏感数据存储
    - 人工审批节点
  - 性能视图中可能包含：
    - 高流量组件
    - 网络通道
    - 缓存
    - 数据库
    - 关键调用链
- **Relations**
  - 取决于具体质量属性
  - 可以包含：
    - component 之间的通信关系
    - 模块之间的依赖关系
    - 软件元素和部署节点之间的映射关系
    - 安全协议中的交互关系
    - 故障检测、报告、恢复链路
  - 本质是把某个质量属性相关的结构关系集中展示出来
- **Constraints**
  - 由具体质量属性决定
  - 例如：
    - 安全视图可能约束哪些组件可以访问敏感数据
    - 通信视图可能约束网络通道、QoS 参数、并发区域
    - 可靠性视图可能约束复制、副本切换、事务完整性
    - 性能视图可能约束最大延迟、流量路径、带宽使用
- **Usage**
  - 面向特定利益相关者或特定关注点定制
  - 帮助集中分析某个质量属性
  - 例如：
    - **Security view**：分析认证、授权、敏感数据保护、威胁响应
    - **Communications view**：分析组件通信、网络通道、QoS、并发区域
    - **Exception / error-handling view**：分析错误检测、报告和恢复机制
    - **Reliability view**：分析复制、切换、事务完整性
    - **Performance view**：分析网络流量、最大延迟、性能瓶颈

**Module Views**：看代码静态结构，回答“系统代码怎么分模块？”

**C&C Views**：看运行时结构，回答“系统运行时组件怎么交互？”

**Allocation Views**：看映射关系，回答“软件元素部署到哪里、分配给谁、放在哪里？”

**Quality Views**：看专项质量属性，回答“为了分析安全/性能/可靠性，需要把哪些相关结构集中起来看？”

下面只整理 **Method for Choosing the Views** 往后的内容，压缩成适合背诵的 Markdown 笔记。

Method for Choosing the Views

- Step 1：建立 Stakeholder/View 表

  - 行：列出 stakeholders

  - 列：列出候选 views

- Step 2：合并 Views，减少数量

  - 如果某个 view：

    - 只需要 overview

    - 只服务少数 stakeholder

    - 维护成本高但收益低

  - 就可以考虑和其他 view 合并

  - 常见合并：

    - 多个 C&C views 可以合并

      - 因为都描述运行时 component 和 connector

      - Deployment view 可以和 SOA / communicating-processes view 合并
        - 因为服务、进程最终都要部署到处理器或节点上

    - Decomposition view 可以和 work assignment / implementation / layered view 合并
      - 因为模块分解结果也常用于任务分配、代码组织和分层结构

- 优先发布最有价值的 view。

  - 尤其是：Decomposition View

  - 不必一次满足所有 stakeholder 的全部需求。

  - breadth-first approach
    - 即先给多个 view 提供概览，再逐步补充细节。

**Building the Documentation Package**

架构文档包由两部分组成：

- **Views**
  - 针对某个结构视角的文档
  - 例如 Module View、C&C View、Allocation View
- **Documentation beyond views**
  - 跨多个 view 的信息
  - 例如系统概览、视图映射、术语表、全局设计理由等

**Documenting a View**

一个 view 通常包含 5 个部分。

- Primary Presentation 负责把架构结构直观展示出来

  - 该 view 的主图 / 主表 / 主表示

  - 展示核心 elements 和 relations

  - 通常是图形化表示

  - 必须有 key / legend 解释图例

- Element Catalog 对主图里的元素做详细解释

  - Elements and their properties
    - 元素及属性
  - Relations and their properties
    - 关系及属性
  - Element interfaces
    - 元素接口

  - Element behavior
    - 元素行为

- Context Diagram  明确 view 的范围和边界
  - 说明该 view 中的系统部分如何与外部环境交互

- Variability Guide 说明系统“允许怎么变”
  - 说明架构中哪些地方允许变化，以及怎么变化。

- Rationale（设计理由） 记录“为什么”

  - 解释为什么这样设计

  - 重点记录：

    - 为什么选这个 pattern

    - 为什么不选另一个方案

    - 这个方案解决了什么架构问题

    - 这个选择如何满足 drivers

![截屏2026-06-02 16.15.41](https://hua-tian-cen.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2026-06-02%2016.15.41.png)

**Documenting Information Beyond Views**

这些内容不属于某一个 view，而是服务整个架构文档。

- Document Control Information（放在文档前置部分）
  - 记录文档管理信息
  - 管理文档版本和变更

- Section1：Documentation Roadmap

  - 告诉读者：文档里有什么，在哪里找。

  - 包括：

    - 文档范围和摘要

    - 文档组织方式

    - 包含哪些 views

    - 每个 view 的用途

    - stakeholder 如何使用文档

- Section 2：How a View Is Documented
  - 说明本文档采用什么 view 标准
  - 统一不同 view 的写法，降低阅读成本。

- Section3:  System Overview

  - 用简短文字说明：

    - 系统功能

    - 系统用户

    - 重要背景

    - 关键约束

  - 给读者建立系统整体认知。

- Section4 ：Mapping Between Views

  - 说明不同 views 之间元素如何对应

  - 常见映射：
    - C&C View → Module View：is implemented by
    - Module View → C&C View：implements
    - Decomposition View → Layered View：included in

  - 把多个 view 串成一个统一架构，而不是几张孤立的图。

- Section5: Rationale

  - 记录跨多个 view 的架构决策

    - 选择微服务还是单体

    - 选择分层架构还是事件驱动

    - 选择某种部署模式

    - 重要组织约束或技术约束

  - 记录系统级设计理由

- Section6: Directory

  - 用于快速查找信息

  - 包括：

    - Index of terms 术语索引

    - Glossary 术语表

    - Acronym list 缩略语表

  - 降低阅读和沟通成本

**Documenting Behavior** 文档化行为

- 结构文档说明
  - 系统有哪些元素，它们如何连接。

- 行为文档说明
  - 这些元素运行时如何交互

行为文档可用于分析：

- 是否可能死锁
- 任务能否在规定时间内完成
- 最大内存消耗
- 运行时交互是否合理

结构文档看“静态组成”，行为文档看“动态过程”。

**Notations for Documenting Behavior** 

- **Trace-oriented Languages**

  - 关注某一次具体行为路径

  - 典型形式：

    - Use Case

    - Sequence Diagram

    - Communication Diagram

    - Activity Diagram

    - Message Sequence Chart

    - Timing Diagram

    - BPEL

  - 适合描述：某个请求如何一步步经过系统。

- **Comprehensive Languages**

  - 关注元素的完整行为

  - State Machine

  - 特点：

    - 表示从初始状态到最终状态的所有可能路径

    - 适合描述状态变化、交互约束、定时反应

    - 可分析更完整的系统行为

**Documenting Architectures That Change Faster Than Documentation**

问题：

> 系统变化速度可能快于文档更新速度。

典型场景：

- 运行时架构动态变化
- 高频发布部署
- DevOps 快速迭代

解决方式：

- 记录 invariants
  - 记录所有版本都必须满足的规则

- 记录 allowed variability
  - 记录架构允许怎样变化

**Documenting Architecture in an Agile Development Project**

敏捷项目中的架构文档原则：just enough documentation

只写足够有用的文档，不追求形式完整

关键原则

- 使用模板记录设计决策
- 只有 view 有明确 stakeholder 需求时才写
- 信息什么时候可用，什么时候补充
- 不必一次填满所有章节
- 不必先写完整架构文档再进入开发
- 只生产足够支持编码的信息
- 不需要的部分写 N/A
- 白板图可以拍照作为 primary presentation
