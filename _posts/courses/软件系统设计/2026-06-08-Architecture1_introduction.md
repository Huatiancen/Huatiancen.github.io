---
layout: post
title: 'Architecture1_introduction'
date: 2026-06-08 00:20 +0800
last_modified_at: 2026-06-16 00:20 +0800
tags: ['软件系统设计']
toc: true
---
# 软件架构导论 Software Architecture Introduction

## 课程定位

本部分是 **Software Systems Design 软件系统设计** 中的软件架构导论，主要回答几个问题：

- 为什么需要学习软件设计与软件架构：**Why study software design and architecture**
- 什么是软件架构：**What is software architecture**
- 架构与设计、结构之间有什么关系：**Architecture vs. design / structure**
- 架构师做什么：**What does a software architect do**
- 软件架构在软件开发中的作用是什么：**Role of architecture**
- 后续课程会学习哪些架构相关内容：**Architecture lectures preview**

## 为什么学习软件设计与架构 Why Study Software Design & Architecture

- 软件系统无处不在，许多现代系统都是 **software-intensive systems 软件密集型系统**
- 每一个软件密集型系统都需要软件设计与软件架构
- 软件设计和软件架构是软件工程实践、教育和研究中的重要部分
- 从职业角度看，**Software Architect 软件架构师** 是软件行业中的重要角色
- 从研究角度看，软件设计和架构相关研究很早就开始出现，并在 1990 年之后受到大量关注

本课程关注：

- 软件设计与架构的概念、原则、方法和模式：**concepts, principles, methods and patterns**
- 软件设计与架构的先进实践：**state-of-the-art practices**
- 如何系统地分析、设计和评价软件架构：**analyze, design and evaluate software architecture systematically**

## 学习目标 Learning Objectives

课程目标包括：

- 理解软件设计和软件架构的核心概念与原则：**concepts and principles**
- 能够通过需求分析或逆向工程创建软件架构：**requirements analysis / reverse architecting**
- 能够在软件架构和设计中应用模式、风格和框架：**patterns, styles and frameworks**
- 能够系统地分析和评价软件架构：**analyze and evaluate software architecture**
- 理解软件设计与架构中的最新方法：**state-of-the-art methods**
- 理解软件设计、软件架构与其他软件工程主题之间的关系：**relationships with other software engineering topics**

## 软件工程的理解 Understanding Software Engineering

软件工程可以从两个角度理解：

- **Science 科学**
  - 更强调理论、模型、规律和验证
- **Engineering 工程**
  - 更强调在约束下构建可用系统
  - 关注成本、进度、质量、风险和实践方法

软件工程不是单纯写代码，而是将工程化思想用于软件系统的开发、维护和演化。

## 什么是软件架构 What is Software Architecture

### SEI对软件架构的定义

软件架构 **software architecture ** 是一个程序或计算系统的结构或结构集合，它包括：

- 软件元素：**software elements**
- 这些元素的外部可见属性：**externally visible properties**
- 元素之间的关系：**relationships among them**

这里的关键词是：

```text
elements
元素

externally visible properties
外部可见属性

relationships
关系
```

也就是说，架构不关心每一行代码的细节，而关心系统由哪些主要部分组成，这些部分对外表现出什么能力，以及它们如何协作。

### IEEE 1471 定义

软件架构是系统的基本组织结构 **fundamental organization of a system**，体现在：

- 系统的组件：**components**
- 组件之间的关系：**relationships to each other**
- 组件与环境之间的关系：**relationships to the environment**
- 指导系统设计和演化的原则：**principles governing its design and evolution**

这个定义强调：架构不仅是结构，还包括指导系统后续设计和演化的原则。

## 架构与设计 Architecture vs. Design

架构是软件设计的一部分，但不是所有设计都是架构。

```text
All architecture is design,
but not all design is architecture.
```

可以理解为：

- 架构关注系统级、高层级、重要且难以改变的设计决策：**high-level design decisions**
- 普通设计可能关注类、方法、算法、数据结构等局部细节

架构也可以被看成：

- 高层设计：**high-level design**
- 一组重要设计决策：**a set of design decisions**
- 系统的结构与组织：**structure / organization of the system**

架构主要描述：

- 元素、组件和连接件：**elements, components and connectors**
- 静态关系和动态关系：**static and dynamic relationships**
- 元素、元素组合和整个系统的属性：**properties of elements, groups of elements and the overall system**

