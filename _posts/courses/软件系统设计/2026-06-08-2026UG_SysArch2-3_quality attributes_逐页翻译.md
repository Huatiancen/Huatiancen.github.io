---
layout: post
title: '2026UG_SysArch2-3_quality attributes_逐页翻译'
date: 2026-06-08 00:11 +0800
last_modified_at: 2026-06-08 00:11 +0800
tags: ['软件系统设计']
toc: true
---
# 2026UG_SysArch2-3_quality attributes 逐页逐句翻译

> 说明：这版按 PPT 页码整理，尽量采用“英文原句 / 中文翻译”的方式。少数图表页没有完整自然句，我按图中框、箭头、表格项逐项翻译。页脚、装饰图、页码不翻。

## 第 1 页 Requirements

- Requirements
  - 需求

## 第 2 页 Functional Requirements

- Functional Requirements
  - 功能需求

## 第 3 页 Functional Requirements

- Functional requirements state what the system must do and address how the system provides value to the stakeholders.
  - 功能需求说明系统必须做什么，并说明系统如何为利益相关者提供价值。
- Functional requirements means the behaviour of the system.
  - 功能需求指的是系统的行为。
- Functionality is the ability of the system to do the work for which it was intended, e.g., enable students to enrol online.
  - 功能性是系统完成其预期工作的能力，例如允许学生在线选课。
- Functionality may be achieved through the use of any number of possible structures.
  - 功能性可以通过许多不同的结构来实现。
- Functionality is largely independent of structure, because it could exist as a single monolithic system without any internal structure.
  - 功能性在很大程度上独立于结构，因为某个功能也可以存在于一个没有明显内部结构的单体系统中。

## 第 4 页 Quality Requirements

- Quality Requirements
  - 质量需求

## 第 5 页 Quality Requirements

- Quality requirements are desirable characteristics of the overall system (aka. quality attributes) that system should provide on the top of its functional requirements.
  - 质量需求是整个系统应该具备的期望特征，也叫质量属性；它们是在功能需求之上系统还应该提供的特性。
- Quality requirements are qualifications of the functional requirements or of the overall product.
  - 质量需求是对功能需求或整个产品的限定与修饰。
- Software architecture constrains the allocation (mapping) of the functionality onto various structures if quality attributes are important.
  - 如果质量属性很重要，软件架构就会约束功能如何被分配或映射到不同结构上。

## 第 6 页 Constraints

- Constraints
  - 约束

## 第 7 页 Constraints

- A constraint is a design decision with ZERO degrees of freedom.
  - 约束是自由度为零的设计决策。
- Constraints are pre-specified design decisions that have been already made.
  - 约束是已经预先指定、已经做出的设计决策。
- Constraints are satisfied by accepting the design decision and reconciling it with other affected design decisions.
  - 满足约束的方法是接受这个设计决策，并把它与其他受影响的设计决策协调起来。

## 第 8 页 Requirements Overview

- Requirements
  - 需求
- Functional Requirements
  - 功能需求
- Quality Requirements
  - 质量需求
- Constraints
  - 约束

## 第 9 页 Quality Requirements

- Quality Requirements
  - 质量需求

## 第 10 页 Non-functional Requirements

- Non-functional requirements or architectural requirements are alternative terms used for quality attributes.
  - 非功能需求或架构需求，是质量属性的另一种说法。
- It is not possible to get the functionality right and then try to accommodate non-functional requirements. (NO retro-fitting quality)
  - 不可能先把功能做好，然后再试图补上非功能需求。也就是说，质量不能靠事后补丁补出来。
- Non-functional requirements must be taken into account during any design decision.
  - 非功能需求必须在任何设计决策中都被考虑进去。
- There are two broad categories of non-functional requirements.
  - 非功能需求大体可以分为两类。
- Observable (External) during execution: How well a system satisfies its behavioural requirements? e.g., performance, security, availability, usability etc.
  - 运行时可观察的外部质量：系统满足其行为需求的程度如何？例如性能、安全性、可用性、易用性等。
- Not observable (Internal) during execution: How easily a system can be maintained, integrated, or tested? e.g., modifiability, portability, reusability, testability etc.
  - 运行时不可直接观察的内部质量：系统维护、集成或测试起来有多容易？例如可修改性、可移植性、可复用性、可测试性等。

## 第 11 页 Quality Attributes

- Quality isn't something that can be added to a software intensive system after development finishes.
  - 质量不是软件密集型系统开发完成后可以再加上去的东西。
- Quality concerns need to be addressed during ALL phases of the software development.
  - 质量关注点需要在软件开发的所有阶段都被处理。
- Business goals determine qualities that a system must possess.
  - 业务目标决定系统必须具备哪些质量。
- Quality attributes are over and above system's functionality, which is the basic statement of the system's capabilities, services, and behaviours.
  - 质量属性是在系统功能性之上的特征；功能性描述的是系统能力、服务和行为的基本内容。

## 第 12 页 Quality Attributes

- Functionality usually takes the front seat in the development plan.
  - 功能性通常在开发计划中占据最优先的位置。
- However, systems are usually redesigned because they lacked desired level of quality, i.e. difficult to maintain, port, or scale.
  - 然而，系统经常需要重新设计，是因为它们缺少期望的质量水平，例如难以维护、移植或扩展。
- Software architecture constrains the achievement of various quality attributes, e.g., performance, security, usability etc.
  - 软件架构会约束各种质量属性的实现，例如性能、安全性、易用性等。
- That is why software architecture is considered the most appropriate level of addressing the quality issues.
  - 因此，软件架构被认为是处理质量问题最合适的层次。
- No quality attribute is entirely dependent on design, nor is it dependent on implementation or deployment.
  - 没有任何质量属性完全依赖于设计，也没有任何质量属性完全依赖于实现或部署。

## 第 13 页 Specifying Quality Attributes

- Quality attributes need to be made precise.
  - 质量属性需要被精确定义。
- A system-specific quality attribute scenario is a quality-attribute-specific requirement.
  - 系统特定的质量属性场景，就是针对某个质量属性的具体需求。
- A general quality attribute scenario is a system-independent, quality-attribute-specific requirement.
  - 通用质量属性场景，是与具体系统无关、但针对某个质量属性的需求模板。
- General scenarios are useful for generating concrete, system-specific scenarios.
  - 通用场景有助于生成具体的、系统特定的场景。

## 第 14 页 General Scenarios

- General Scenarios
  - 通用场景
- Source of stimulus
  - 刺激源
- Stimulus
  - 刺激
- Artifact
  - 制品 / 被影响的系统部分
- Environment
  - 环境
- Response
  - 响应
- Response measure
  - 响应度量

## 第 15 页 Modeling Quality Attribute Scenarios

- Source of Stimulus: some entity that generated the stimulus.
  - 刺激源：产生刺激的某个实体。
- Stimulus: a condition that needs to be considered when it arrives at a system.
  - 刺激：到达系统时需要被考虑的某种条件或事件。
- Artifact: some artifact is stimulated. This may be the whole system or some pieces of it.
  - 制品：受到刺激的对象，可能是整个系统，也可能是系统的一部分。
- Environment: the stimulus occurs within certain conditions.
  - 环境：刺激发生时所处的一组条件。
- Response: the activity undertaken after the arrival of the stimulus.
  - 响应：刺激到达后系统采取的活动。
- Response measure: when the response occurs, it should be measurable in some fashion.
  - 响应度量：响应发生后，应该能够以某种方式度量它。

## 第 16 页 Tactics

- A tactic is a design decision that influences the control of a quality attribute response.
  - 战术是会影响质量属性响应控制方式的设计决策。
- A collection of tactics is called an architectural strategy.
  - 一组战术的集合称为架构策略。
- Tactics are the building blocks of design.
  - 战术是设计的构建块。

## 第 17 页 Quality Design Decisions

- Allocation of responsibilities
  - 职责分配
- Coordination model
  - 协调模型
- Data model
  - 数据模型
- Management of resources
  - 资源管理
- Mapping among architecture elements
  - 架构元素之间的映射
- Binding time decisions
  - 绑定时机决策
- Choice of technology
  - 技术选择

## 第 18 页 Quality Attributes

- Availability
  - 可用性
- Interoperability
  - 互操作性
- Modifiability
  - 可修改性
- Performance
  - 性能
- Security
  - 安全性
- Testability
  - 可测试性
- Usability
  - 易用性
- X-ability
  - 其他“某某能力”质量属性，例如可扩展性、可移植性等。

## 第 19 页 Quality Attributes & Tactics

- Quality Attributes & Tactics
  - 质量属性与架构战术

## 第 20 页 Availability

- Availability
  - 可用性

## 第 21 页 Availability

- Availability refers to a property of software that it is there and ready to carry out its task when you need it to be.
  - 可用性指软件在你需要它时就在那里，并且已经准备好执行任务这一性质。
- This is the one quality attribute that every IT application has to have.
  - 这是每个 IT 应用都必须具备的质量属性。
- It is expressed as the ratio of the available system time to total working time.
  - 可用性通常表示为系统可用时间与总工作时间的比值。

## 第 22 页 Availability

- Availability = MTBF / (MTBF + MTTR)
  - 可用性 = 平均故障间隔时间 /（平均故障间隔时间 + 平均修复时间）。
- MTBF: Mean Time Between Failures.
  - MTBF：平均故障间隔时间。
- MTTR: Mean Time To Repair.
  - MTTR：平均修复时间。
- The longer the MTBF and the shorter the MTTR, the higher the availability.
  - MTBF 越长、MTTR 越短，可用性就越高。

## 第 23 页 Availability

- Availability is closely related to downtime.
  - 可用性与停机时间密切相关。
- Higher availability means less allowed downtime.
  - 可用性越高，允许的停机时间越少。
- Availability is often specified in terms of “number of nines”, such as 99%, 99.9%, 99.99%.
  - 可用性常用“几个 9”来表示，例如 99%、99.9%、99.99%。

## 第 24 页 Availability