## 架构与结构 Architecture vs. Structure

结构更偏向“系统被分解成哪些部分”，而架构不仅包括结构，还包括职责、接口、通信和约束。

架构通常需要定义：

- **Component interfaces 组件接口**
  - 组件能做什么
  - 对外提供哪些能力
- **Component communication and dependencies 组件通信与依赖**
  - 组件之间如何通信
  - 哪些组件依赖哪些组件
- **Component responsibilities 组件职责**
  - 当其他组件请求它时，它具体应该做什么

所以，架构不是简单画几个模块框，而是说明模块之间如何合作，以及各自承担什么责任。

## 架构规定通信方式 Architecture Specifies Communication

架构需要规定组件之间如何通信。

通信可以包括数据传递机制，例如：

- 函数调用：**function call**
- 远程方法调用：**remote method invocation**
- 异步消息：**asynchronous message**

架构也要规定控制流，例如：

- 组件之间的消息流如何配合完成功能：**flow of messages between components**
- 顺序执行：**sequential**
- 并发或并行执行：**concurrent / parallel**
- 同步机制：**synchronization**

这些通信方式会影响系统的性能、可靠性、可维护性和复杂度。

## 架构处理非功能需求 Architecture Addresses NFRs

非功能需求 **NFRs = Non-functional Requirements 非功能需求** 描述的是：

> 系统工作得有多好。

例如：

- 性能：**performance**
- 安全性：**security**
- 可用性：**availability**
- 可修改性：**modifiability**
- 可扩展性：**scalability / extensibility**
- 可维护性：**maintainability**

非功能需求通常不会完整写在功能需求里，但它们对架构有很大影响，因此也被称为：

```text
architecture requirements
架构需求
```

非功能需求需要架构师主动挖掘和澄清。

非功能需求包括：

- 技术约束：**technical constraints**
- 业务约束：**business constraints**
- 质量属性：**quality attributes**

## 设计是一种抽象 Design is an Abstraction

架构提供的是系统设计的高层抽象视图。

抽象的作用是：

- 隐藏设计的复杂性和实现细节：**hide complexity and implementation details**
- 让人从更高层次理解系统：**provide a higher-level abstract view**
- 不要求架构元素与软件元素一一对应：**no direct one-to-one mapping is required**

架构可以被看作系统结构和交互的黑盒描述，也可以体现架构师的设计哲学。

一句话理解：

**架构是为了让我们在不陷入代码细节的情况下，理解系统的关键结构和关键决策。**

## 架构视图 Architecture Views

软件架构是复杂的设计产物 **complex design artifact**，因此通常需要多个视图 **views** 来描述。

可以类比建筑：

- 平面图
- 外观图
- 电路图
- 管道图
- 空调图

软件系统也一样，不同利益相关者关注不同内容，所以需要不同架构视图。

## 4+1 视图模型 4+1 View Model

Kruchten 的 **4+1 View Model** 包括：

- **Logical View 逻辑视图**
  - 描述架构中具有重要意义的软件元素及其关系
- **Process View 进程视图**
  - 描述并发和通信元素
- **Physical View 物理视图**
  - 描述主要进程和组件如何映射到应用硬件上
- **Development View 开发视图**
  - 描述软件组件在开发环境中的内部组织方式，例如配置管理工具中的组织
- **Architecture Use Cases架构用例 **
  - 捕获架构相关需求，通常会关联多个视图

这里的 “+1” 是用例视图，它用于验证和串联其他几个视图。

## 如何进行设计 How to Develop a Design

通用设计策略 **generic design strategies** 包括：

- **Decomposition 分解**
  - 将复杂系统拆成较小部分
- **Abstraction 抽象**
  - 忽略不重要细节，保留关键特征
- **Stepwise: Divide and Conquer 逐步求精 / 分而治之**
  - 逐步拆分并解决问题
- **Generate and Test 生成并测试**
  - 提出方案并验证方案
- **Iteration: Incremental Refinement 迭代式增量改进**
  - 通过多轮迭代不断完善设计
- **Reusable Elements 可复用元素**
  - 利用已有组件、框架、模式或架构经验

这些策略共同服务于一个目标：在复杂需求和约束下得到可实现、可演化的软件设计。