- Fault
  - 故障根因，例如程序缺陷、硬件损坏或错误配置。
- Error
  - 错误状态，即系统内部已经出现不正确状态。
- Failure
  - 失效，即系统对外没有提供预期服务。
- A fault may lead to an error, and an error may lead to a failure.
  - fault 可能导致 error，error 可能进一步导致 failure。

## 第 25 页 Availability

- Detect failure.
  - 检测故障。
- Correct failure.
  - 修复故障。
- Restart application.
  - 重启应用。
- The total outage time includes the time spent in detection, correction, and restart.
  - 总不可用时间包括检测、修复和重启所花的时间。

## 第 26 页 Planning for Failure

- Planning for Failure
  - 为失败做计划。
- Systems fail.
  - 系统会失败。
- Architecture should assume failures and provide mechanisms to detect, recover, and continue service.
  - 架构应该假设故障会发生，并提供检测、恢复和继续服务的机制。

## 第 27 页 FMECA

- FMECA: Failure Mode, Effects, and Criticality Analysis.
  - FMECA：故障模式、影响和严重性分析。
- Failure mode
  - 故障模式，即系统可能怎样失败。
- Effects
  - 影响，即失败会造成什么后果。
- Criticality
  - 严重性，即这个失败有多关键。

## 第 28 页 Availability General Scenario

- Source of stimulus: internal or external to the system.
  - 刺激源：来自系统内部或系统外部。
- Stimulus: fault, omission, crash, incorrect timing, incorrect response.
  - 刺激：故障、遗漏、崩溃、时序错误、错误响应。
- Artifact: system's processors, communication channels, persistent storage, processes.
  - 制品：系统处理器、通信通道、持久化存储、进程等。
- Environment: normal operation, degraded mode, overloaded mode.
  - 环境：正常运行、降级模式、过载模式。
- Response: prevent the fault from becoming a failure, detect the fault, recover from the fault.
  - 响应：阻止 fault 变成 failure，检测故障，并从故障中恢复。
- Response measure: availability percentage, time to detect, time to repair, time interval in which system must be available.
  - 响应度量：可用性百分比、检测时间、修复时间、系统必须保持可用的时间区间。

## 第 29 页 Availability Sample Scenario

- A server crashes during normal operation.
  - 一台服务器在正常运行期间崩溃。
- The system detects the crash.
  - 系统检测到崩溃。
- The system restarts or switches to a redundant server.
  - 系统重启该服务，或切换到冗余服务器。
- The service is restored within the specified time.
  - 服务在规定时间内恢复。

## 第 30 页 Availability Tactics

- Fault Detection
  - 故障检测。
- Fault Recovery
  - 故障恢复。
- Fault Prevention
  - 故障预防。
- Availability tactics are intended to keep faults from becoming failures or to repair failures quickly.
  - 可用性战术的目的，是防止故障演变成失效，或者在失效发生后快速修复。

## 第 31 页 Fault Detection

- Ping / Echo
  - ping / 回声检测，用请求和回应检查组件是否存活。
- Monitor
  - 监控器，持续观察组件状态。
- Heartbeat
  - 心跳机制，周期性发送存活信号。
- Timestamp
  - 时间戳，用时间信息判断消息或状态是否过期。
- Sanity checking
  - 合理性检查，判断输出或状态是否明显异常。
- Voting
  - 投票，通过多个结果比较判断是否出错。
- Exception
  - 异常，通过异常机制报告错误。

## 第 32 页 Fault Recovery

- Active redundancy
  - 主动冗余：多个组件同时工作，主组件失败时可以立即继续。
- Passive redundancy
  - 被动冗余：备用组件保持同步或半同步，主组件失败后接管。
- Spare
  - 备用件：准备额外组件，在需要时启用。
- Exception handling
  - 异常处理。
- Rollback
  - 回滚到先前正确状态。
- Retry
  - 重试失败操作。
- Ignore faulty behavior
  - 忽略某些错误行为，继续运行。

## 第 33 页 Fault Recovery

- Preparation and repair
  - 准备与修复。
- Reconfiguration
  - 重新配置。
- Shadow operation
  - 影子运行，即新组件先并行运行但不接管真实输出。
- State resynchronization
  - 状态重新同步。
- Escalating restart
  - 逐级重启，从局部重启到更大范围重启。
- Non-stop forwarding
  - 不停机转发，在控制部分恢复时保持数据转发。

## 第 34 页 Fault Prevention

- Removal from service
  - 暂时移出服务。
- Transactions
  - 事务，用原子性避免中间错误状态。
- Process monitor
  - 进程监控器。
- Prevent faults by limiting, isolating, or repairing risky components before they fail.
  - 通过限制、隔离或提前修复高风险组件来预防故障。

## 第 35 页 Availability Checklist

- Checklist
  - 检查清单。
- Allocation of responsibilities
  - 职责分配：哪些组件负责检测、报告、恢复、降级和重启。
- Coordination model
  - 协调模型：组件如何通信，故障如何传播或被隔离。
- Data model
  - 数据模型：状态和数据如何保存，恢复时如何保持一致。

## 第 36 页 Availability Checklist

- Management of resources
  - 资源管理：是否有冗余资源、备用资源和恢复资源。
- Mapping among architecture elements
  - 架构元素映射：组件如何部署到节点，是否避免单点故障。
- Binding time decisions
  - 绑定时机决策：故障恢复策略是在设计时、部署时还是运行时决定。

## 第 37 页 Availability Checklist

- Choice of technology
  - 技术选择：使用什么监控、集群、备份、负载均衡、故障转移技术。
- The checklist helps verify that availability is supported by concrete architectural decisions.
  - 这个检查清单用于确认可用性确实被具体架构决策支持。

## 第 38 页 Interoperability

- Interoperability
  - 互操作性

## 第 39 页 Interoperability

- Interoperability is about the degree to which two or more systems can usefully exchange meaningful information.
  - 互操作性指两个或多个系统能够有用地交换有意义信息的程度。
- The systems must not only exchange data, but also understand and use the exchanged data.
  - 系统不仅要交换数据，还要理解并使用交换来的数据。

## 第 40 页 Interoperability

- It is not enough to connect systems.
  - 仅仅把系统连接起来是不够的。
- They need agreement on syntax, semantics, protocols, and expectations.
  - 它们还需要在语法、语义、协议和预期上达成一致。

## 第 41 页 Interoperability General Scenario

- Source of stimulus: another system.
  - 刺激源：另一个系统。
- Stimulus: request to exchange information.
  - 刺激：交换信息的请求。
- Artifact: system or systems that exchange information.
  - 制品：参与信息交换的一个或多个系统。
- Environment: runtime, design time, discovery time.
  - 环境：运行时、设计时、服务发现时。
- Response: locate the service, manage interface, exchange information, interpret information.
  - 响应：定位服务、管理接口、交换信息、解释信息。
- Response measure: percentage of information correctly exchanged, latency, effort to add new system.
  - 响应度量：正确交换的信息比例、延迟、接入新系统所需工作量。

## 第 42 页 Interoperability Sample Scenario

- Another system sends a request using a specified interface.
  - 另一个系统通过指定接口发送请求。
- The target system receives and interprets the request.
  - 目标系统接收并解释请求。
- The target system returns a response in the expected form.
  - 目标系统以预期格式返回响应。

## 第 43 页 Interoperability Tactics

- Locate
  - 定位：找到需要交互的服务或资源。
- Manage interfaces
  - 管理接口：定义、维护、版本化接口。
- Orchestrate
  - 编排：安排多个服务或系统之间的交互流程。
- Tailor interface
  - 定制接口：为不同调用方调整接口形式。

## 第 44 页 Interoperability Tactics

- Service discovery
  - 服务发现。
- Interface standardization
  - 接口标准化。
- Adapters and wrappers
  - 适配器和包装器。
- Data transformation
  - 数据转换。
- Mediation
  - 中介协调。

## 第 45 页 Interoperability Checklist

- Allocation of responsibilities
  - 职责分配：哪些组件负责外部通信、转换、协议处理。
- Coordination model
  - 协调模型：同步、异步、消息、事件或服务调用如何选择。
- Data model
  - 数据模型：交换数据的格式和语义如何定义。

## 第 46 页 Interoperability Checklist

- Management of resources
  - 资源管理：接口调用、连接、消息队列等资源如何管理。
- Mapping among architecture elements
  - 架构元素映射：接口组件部署在哪里，外部系统如何访问。
- Binding time decisions
  - 绑定时机决策：接口、服务位置、协议是在何时绑定。

## 第 47 页 Interoperability Checklist

- Choice of technology
  - 技术选择：选择 REST、SOAP、消息队列、RPC、数据格式、服务注册等技术。
- Interoperability should be checked across interface, data, protocol, and semantic levels.
  - 互操作性应从接口、数据、协议和语义多个层次检查。

## 第 48 页 Modifiability

- Modifiability
  - 可修改性

## 第 49 页 Modifiability

- Modifiability is about the cost of change.
  - 可修改性关注变化的成本。
- A change can be adding, deleting, or modifying functionality or quality attributes.
  - 变化可以是增加、删除或修改功能，也可以是改变质量属性。
- The goal is to make future changes easier, cheaper, and less risky.
  - 目标是让未来修改更容易、更便宜、风险更小。

## 第 50 页 Modifiability General Scenario

- Source of stimulus: developer, administrator, end user, or another system.
  - 刺激源：开发人员、管理员、最终用户或另一个系统。
- Stimulus: change request.
  - 刺激：变更请求。
- Artifact: code, data, interface, component, or configuration.
  - 制品：代码、数据、接口、组件或配置。
- Environment: design time, compile time, build time, deployment time, runtime.
  - 环境：设计时、编译时、构建时、部署时或运行时。
- Response: make the change and test it.
  - 响应：完成修改并测试。
- Response measure: cost, time, number of affected modules, defects introduced.
  - 响应度量：成本、时间、受影响模块数量、引入的缺陷数量。

## 第 51 页 Modifiability Sample Scenario

- A developer changes a business rule.
  - 开发人员修改一条业务规则。