## 架构师与软件架构师 Architect & Software Architect

架构师的核心任务不是直接写所有代码，而是设计系统结构来满足人的需求。

软件架构师 **software architect** 通常需要负责：

- 理解客户、用户和业务方需求：**listen to clients and understand needs**
- 将需求转化为系统结构：**structuring facilities / systems**
- 形成可实践的架构视图或蓝图：**practical vision / blueprint**
- 监督构建过程，确保实现符合计划：**oversee construction and ensure compliance**
- 指导修改，帮助系统应对变化和不确定性：**guide revision through change and ambiguity**

软件架构师的工作对象是软件系统，其职责与建筑架构师类似：不是只关注局部构件，而是关注整体结构、约束、质量和演化。

## 软件架构师做什么 What Does a Software Architect Do

软件架构师常见工作包括：

- **Liaison 沟通协调**
  - 在客户、技术团队和业务/需求分析人员之间沟通
  - 与管理层或市场人员沟通
- **Software Engineering 软件工程能力**
  - 掌握软件工程最佳实践
- **Technology Knowledge 技术知识**
  - 深入理解技术领域
- **Risk Management 风险管理**
  - 识别与设计和技术选择相关的风险
  - 在系统早期处理关键风险

架构师需要同时理解业务、技术、工程实践和风险。

## 一般设计模型 A General Design Model

设计过程通常接收以下输入：

- 需求规约：**requirements specification**
- 约束条件：**constraints**
- 设计师的决策：**designer's decisions**
- 经验和可复用资源：**experience and reusable resources**

设计过程的输出通常是：

- 程序描述：**program description**
- 架构描述：**architecture description**
- 模块/组件结构：**module / component structure**
- 后续实现的依据：**basis for implementation**

可以理解为：

```text
需求 + 约束 + 经验 + 决策
        ↓
      设计过程
        ↓
    系统/程序描述
```

## 架构活动 Architecture Activities

软件架构活动包括：

- 为系统建立业务案例：**creating the business case for the system**
- 理解需求：**understanding the requirements**
- 创建和选择架构：**creating and selecting architecture**
- 与利益相关者沟通架构：**communicating the architecture**
  - 包括开发者、客户、管理者等
- 分析和评价架构：**analyzing or evaluating the architecture**
  - 使用总体方法
  - 使用面向质量属性的技术
- 实现架构：**implementing the architecture**
- 确保实现符合架构：**ensuring conformance to an architecture**

这里需要注意：架构不是画完图就结束，而是贯穿需求、设计、实现、评价和演化。

## 软件架构过程 Software Architecture Process

软件架构过程大致包括：

- 明确架构显著需求：**specifying ASRs**
- 根据需求、约束、模式和战术进行架构设计：**using requirements, constraints, patterns and tactics**
- 形成候选架构：**candidate architecture**
- 文档化架构：**documenting**
- 对架构进行评价：**architecture evaluation**
- 根据评价结果继续调整架构：**refinement based on evaluation**

其中：

```text
ASR = Architecturally Significant Requirement
架构显著需求
```

ASR 指对架构有重要影响的需求，尤其包括质量属性和关键约束。

## 软件设计与架构知识领域 Software Design & Architecture Knowledge Areas

课程中涉及的软件设计与架构知识领域包括：

### 软件设计基础概念 Software Design Basic Concepts

- 通用设计概念：**general design concepts**
- 软件开发生命周期中的设计上下文：**context in software development life cycle**
  - 需求
  - 设计
  - 构造
  - 测试
- 设计过程：**design process**
  - 策略
  - 角色
  - 活动

### 关键技术问题 Key Issues

- 并发：**concurrency**
- 控制与事件处理：**control and handling of events**
- 分布式处理：**distributed processing**
- 异常处理：**exception handling**
- 交互式系统：**interactive systems**
- 持久化：**persistence**

### 软件结构与架构 Software Structure and Architecture

- 架构结构与视点：**architecture structures and viewpoints**
- 架构风格与架构模式：**architectural styles and patterns**
  - 属于宏观架构 macro-architecture
- 设计模式：**design patterns**
  - 属于微观架构 micro-architecture

### 软件设计方法 Software Design Methods

- 架构方法：**architecture methods**
  - 如 Attribute-Driven Design，属性驱动设计
- 设计方法：**design methods**
  - 如 Domain-Driven Design，领域驱动设计

### 软件设计质量分析与评价 Quality Analysis and Evaluation

- 质量属性：**quality attributes**
- 质量分析与评价方法、技术和工具：**quality analysis and evaluation methods, techniques and tools**
- 设计评审：**design reviews**
  - 例如 SEI 的 ATAM
- 静态分析和动态分析：**static analysis and dynamic analysis**
- 仿真和原型：**simulation and prototyping**

### 度量 Measures

- 架构层面的度量：**architecture level measures**
- 技术相关的具体度量：**technique-specific measures**

### 设计建模与表示 Design Modeling and Representation

- 架构描述语言：**ADL = Architecture Description Languages**
- UML：**Unified Modeling Language**
- 设计文档：**design documentation**
- 其他表示方式，如 ACME、Rapide：**other ADLs / representations**

## 后续架构课程预览 Lectures Preview

后续课程内容包括：

- 软件架构概念：**concepts of software architecture**
- 质量属性、NFRs 和质量场景：**quality attributes, NFRs and scenarios**
- 架构战术：**architecture tactics**
- 架构显著需求：**ASRs**
- 架构模式、软件设计模式和架构风格：**architecture patterns, design patterns and architecture styles**
- 架构设计方法：**architecture design methods**
  - 设计策略
  - 通用架构设计过程
  - ADD 方法，即 Attribute Driven Design
- 微服务架构：**microservices architecture**

## 架构的作用 Role of Architecture

架构是满足需求的最早设计产物之一：**one of the first artifacts representing design decisions on how requirements are to be achieved**。

它表示系统如何实现需求，并且包含一批很难改变的设计决策。因此架构决策通常需要非常谨慎。

软件架构的作用包括：

- 表达系统如何满足需求：**represent how requirements are achieved**
- 记录早期、重要且难以改变的设计决策：**earliest and hardest-to-change design decisions**
- 为产品线工程提供基础：**basis for product-line engineering**
- 让多个系统可以共享共同架构：**product commonality**
- 让开发团队能围绕共同结构协作：**coordination framework**
- 为维护和修改提供参考框架：**framework for maintenance and modification**

## 为什么软件架构重要 Why is Software Architecture Important

### 1. 架构是沟通工具 Vehicle for Communication

软件架构为不同利益相关者提供共同参照。

它帮助沟通：

- 与用户协商需求
- 向客户说明进度和成本
- 落实管理决策和资源分配

架构让大家能围绕同一套结构讨论系统，而不是各说各话。

### 2. 架构体现最早的设计决策 Earliest Design Decisions

架构通常包含系统最早的一批设计决策。

这些决策会影响：

- 实现方式
- 开发组织
- 资源分配
- 组件边界
- 后续维护方式

实现代码必须服从架构约束，否则系统会失去整体一致性。

### 3. 架构影响组织结构 Organizational Structure

架构决策会影响开发组织方式，例如：

- 团队划分：**division into teams**
- 预算与计划：**budgeting and planning**
- 工作分解结构：**WBS = Work Breakdown Structure**
- 文档组织：**organization for documentation**
- 配置管理库组织：**organization for CM libraries**
- 集成策略：**integration**
- 测试计划：**test plans / testing**
- 维护方式：**maintenance**

这也体现了康威定律的味道：系统结构和组织沟通结构往往会相互影响。

### 4. 架构影响质量属性 Quality Attributes

架构可以促进或阻碍质量属性的达成，例如：

- 性能：**performance**
- 可修改性：**modifiability**
- 安全性：**security**
- 可用性：**availability**
- 易用性：**usability**

不过需要注意：

> 架构会影响质量，但不能自动保证质量。

质量属性的达成还需要设计细节、实现质量、测试和运维共同配合。

### 5. 架构帮助讨论变化 Potential Change

软件系统大部分工作量可能发生在部署之后，因此需要考虑变化。

变化可以分为：

- **Local change 局部变化**
  - 只影响一个组件
- **Non-local change 非局部变化**
  - 影响多个组件
- **Architectural change 架构级变化**
  - 修改系统基本结构、通信机制或协调机制

架构越清晰，越容易判断变化会影响哪些部分。

### 6. 架构是可迁移和可复用的抽象 Transferable and Reusable Abstraction