- The change affects only one module.
  - 该修改只影响一个模块。
- The change is implemented and tested within the specified time.
  - 修改在规定时间内实现并测试完成。

## 第 52 页 Modifiability Tactics

- Reduce size of a module.
  - 减小模块规模。
- Increase cohesion.
  - 提高内聚。
- Reduce coupling.
  - 降低耦合。
- Defer binding.
  - 推迟绑定。
- Encapsulate.
  - 封装变化点。

## 第 53 页 Modifiability Tactics

- Maintain semantic coherence.
  - 保持语义一致性。
- Anticipate expected changes.
  - 预期可能发生的变化。
- Generalize the module.
  - 泛化模块。
- Limit possible options.
  - 限制可能选项，降低复杂性。
- Abstract common services.
  - 抽象公共服务。

## 第 54 页 Modifiability Checklist

- Allocation of responsibilities
  - 职责分配：把可能一起变化的职责放在一起，把不同变化原因分开。
- Coordination model
  - 协调模型：通信机制是否会放大变化影响。
- Data model
  - 数据模型：数据结构变化会影响多少模块。

## 第 55 页 Modifiability Checklist

- Management of resources
  - 资源管理：资源策略变化是否局部化。
- Mapping among architecture elements
  - 架构元素映射：部署或模块映射变化是否容易。
- Binding time decisions
  - 绑定时机决策：是否可以通过配置、插件、运行时绑定支持变化。

## 第 56 页 Modifiability Checklist

- Choice of technology
  - 技术选择：框架、语言、数据库、中间件是否限制未来修改。
- A highly modifiable architecture localizes change.
  - 高可修改性的架构会把变化局部化。

## 第 57 页 Performance

- Performance
  - 性能

## 第 58 页 Performance

- Performance is about timing.
  - 性能关注时间。
- It is concerned with how long it takes the system to respond to events.
  - 它关心系统响应事件需要多长时间。
- Performance also includes throughput, latency, deadlines, and resource usage.
  - 性能还包括吞吐量、延迟、截止时间和资源使用情况。

## 第 59 页 Performance General Scenario

- Source of stimulus: users or other systems.
  - 刺激源：用户或其他系统。
- Stimulus: event arrival, periodic event, or request.
  - 刺激：事件到达、周期性事件或请求。
- Artifact: system or component.
  - 制品：系统或组件。
- Environment: normal mode, overload mode, peak load.
  - 环境：正常模式、过载模式、峰值负载。
- Response: process events, change service level, maintain timing.
  - 响应：处理事件、改变服务级别、保持时间要求。
- Response measure: latency, deadline, throughput, jitter, miss rate.
  - 响应度量：延迟、截止时间、吞吐量、抖动、错过率。

## 第 60 页 Performance Sample Scenario

- A user request arrives during normal operation.
  - 用户请求在正常运行期间到达。
- The system processes the request.
  - 系统处理该请求。
- The system responds within the specified time.
  - 系统在规定时间内响应。

## 第 61 页 Performance Tactics

- Control resource demand.
  - 控制资源需求。
- Manage resources.
  - 管理资源。
- Reduce computational overhead.
  - 减少计算开销。
- Reduce communication overhead.
  - 减少通信开销。

## 第 62 页 Performance Tactics

- Increase resources.
  - 增加资源。
- Introduce concurrency.
  - 引入并发。
- Maintain multiple copies.
  - 维护多个副本。
- Bound queue sizes.
  - 限制队列大小。
- Schedule resources.
  - 调度资源。

## 第 63 页 Performance Checklist

- Allocation of responsibilities
  - 职责分配：哪些组件位于性能关键路径上。
- Coordination model
  - 协调模型：同步、异步、锁、消息是否影响性能。
- Data model
  - 数据模型：数据访问和数据结构是否造成瓶颈。

## 第 64 页 Performance Checklist

- Management of resources
  - 资源管理：CPU、内存、线程、连接、缓存如何分配和调度。
- Mapping among architecture elements
  - 架构元素映射：部署、网络、负载均衡是否支持性能目标。
- Binding time decisions
  - 绑定时机决策：调度策略、资源数量、缓存策略何时确定。

## 第 65 页 Performance Checklist

- Choice of technology
  - 技术选择：语言、框架、数据库、中间件和平台是否满足性能要求。
- Performance must be measurable.
  - 性能必须是可度量的。

## 第 66 页 Security

- Security
  - 安全性

## 第 67 页 Security

- Security is the measure of the system's ability to resist unauthorized usage while still providing its services to legitimate users.
  - 安全性衡量系统抵抗未授权使用，同时仍向合法用户提供服务的能力。
- Confidentiality
  - 机密性：防止未授权访问。
- Integrity
  - 完整性：防止未授权修改。
- Availability
  - 可用性：保证合法用户能够使用服务。

## 第 68 页 Security General Scenario

- Source of stimulus: attacker or authorized user.
  - 刺激源：攻击者或授权用户。
- Stimulus: attempt to access, modify, delete, or deny service.
  - 刺激：试图访问、修改、删除数据，或拒绝服务。
- Artifact: system services, data, or communication.
  - 制品：系统服务、数据或通信。
- Environment: online, offline, connected, disconnected, under attack.
  - 环境：在线、离线、已连接、未连接、遭受攻击。
- Response: authenticate, authorize, detect, resist, record, recover.
  - 响应：认证、授权、检测、抵抗、记录、恢复。
- Response measure: probability of detecting attack, time to detect, amount of data compromised.
  - 响应度量：检测攻击的概率、检测时间、被破坏的数据量。

## 第 69 页 Security Sample Scenario

- An unauthorized user attempts to access protected data.
  - 未授权用户试图访问受保护数据。
- The system rejects the request.
  - 系统拒绝该请求。
- The system records the attempt.
  - 系统记录这次尝试。
- The system notifies the appropriate authority if necessary.
  - 必要时系统通知相关负责人或机构。

## 第 70 页 Security Tactics

- Detect attacks.
  - 检测攻击。
- Resist attacks.
  - 抵抗攻击。
- React to attacks.
  - 响应攻击。
- Recover from attacks.
  - 从攻击中恢复。

## 第 71 页 Security Tactics

- Authenticate users.
  - 认证用户身份。
- Authorize users.
  - 授权用户操作。
- Maintain data confidentiality.
  - 维护数据机密性。
- Maintain integrity.
  - 维护完整性。
- Limit exposure.
  - 限制暴露面。
- Audit.
  - 审计。

## 第 72 页 Security Checklist

- Allocation of responsibilities
  - 职责分配：哪些组件负责认证、授权、加密、审计。
- Coordination model
  - 协调模型：安全信息如何在组件间传递。
- Data model
  - 数据模型：敏感数据如何表示、存储、加密和访问。

## 第 73 页 Security Checklist

- Management of resources
  - 资源管理：密钥、会话、权限、令牌如何管理。
- Mapping among architecture elements
  - 架构元素映射：安全边界、信任边界和部署边界如何对应。
- Binding time decisions
  - 绑定时机决策：权限、策略、密钥和配置何时绑定。

## 第 74 页 Security Checklist

- Choice of technology
  - 技术选择：加密算法、身份认证框架、安全协议、审计工具如何选择。
- Security often creates tradeoffs with usability, performance, and availability.
  - 安全性经常与易用性、性能和可用性产生权衡。

## 第 75 页 Testability

- Testability
  - 可测试性

## 第 76 页 Testability

- Testability refers to the ease with which software can be made to demonstrate its faults through testing.
  - 可测试性指软件通过测试暴露故障的容易程度。
- Testing requires controllability and observability.
  - 测试需要可控制性和可观察性。

## 第 77 页 Testability General Scenario

- Source of stimulus: tester, developer, or test tool.
  - 刺激源：测试人员、开发人员或测试工具。
- Stimulus: a test is executed.
  - 刺激：执行一次测试。
- Artifact: system, component, or unit.
  - 制品：系统、组件或单元。
- Environment: development time, compile time, deployment time, runtime.
  - 环境：开发时、编译时、部署时或运行时。
- Response: control state, observe output, isolate component.
  - 响应：控制状态、观察输出、隔离组件。
- Response measure: test coverage, time to run tests, probability of fault detection.
  - 响应度量：测试覆盖率、测试运行时间、发现故障的概率。

## 第 78 页 Testability Sample Scenario

- A tester executes a test case.
  - 测试人员执行一个测试用例。
- The system provides the necessary interface and state information.
  - 系统提供必要的接口和状态信息。
- The result can be observed and evaluated.
  - 测试结果可以被观察和评估。

## 第 79 页 Testability Tactics

- Control and observe system state.
  - 控制并观察系统状态。
- Limit complexity.
  - 限制复杂度。
- Separate concerns.
  - 分离关注点。
- Record and playback.
  - 记录与回放。

## 第 80 页 Testability Tactics

- Specialized interfaces.
  - 专用测试接口。
- Dependency injection.
  - 依赖注入。
- Assertions.
  - 断言。
- Logging.
  - 日志记录。
- Built-in monitors.
  - 内置监控器。

## 第 81 页 Testability Checklist

- Allocation of responsibilities
  - 职责分配：哪些组件负责暴露状态、控制输入和报告错误。
- Coordination model
  - 协调模型：测试如何控制组件间交互。
- Data model
  - 数据模型：测试数据如何创建、隔离和恢复。

## 第 82 页 Testability Checklist

- Management of resources
  - 资源管理：测试环境、模拟资源、外部依赖如何管理。
- Mapping among architecture elements
  - 架构元素映射：测试替身、测试服务、真实组件如何映射。
- Binding time decisions
  - 绑定时机决策：依赖是在编译时、部署时还是运行时替换。

## 第 83 页 Testability Checklist

- Choice of technology
  - 技术选择：测试框架、mock 框架、日志系统、监控工具如何选择。
- A testable architecture makes faults easier to expose and diagnose.
  - 可测试架构让故障更容易暴露和诊断。

## 第 84 页 Usability