架构是一种可迁移、可复用的抽象。

```text
one-to-many mapping
一个架构可以对应多个系统
```

例如产品线中的多个产品可以共享同一个架构。

系统也可以通过集成独立开发的组件来构建，这对应：

```text
CBSE = Component-Based Software Engineering
基于组件的软件工程
```

## 架构例子 Architecture Examples

课程中给出了若干架构例子：

- 手机系统架构：**Mobile Phone System Architecture**
- 洗衣机架构：**Washing Machine Architecture**
- AI 护栏架构：**AI Guardrail Architecture**

这些例子说明：架构不仅存在于传统软件系统，也存在于嵌入式系统、移动系统和 AI 系统中。

## 本讲重点总结 Key Takeaways

本讲最重要的是理解：

- 软件架构是系统的高层结构和关键设计决策
- 架构不是普通代码细节，而是影响系统质量和演化方向的核心设计
- 架构包含组件、关系、接口、职责、通信和约束
- 架构主要处理非功能需求和质量属性
- 架构需要多个视图描述
- 架构师需要在需求、技术、工程实践和风险之间做权衡
- 架构在系统早期决定很多后续开发、组织、测试和维护方式

一句话记：

> 软件架构就是对系统最重要结构和决策的抽象描述，它决定系统如何组织、如何协作、如何满足关键质量属性，以及未来如何演化。

## 高频英文术语 Glossary

| English Term | 中文 | 备注 |
| --- | --- | --- |
| Software Architecture | 软件架构 | 系统高层结构与关键设计决策 |
| Software Design | 软件设计 | 比架构范围更广，包含局部设计细节 |
| Software-intensive System | 软件密集型系统 | 以软件为核心的现代系统 |
| Element / Component | 元素 / 组件 | 架构中的主要组成部分 |
| Connector | 连接件 | 组件之间的交互机制 |
| Relationship | 关系 | 元素之间的静态或动态联系 |
| Externally Visible Properties | 外部可见属性 | 组件对外表现出来的能力或约束 |
| Non-functional Requirement, NFR | 非功能需求 | 描述系统“工作得多好” |
| Quality Attribute | 质量属性 | 如 performance, availability, security |
| Constraint | 约束 | 技术、业务、成本、法规等限制 |
| Architecture View | 架构视图 | 从某个角度描述架构 |
| Viewpoint | 视点 | 定义某类视图关注什么、如何表达 |
| Logical View | 逻辑视图 | 描述重要软件元素及其关系 |
| Process View | 进程视图 | 描述并发、通信、运行时行为 |
| Physical View | 物理视图 | 描述软件到硬件的映射 |
| Development View | 开发视图 | 描述软件在开发环境中的组织 |
| Architecture Scenario / Use Case | 架构场景 / 用例 | 用来验证架构是否满足需求 |
| Architecturally Significant Requirement, ASR | 架构显著需求 | 对架构有重大影响的需求 |
| Architecture Tactic | 架构战术 | 为实现某质量属性采用的设计手段 |
| Architecture Pattern | 架构模式 | 宏观架构层面的可复用方案 |
| Architectural Style | 架构风格 | 系统组织结构的典型风格 |
| Design Pattern | 设计模式 | 微观设计层面的可复用方案 |
| Architecture Description | 架构描述 | 对架构的文档化表达 |
| Architecture Description Language, ADL | 架构描述语言 | 用于描述软件架构的语言 |
| Architecture Evaluation | 架构评价 | 判断架构是否满足目标和质量属性 |
| ATAM | 架构权衡分析方法 | Architecture Tradeoff Analysis Method |
| Attribute-Driven Design, ADD | 属性驱动设计 | 根据质量属性驱动架构设计 |
| Component-Based Software Engineering, CBSE | 基于组件的软件工程 | 通过集成组件构建系统 |
| Product Line Engineering | 产品线工程 | 多个产品共享公共架构或资产 |
| Modifiability | 可修改性 | 系统应对变化的能力 |
| Availability | 可用性 | 系统保持可服务状态的能力 |
| Performance | 性能 | 响应时间、吞吐量等 |
| Security | 安全性 | 防止未授权访问或破坏 |
| Usability | 易用性 | 用户使用系统的难易程度 |
| Maintainability | 可维护性 | 系统被维护、修复、演化的能力 |