- Usability
  - 易用性

## 第 85 页 Usability

- Usability is concerned with how easy it is for the user to accomplish a desired task and the kind of user support the system provides.
  - 易用性关注用户完成目标任务有多容易，以及系统向用户提供何种支持。
- Usability includes learning, efficiency, error prevention, error recovery, and satisfaction.
  - 易用性包括学习成本、效率、错误预防、错误恢复和满意度。

## 第 86 页 Usability General Scenario

- Source of stimulus: end user.
  - 刺激源：最终用户。
- Stimulus: user wants to learn, use, configure, or recover from error.
  - 刺激：用户想学习、使用、配置系统，或从错误中恢复。
- Artifact: system or user interface.
  - 制品：系统或用户界面。
- Environment: normal operation, error condition, first use.
  - 环境：正常运行、错误状态、首次使用。
- Response: provide feedback, help, undo, cancel, aggregate, or reuse.
  - 响应：提供反馈、帮助、撤销、取消、聚合或复用操作。
- Response measure: task time, error rate, number of operations, user satisfaction.
  - 响应度量：任务时间、错误率、操作次数、用户满意度。

## 第 87 页 Usability Sample Scenario

- A user makes a mistake.
  - 用户犯了一个错误。
- The system allows the user to undo the operation.
  - 系统允许用户撤销该操作。
- The system restores the previous state within the specified time.
  - 系统在规定时间内恢复到先前状态。

## 第 88 页 Usability Tactics

- Support user initiative.
  - 支持用户主动操作。
- Support system initiative.
  - 支持系统主动帮助。
- Maintain task model.
  - 维护任务模型。
- Maintain user model.
  - 维护用户模型。

## 第 89 页 Usability Tactics

- Cancel.
  - 取消。
- Undo.
  - 撤销。
- Pause / resume.
  - 暂停 / 恢复。
- Aggregate.
  - 聚合操作。
- Show progress.
  - 显示进度。
- Maintain system model.
  - 维护系统模型。

## 第 90 页 Usability Checklist

- Allocation of responsibilities
  - 职责分配：哪些组件负责用户状态、任务状态、撤销和反馈。
- Coordination model
  - 协调模型：前端、后端和后台任务如何协同支持用户操作。
- Data model
  - 数据模型：是否保存历史状态、用户偏好和任务上下文。

## 第 91 页 Usability Checklist

- Management of resources
  - 资源管理：长任务、后台任务和用户会话如何管理。
- Mapping among architecture elements
  - 架构元素映射：用户界面、服务和状态存储如何映射。
- Binding time decisions
  - 绑定时机决策：用户偏好、语言、主题、帮助策略何时绑定。

## 第 92 页 Usability Checklist

- Choice of technology
  - 技术选择：UI 框架、状态管理、可访问性工具、通知机制如何选择。
- Usability may require architectural support, not just interface design.
  - 易用性可能需要架构支持，而不仅仅是界面设计。

## 第 93 页 X-ability

- X-ability
  - X-能力，即各种以 ability 结尾的质量属性。
- Scalability
  - 可扩展性。
- Portability
  - 可移植性。
- Maintainability
  - 可维护性。
- Reusability
  - 可复用性。

## 第 94 页 Quality Attributes & Tactics

- Quality Attributes & Tactics
  - 质量属性与战术。
- Each quality attribute can be characterized by scenarios.
  - 每个质量属性都可以用场景来刻画。
- Tactics are design decisions that help achieve quality attribute responses.
  - 战术是帮助实现质量属性响应的设计决策。
- Quality attributes often involve tradeoffs.
  - 质量属性之间经常存在权衡。

## 第 95 页 Architecturally Significant Requirements

- Architecturally Significant Requirements
  - 架构显著需求。

## 第 96 页 Architecturally Significant Requirements

- Not all requirements are architecturally significant.
  - 并不是所有需求都具有架构显著性。
- An architecturally significant requirement is a requirement that has a measurable effect on a software system's architecture.
  - 架构显著需求是指会对软件系统架构产生可度量影响的需求。
- ASRs include important quality attributes, constraints, core functions, and high-risk requirements.
  - ASR 包括重要质量属性、约束、核心功能和高风险需求。

## 第 97 页 Gathering ASRs from Requirements Documents

- Gathering ASRs from Requirements Documents
  - 从需求文档中收集架构显著需求。
- Look for quality attributes.
  - 寻找质量属性。
- Look for constraints.
  - 寻找约束。
- Look for requirements that imply architectural decisions.
  - 寻找暗示架构决策的需求。

## 第 98 页 Gathering ASRs by Interviewing Stakeholders

- Gathering ASRs by Interviewing Stakeholders.
  - 通过访谈利益相关者收集 ASR。
- QAW: Quality Attribute Workshop.
  - QAW：质量属性工作坊。
- Stakeholders discuss business goals, quality attribute scenarios, and priorities.
  - 利益相关者讨论业务目标、质量属性场景和优先级。

## 第 99 页 Capturing ASRs in a Utility Tree

- Utility Tree
  - 效用树。
- A utility tree organizes quality attributes and scenarios.
  - 效用树用于组织质量属性和质量场景。
- It records importance and difficulty.
  - 它记录重要性和实现难度。
- It helps prioritize architectural work.
  - 它帮助确定架构工作的优先级。

## 第 100 页 Working with ASRs

- Working with ASRs
  - 使用 ASR 开展工作。
- ASRs guide architectural design.
  - ASR 指导架构设计。
- ASRs should be discovered, documented, prioritized, and revisited.
  - ASR 应该被发现、记录、排序，并在后续持续回顾。

## 第 101 页 ASRs in TraceLab

- ASRs in TraceLab
  - TraceLab 中的 ASR。
- TraceLab is used as an example system.
  - TraceLab 被用作示例系统。
- Different stakeholders have different architecturally significant concerns.
  - 不同利益相关者有不同的架构显著关注点。

## 第 102 页 Competing Tradeoffs

- Competing Tradeoffs
  - 相互竞争的权衡。
- Stakeholders may value different quality attributes.
  - 利益相关者可能重视不同的质量属性。
- Improving one quality attribute can hurt another.
  - 改善一个质量属性可能会损害另一个质量属性。

## 第 103 页 Traditional HCI Personas

- Traditional HCI Personas
  - 传统人机交互用户画像。
- Personas describe representative users.
  - Persona 描述有代表性的用户。
- They include goals, skills, contexts, and frustrations.
  - 它们包括目标、技能、使用情境和痛点。

## 第 104 页 Architecturally-Savvy Personas

- Architecturally-Savvy Personas
  - 具有架构意识的用户画像。
- These personas highlight concerns that are relevant to architecture.
  - 这些 persona 会突出与架构相关的关注点。
- They help discover ASRs.
  - 它们帮助发现 ASR。

## 第 105 页 Meet Karly

- Meet Karly.
  - 认识 Karly。
- Karly represents a stakeholder with specific goals and concerns.
  - Karly 代表一类具有特定目标和关注点的利益相关者。
- Her concerns can be translated into quality attribute scenarios.
  - 她的关注点可以转化为质量属性场景。

## 第 106 页 Meet Jack

- Meet Jack.
  - 认识 Jack。
- Jack represents another stakeholder perspective.
  - Jack 代表另一种利益相关者视角。
- His goals may lead to different ASRs and tradeoffs.
  - 他的目标可能导向不同的 ASR 和权衡。

## 第 107 页 Meet the Full Ensemble

- Meet the Full Ensemble.
  - 认识完整的 persona 群体。
- A set of personas gives a broader view of stakeholder concerns.
  - 一组 persona 能更全面地展示利益相关者关注点。
- The ensemble helps avoid designing for only one type of user.
  - 这个群体有助于避免系统只为某一类用户设计。

## 第 108 页 Understand Key Concerns

- Understand Key Concerns.
  - 理解关键关注点。
- Identify what each persona cares about.
  - 识别每个 persona 关心什么。
- Translate concerns into architectural drivers.
  - 把关注点转化为架构驱动因素。

## 第 109 页 Design Solutions for Key Concerns

- Design Solutions for Key Concerns.
  - 为关键关注点设计解决方案。
- Candidate solutions should address the concerns discovered from personas.
  - 候选解决方案应该回应从 persona 中发现的关注点。
- Solutions may include plugins, workflows, services, access control, caching, or other architectural mechanisms.
  - 解决方案可能包括插件、工作流、服务、访问控制、缓存或其他架构机制。

## 第 110 页 Architectural Design

- Architectural Design.
  - 架构设计。
- Architectural design turns ASRs into design decisions.
  - 架构设计把 ASR 转化为设计决策。
- Decisions include structure, responsibilities, interfaces, technologies, and deployment.
  - 决策包括结构、职责、接口、技术和部署。

## 第 111 页 Decision 2: Workflow Architecture Options

- Decision 2: Workflow Architecture Options.
  - 决策 2：工作流架构选项。
- Different workflow architectures support different levels of modifiability and usability.
  - 不同工作流架构支持不同程度的可修改性和易用性。
- A hard-coded workflow is simpler but less flexible.
  - 硬编码工作流更简单，但灵活性更差。
- A configurable or plugin-based workflow is more flexible but more complex.
  - 可配置或插件式工作流更灵活，但更复杂。

## 第 112 页 Decision 2 Diagram

- Workflow architecture options
  - 工作流架构选项。
- The diagram compares alternative structures.
  - 图中比较了不同结构方案。
- The purpose is to reason about tradeoffs.
  - 目的是分析权衡。

## 第 113 页 SCRUM + ASPs

- SCRUM + ASPs
  - SCRUM 与架构敏感 persona 的结合。
- ASPs: Architecturally-Savvy Personas.
  - ASPs：具有架构意识的用户画像。
- ASPs can be used in agile iterations to keep architectural concerns visible.
  - ASP 可以在敏捷迭代中使用，让架构关注点持续可见。
- They help teams discover, prioritize, and revisit ASRs.
  - 它们帮助团队发现、排序并持续回顾 ASR。

