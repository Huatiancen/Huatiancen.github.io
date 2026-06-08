---
layout: post
title: 'Architecture2-3_quality attributes'
date: 2026-06-08 00:19 +0800
last_modified_at: 2026-06-08 00:19 +0800
tags: ['软件系统设计']
toc: true
---
# 质量属性与架构战术 Quality Attributes & Architecture Tactics

## 需求分类 Requirements

软件需求可以分成三类：

- **Functional Requirements 功能需求**
  - 描述系统必须做什么
  - 关注系统行为和功能价值
- **Quality Requirements / Quality Attributes 质量需求 / 质量属性**
  - 描述系统应该工作得多好
  - 是在功能之上的期望特征
- **Constraints 约束**
  - 已经预先确定的设计决策
  - 对架构师来说几乎没有自由度

一句话区分：

```text
Functional requirements: what the system must do
Quality requirements: how well the system should do it
Constraints: what decisions are already fixed
```

### 功能需求 Functional Requirements

功能需求说明：

- 系统必须做什么
- 系统如何为利益相关者提供价值
- 系统对外表现出的行为

例如：

```text
学生可以在线选课。
用户可以提交订单。
管理员可以审核申请。
```

功能性主要是系统完成预期工作的能力。它通常与内部结构相对独立，因为同一个功能可以用很多种结构实现。

### 质量需求 Quality Requirements

质量需求是系统整体的期望特征，也叫：

```text
quality attributes
质量属性
```

它们不是额外加在系统上的装饰，而是需要在软件开发全过程中持续考虑。

质量属性包括：

- availability 可用性
- interoperability 互操作性
- modifiability 可修改性
- performance 性能
- security 安全性
- testability 可测试性
- usability 易用性
- scalability 可扩展性
- portability 可移植性
- maintainability 可维护性

注意：

> 质量属性通常不完全依赖于设计，也不完全依赖于实现或部署，而是由架构、设计、实现、测试和运维共同影响。

课件里有一个很重要的说法：

```text
No retro-fitting quality.
质量不能靠后期补丁补出来。
```

意思是：不能先把功能写完，再临时加“高性能”“高安全”“高可用”。很多质量属性需要架构提前支持，例如高可用需要冗余和故障恢复，安全性需要认证、授权和审计，可修改性需要模块边界和抽象。

### 约束 Constraints

约束是自由度为 0 的设计决策。

也就是说，约束不是你可以随便选择的东西，而是已经被外部条件固定下来的决定。

例如：

- 必须使用某个数据库
- 必须部署在某个云平台
- 必须遵守某个法规
- 必须使用已有系统接口

约束通过接受已有设计决策并与其他受影响设计决策协调来满足。

### 非功能需求 NFRs

非功能需求：

```text
NFR = Non-functional Requirement
```

也可以叫：

```text
architectural requirement
架构需求
```

非功能需求很难通过“后期补丁”加进去，必须在任何设计决策中被考虑。

非功能需求可以分为两类：

- **Observable / External 可观察 / 外部质量**
  - 系统运行时能观察到
  - 如 performance, security, availability, usability
- **Not observable / Internal 不可观察 / 内部质量**
  - 系统运行时不直接被用户观察到
  - 如 modifiability, portability, reusability, testability

##  质量属性场景 Quality Attribute Scenarios

为了在架构层面评价一个质量属性，需要精确定义该质量属性。

质量属性场景是结构化描述质量需求的方法。

两类场景：

- **General Scenario 通用场景**
  - 与具体系统无关
  - 用来指导质量需求说明
- **Concrete Scenario 具体场景**
  - 与具体系统相关
  - 是通用场景在某个系统上的具体化

通用场景要转化为系统特定场景，才能真正用于某个项目。

为什么要用场景：

- “系统要高性能”太模糊
- “系统在正常负载下，用户查询请求 2 秒内返回”才可分析、可设计、可测试

所以质量属性场景的作用是把抽象质量要求变成可以验证的需求

### 六元素质量场景 Six Elements of Quality Attribute Scenario

质量属性场景通常包含六个元素：

| Element | 中文 | 含义 |
| --- | --- | --- |
| Source of Stimulus | 刺激源 | 产生刺激的人、系统或事件 |
| Stimulus | 刺激 | 需要系统响应的条件或事件 |
| Artifact | 制品 / 受影响对象 | 受到刺激影响的系统或系统部分 |
| Environment | 环境 | 刺激发生时系统所处状态 |
| Response | 响应 | 系统在刺激到达后采取的行为 |
| Response Measure | 响应度量 | 用于测试响应是否满足要求的可度量指标 |

记忆式：

```text
谁在什么环境下，对哪个系统部分发出什么刺激，系统如何响应，响应好坏怎么量化。
```

一个简化例子：

| 元素 | 示例 |
| --- | --- |
| Source of Stimulus | 用户 |
| Stimulus | 提交查询请求 |
| Artifact | 查询服务 |
| Environment | 正常负载 |
| Response | 返回查询结果 |
| Response Measure | 2 秒内返回 |

## 架构战术 Tactics

战术是影响系统响应控制的设计决策：

```text
A tactic is a design decision that influences the control of a quality attribute response.
```

多个战术组合起来可以形成：

```text
architectural strategy
架构策略
```

战术的作用：

- 帮助实现某个质量属性
- 控制质量属性响应
- 影响系统功能的实现方式
- 可能对其他质量属性产生正面或负面影响

## 七类架构设计决策 Seven Categories of Design Decisions

架构可以看成一组设计决策。

课程中给出七类设计决策：

- **Allocation of responsibilities 职责分配**
- **Coordination model 协调模型**
- **Data model 数据模型**
- **Management of resources 资源管理**
- **Mapping among architecture elements 架构元素映射**
- **Binding time decisions 绑定时机决策**
- **Choice of technology 技术选择**

## Quality Attributes & Tactics

<img src="https://hua-tian-cen.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2026-05-19%2000.39.16.png" alt="截屏2026-05-19 00.39.16" style="zoom:50%;" />

### 可用性 Availability

可用性是多数 IT 应用的关键需求

定义：

> 系统在需要使用时能够提供服务的比例。

常见指标：

```text
Availability = MTBF / (MTBF + MTTR)
```

其中：

- **MTBF = Mean Time Between Failures 平均故障间隔时间**
- **MTTR = Mean Time To Repair 平均修复时间**

有计划的关闭状态不会被计入可用性计算中

影响不可用时间的阶段：

- **detect** failure 检测故障
- **correct** failure 修复故障
- **restart** application 重启应用

提高可用性的策略：

- eliminate **single points of failure** 消除单点故障
  - 单点故障 系统中某个组件一旦出故障，整个系统或关键功能就会停止工作

- **replication** and **failover** 复制与故障转移
- automatic **detection** and restart 自动检测与重启

**可恢复性** Recoverability（以数据库为例）是指系统在发生故障后，能够恢复到原有或可接受的性能状态，并找回或修复受影响数据的能力 会影响可用性

相关概念：

- **Fault 故障根因**
- **Error 错误状态**
- **Failure 失效 / 服务未达到预期**
- **Outage 服务中断**

三者关系：

```text
Fault -> Error -> Failure
故障根因 -> 内部错误状态 -> 对外服务失效
```

例如：代码缺陷是 fault，内存中算出了错误结果是 error，用户最终看到错误页面是 failure。

### FMECA

```text
FMECA = Failure Mode, Effects, and Criticality Analysis
故障模式、影响和严重性分析
```

它用来分析：

- 系统可能以什么方式失败 failure mode
- 失败会造成什么影响 effects
- 这个失败有多关键 criticality

这属于“为失败做计划 planning for failure”的方法。架构设计不能假设系统永远不坏，而要提前考虑检测、隔离、恢复和降级。

#### Availability Tactics

可用性战术分为三类：

- **Detect faults 检测故障**

  - ping / echo
  - heartbeat
    - 组件定期发送“我还活着”的信号；如果超过一定时间没收到心跳，就认为组件故障，并触发报警、重启或故障切换
  - voting
    - 投票，通过多个冗余组件的计算结果进行比较；如果某个结果明显偏离多数结果，就判断该组件可能出错
  - exception
    - 通过异常机制检测运行时错误，例如非法输入、空指针、数据库连接失败、超时等

- **Recover from faults 故障恢复**

  - active redundancy 主动冗余
    - 所有冗余组件并行响应事件，并保持相同状态

    - 系统只采用其中一个组件的响应，其他响应被丢弃

    - 当某个组件故障时，可以快速切换到其他当前状态的组件，停机时间通常很短

  - passive redundancy 被动冗余
    - 一个主组件负责响应请求，并把状态更新同步给备用组件
    - 主组件故障后，备用组件先确认自己的状态足够新，再接管服务
  - spare 备用
    - 准备一个备用计算平台，用来替换多个可能故障的组件
    - 相比主动冗余和被动冗余，资源成本更低，但恢复速度通常更慢
  - shadow operation 影子运行
    - 故障组件修复后，先以“影子模式”运行一段时间
    - 它暂时不承担真实服务，只在后台模仿正常组件的行为
    - 确认其行为与正常组件一致后，再正式恢复服务
  - state re-synchronisation 状态重新同步
    - 被恢复的组件重新上线前，需要先把状态更新到最新
    - 主动冗余和被动冗余都需要保证恢复组件的数据、缓存、会话等状态足够新
  - checkpoint / rollback 检查点 / 回滚
    - checkpoint 是对系统某个一致状态的记录
    - 可以定期创建，也可以在特定事件发生时创建
    - 如果后续发生故障，可以 rollback 到之前保存的稳定状态

- **Prevent faults 预防故障**

  - removal from service 移出服务
    - 在预计某个组件可能发生故障之前，先把它从系统运行中移除

    - 移除后可以进行维护、更新、检查或替换

    - 目的是在故障真正发生前降低风险

  - transaction 事务

    - 把多个连续步骤绑定成一个整体
    - 如果其中某一步失败，整个操作可以一次性撤销
    - 常用于数据库场景，保证数据一致性

  - process monitor 进程监控

    - 当检测到某个进程故障后，监控进程可以识别这个不可工作的进程
    - 然后创建一个新的进程实例，并把它初始化到合适状态
    - 类似于自动重启或自动拉起服务

#### Availability Scenario 模板

| Element | Availability 中的典型内容 |
| --- | --- |
| Source | 内部组件、外部系统、用户、运维环境 |
| Stimulus | fault、crash、omission、incorrect response |
| Artifact | 处理器、进程、通信通道、存储 |
| Environment | 正常运行、降级模式、过载模式 |
| Response | 检测、记录、通知、恢复、降级 |
| Measure | 检测时间、修复时间、可用性百分比 |

例子

<img src="https://hua-tian-cen.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2026-05-19%2001.07.13.png" alt="截屏2026-05-19 01.07.13" style="zoom:50%;" />

### 互操作性 Interoperability

互操作性描述：

> 两个或多个系统在特定上下文中，通过接口有用地交换信息的程度。

它包括两个层面：

- **syntactic interoperability 语法互操作**
  - 能交换数据
- **semantic interoperability 语义互操作**
  - 能正确解释数据

互操作性需要识别：

```text
with whom, with what, under what circumstances
和谁、交换什么、在什么情况下交换
```

两个重要方面：

- **Discovery 发现**
  - 服务消费者发现服务位置、身份和接口
- **Handling of response 响应处理**
  - 报告给请求者
  - 发送给其他系统
  - 广播给感兴趣方

#### Interoperability Tactics

互操作性战术：

- **Locate 定位**

  - discovery service 发现服务
    - 通过查询已知的目录服务来定位某个服务
    - 常用于服务发现、注册中心、微服务调用等场景
    - 可以存在多层间接寻址，即客户端不直接依赖具体服务地址，而是先通过目录或注册中心查找

- **Manage interfaces 管理接口**

  - orchestrate 编排
    - 使用一个控制机制来协调、管理并安排特定服务的调用顺序
    - 适合多个服务需要按一定流程协同工作的场景
    - 例如订单流程中依次调用库存服务、支付服务、物流服务

  - tailor interface 裁剪接口
    - 向接口中添加或移除某些能力
    - 目的是让接口更适合特定使用场景，避免客户端暴露在过多或不合适的功能之下
    - 可以理解为根据需求调整接口能力，使接口更轻量、更匹配调用方

#### Interoperability Scenario 模板

| Element | Interoperability 中的典型内容 |
| --- | --- |
| Source | 另一个系统 |
| Stimulus | 请求交换信息 |
| Artifact | 参与交换的系统或接口 |
| Environment | 运行时、设计时、服务发现时 |
| Response | 定位服务、交换信息、解释信息 |
| Measure | 正确交换比例、延迟、接入新系统成本 |

例子

<img src="https://hua-tian-cen.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2026-05-19%2001.17.30.png" alt="截屏2026-05-19 01.17.30" style="zoom:50%;" />

### 可修改性 Modifiability

可修改性关注：

> 进行修改所需要的时间或金钱成本，以及修改会影响到的范围。

修改成本不仅包括代码修改，也包括理解、测试、部署和风险。

规划可修改性的四个问题：

- What can change? 什么可能变化？
- What is the likelihood of the change? 变化可能性多大？
- When is the change made and who makes it? 何时变化，由谁变化？
- What is the cost of the change? 变化成本是多少？

如果变化代价低，则昂贵的可修改性机制未必值得。

#### Modifiability Tactics

可修改性战术：

- **Reduce size of a module 减小模块大小**
  - split module 拆分模块
    - 如果被修改的模块包含大量功能或能力，修改成本通常会很高
    - 可以将大模块拆分成更小、更专一的模块，降低单次修改的影响范围
- **Increase cohesion 提高内聚**
  - increase semantic coherence 提高语义一致性
    - 如果模块中的职责 A 和职责 B 并不是为了同一个目的服务，就应该把它们放到不同模块中
    - 可以通过创建新模块，或把某个职责移动到已有的合适模块中，提高模块内部职责的一致性
- **Reduce coupling 降低耦合**
  - encapsulate 封装
    - 为模块引入明确的接口
    - 外部通过接口访问模块，而不是直接依赖模块内部实现
    - 可以降低一个模块变化传播到其他模块的可能性
  - use an intermediary 使用中介
    - 在两个模块之间加入中间层，打断直接依赖关系
    - 常见形式包括适配器、代理、中介者、服务层、消息队列等
  - refactor 重构
    - 当两个模块总是因为同一种变化而同时受到影响时，说明模块划分可能不合理
    - 可以通过移动职责、提取公共逻辑、重新划分模块边界来降低耦合
- **Defer binding 延迟绑定**
  - 把某些参数、配置或实现选择的绑定时间推迟到生命周期中更晚的阶段，也就是不要在最初定义时就固定死，而是在部署、启动、运行时再决定
  - 常见方式包括配置文件、插件机制、依赖注入、运行时参数、服务发现等

#### Modifiability Scenario 模板

| Element | Modifiability 中的典型内容 |
| --- | --- |
| Source | 开发人员、管理员、用户、外部系统 |
| Stimulus | 变更请求 |
| Artifact | 代码、接口、数据、配置、组件 |
| Environment | 设计时、编译时、部署时、运行时 |
| Response | 完成修改并测试 |
| Measure | 修改时间、成本、影响模块数、引入缺陷数 |

例子

<img src="https://hua-tian-cen.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2026-05-19%2001.37.11.png" alt="截屏2026-05-19 01.37.11" style="zoom:50%;" />

### 性能 Performance

性能关注：

> 时间以及软件系统满足时序要求的能力。

所有系统都有性能需求，即使没有显式写出来。

响应时间由两部分构成：

- **processing time 处理时间**
  - 系统正在处理响应
- **blocked time 阻塞时间**
  - 系统无法响应

#### Performance Tactics

性能战术分为两类

- **Control resource demand 控制资源需求** 需求侧
  - manage sampling rate 管理采样率
    - 降低采样频率，减少系统需要处理的数据量
    - 适合传感器数据、监控数据、日志数据等高频输入场景
  - limit event response 限制事件响应
    - 当离散事件到达系统的速度过快，超过系统处理能力时，需要先将事件放入队列
    - 系统按照自身处理能力逐步处理事件，避免瞬时压力压垮系统
  - prioritize events 事件优先级排序
    - 如果不是所有事件都同等重要，就优先处理关键事件
    - 低优先级事件可以延后处理、降级处理或丢弃
    - 例如支付请求优先于普通日志上传，故障告警优先于统计任务
  - reduce overhead 降低额外开销
    - 使用中间件或中介机制，减少处理事件流时的资源消耗
    - 例如减少重复计算、减少不必要的数据转换、减少通信开销
    - 目标是让更多资源用于真正的业务处理
- **Manage resources 管理资源** 供给侧
  - increase resources 增加资源
    - 增加更快的处理器、更多内存、更快网络或更多机器
    - 这是最直接的性能提升方式，但通常会增加硬件或云资源成本
  - introduce concurrency 引入并发
    - 如果请求可以并行处理，就通过多线程、多进程、异步任务等方式提高吞吐量
    - 适合任务之间依赖较弱、可以并行执行的场景
  - maintain multiple copies of computations 维护多个计算副本
    - 使用多个重复服务器处理计算任务
    - 通过负载均衡器把新的工作分配给可用的副本服务器
    - 可以提高吞吐量，也能增强一定的可用性
  - maintain multiple copies of data 维护多个数据副本
    - caching 缓存
      - 将常用数据保存到更靠近请求方或访问更快的位置
      - 减少重复计算和数据库访问，提高响应速度
  
    - data replication 数据复制
      - 将数据复制到多个节点
      - 可以分担读请求压力，也可以提高容错能力
      - 代价是需要处理数据一致性和同步开销

#### Performance Scenario 模板

| Element | Performance 中的典型内容 |
| --- | --- |
| Source | 用户、外部系统、定时器 |
| Stimulus | 请求到达、事件流、周期事件 |
| Artifact | 系统、服务、组件 |
| Environment | 正常负载、峰值负载、过载 |
| Response | 处理事件、返回结果、调整服务级别 |
| Measure | latency、deadline、throughput、jitter、miss rate |

例子

<img src="https://hua-tian-cen.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2026-05-19%2001.39.46.png" alt="截屏2026-05-19 01.39.46" style="zoom:50%;" />

### 安全性 Security

安全性衡量系统保护数据和信息、防止未授权访问，同时仍为授权用户提供访问的能力。

CIA 三要素：

- **Confidentiality 机密性**
  - 数据和服务免受未授权访问
- **Integrity 完整性**
  - 数据和服务不被未授权篡改
- **Availability 可用性**
  - 系统可供合法用户使用

#### Security Tactics

安全性战术分为四类

- **Detect attacks 检测攻击**
  - detect intrusion 检测入侵
    - 通过比较网络流量、服务请求模式与已知攻击特征或正常行为模式，判断系统是否遭到入侵
    - 常见方式包括入侵检测系统、异常流量检测、日志审计等
  - detect service denial 检测服务拒绝
    - 检测系统是否遭到拒绝服务攻击
    - 例如请求量异常升高、响应时间急剧变长、资源被大量占用等
  - verify message integrity 验证消息完整性
    - 使用校验和、哈希值等方式验证消息是否被篡改
    - 如果接收方计算出的值与发送方提供的值不一致，说明消息可能被修改过
- **Resist attacks 抵抗攻击**
  - identify actors 识别行为者
    - 识别系统外部输入的来源
    - 判断请求来自哪个用户、设备、服务或外部系统
  - authenticate actors 认证行为者
    - 验证行为者是否真的是其声称的身份
    - 常见方式包括密码、验证码、令牌、数字证书、多因素认证等
  - authorize actors 授权行为者
    - 判断行为者是否有权限访问或修改某些数据、服务或资源
    - 认证回答“你是谁”，授权回答“你能做什么”
  - limit access 限制访问
    - 限制对计算资源、数据资源或服务资源的访问
    - 例如最小权限原则、访问控制列表、角色权限控制等
  - limit exposure 限制暴露面
    - 通过减少系统攻击面来降低被攻击概率
    - 例如关闭不必要端口、隐藏内部服务、减少公开 API、隔离敏感模块等
  - encrypt data 加密数据
    - 对数据进行加密，防止数据在传输或存储过程中被窃取后直接泄露
    - 常见场景包括 HTTPS、数据库加密、文件加密、密钥管理等
- **React to attacks 响应攻击**
  - revoke access 撤销访问权限
    - 当攻击正在发生时，撤销对敏感资源的访问权限
    - 例如禁用异常账号、吊销 token、关闭会话、移除访问密钥等
- **Recover from attacks 从攻击中恢复**

#### Security Scenario 模板

| Element | Security 中的典型内容 |
| --- | --- |
| Source | 攻击者、授权用户 |
| Stimulus | 访问、修改、删除、拒绝服务攻击 |
| Artifact | 数据、服务、通信链路 |
| Environment | 在线、离线、被攻击、正常运行 |
| Response | 认证、授权、检测、抵抗、记录、恢复 |
| Measure | 检测概率、检测时间、受损数据量 |

例子

<img src="https://hua-tian-cen.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2026-05-19%2001.51.37.png" alt="截屏2026-05-19 01.51.37" style="zoom:50%;" />

### 可测试性 Testability

可测试性描述：

> 软件通过测试展示其故障的容易程度。

如果系统要可测试，就必须能够：

- **control inputs** 控制输入
- **observe outputs** 观察输出

可测试性不只是测试人员的问题，它受到架构结构、接口、依赖、状态可观察性和复杂度的影响

#### Testability Tactics

可测试性战术分为两类

- **Control and observe system state 控制并观察系统状态**
  - specialized interfaces 专用接口
    - 为测试提供专门的接口，用来控制组件状态或捕获组件内部值
    - 例如暴露测试 API、调试接口、状态查询接口等
    - 目的是让测试者能够设置、观察或验证系统内部状态
  - record / playback 记录 / 回放
    - 记录导致故障或特定行为的系统状态、输入序列或交互过程
    - 之后可以回放这些记录，重新创建故障或测试场景
    - 适合复现偶发 bug、并发问题、外部服务异常等难以稳定复现的问题
  - sandbox 沙箱
    - 将系统实例与真实环境隔离开，使测试可以安全进行
    - 测试中的操作不会影响真实用户、真实数据或生产环境
    - 适合实验性测试、破坏性测试、安全测试等场景
- **Limit complexity 限制复杂度**
  - limit structural complexity 限制结构复杂度，避免、减少或解决组件之间的依赖关系来降低结构复杂度，对外部环境的依赖应该尽量被隔离和封装
    - 可以限制一个类派生自多少个类，避免继承关系过于复杂
    - 可以限制继承树的深度，以及一个类的子类数量
    - 可以限制多态和动态调用，减少测试时需要覆盖的运行路径
  - limit nondeterminism 限制非确定性 尽量限制行为复杂度
    - 非确定性系统更难测试，因为相同输入不一定产生相同结果
    - 常见做法包括固定随机种子、控制时间来源、减少并发不确定性、隔离外部环境影响等

#### Testability Scenario 模板

| Element | Testability 中的典型内容 |
| --- | --- |
| Source | 测试人员、开发人员、测试工具 |
| Stimulus | 执行测试 |
| Artifact | 系统、组件、单元 |
| Environment | 开发时、构建时、部署时、运行时 |
| Response | 控制状态、观察输出、隔离组件 |
| Measure | 测试运行时间、覆盖率、故障发现概率 |

例子

![截屏2026-05-19 02.04.25](https://hua-tian-cen.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2026-05-19%2002.04.25.png)

### 易用性 Usability

易用性关注：

> 用户完成目标任务有多容易，以及系统提供何种用户支持。

易用性包括：

- learning system features 学习系统功能
- using a system efficiently 高效使用系统
- minimizing the impact of errors 减少错误影响
- adapting the system to user's needs 适配用户需求
- increasing confidence and satisfaction 提高信心和满意度

#### Usability Tactics

易用性战术分为两类

- **Support user initiative 支持用户主动性**
  - cancel 取消
    - 允许用户取消当前正在执行的操作
    - 适合误操作、操作时间过长或用户改变意图的场景
    - 例如取消文件上传、取消订单提交、取消搜索请求

  - undo 撤销
    - 系统需要保存足够的历史状态，使用户可以恢复到之前的状态
    - 允许用户纠正错误操作，降低误操作成本
    - 例如撤销删除、撤销编辑、撤销格式修改

  - pause / resume 暂停 / 恢复
    - 当用户启动了一个长时间运行的操作时，允许用户暂停并在之后恢复
    - 适合下载、上传、批处理、模型训练、长任务执行等场景
    - 可以提高用户对系统执行过程的控制感

  - aggregate 聚合
    - 将多个低层级对象聚合成一个组
    - 用户可以对整个组一次性执行操作，而不必逐个处理
    - 例如批量选择文件、批量删除邮件、批量修改图片属性

- **Support system initiative 支持系统主动性**
  - maintain task model 维护任务模型
    - 系统维护对当前任务的理解，判断用户正在尝试完成什么
    - 根据上下文主动提供帮助、建议或下一步操作
    - 例如表单填写提示、流程导航、自动补全下一步任务

  - maintain user model 维护用户模型
    - 系统维护对用户知识、经验、偏好和习惯的理解
    - 根据不同用户提供不同程度的帮助或界面呈现
    - 例如新手模式、专家模式、个性化推荐、记住用户偏好

  - maintain system model 维护系统模型
    - 系统维护对自身当前状态和预期行为的理解
    - 根据系统状态向用户提供合适反馈
    - 例如显示进度、提示系统忙碌、告知错误原因、预测操作完成时间

#### Usability Scenario 模板

| Element | Usability 中的典型内容 |
| --- | --- |
| Source | 最终用户 |
| Stimulus | 学习、操作、配置、误操作、恢复 |
| Artifact | 系统或用户界面 |
| Environment | 首次使用、正常使用、错误状态 |
| Response | 反馈、帮助、撤销、取消、恢复 |
| Measure | 完成时间、错误率、操作步数、满意度 |

例子

<img src="https://hua-tian-cen.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2026-05-19%2013.37.25.png" alt="截屏2026-05-19 13.37.25" style="zoom:50%;" />

### X-ability

许多质量属性常以 `-ability` 结尾，因此有时统称为：

```text
X-ability
```

## 架构显著需求 Architecturally Significant Requirements

```text
ASR = Architecturally Significant Requirement
```

ASR 是会对架构产生深刻影响的需求。

如果没有某个需求，架构可能会非常不同，那么这个需求就是 ASR。

更正式地说：

```text
An architecturally significant requirement is a requirement
that has a measurable effect on a software system's architecture.

架构显著需求是会对软件系统架构产生可度量影响的需求。
```

常见 ASR 来源：

- 关键质量属性，例如 availability、performance、security
- 关键约束，例如必须使用某种数据库或平台
- 核心功能，例如系统最核心的业务流程
- 高风险需求，例如技术不确定、性能压力大、安全影响大

识别 ASR 的方式：

- 从需求文档中收集
- 访谈利益相关者
- 理解业务目标
- 使用 utility tree 捕获 ASR

### 从需求文档收集 ASR

需求文档通常没有直接列出质量属性。

不能只靠需求文档表面文字来识别 ASR。架构师需要进一步追问、澄清和分析：哪些需求真的会影响架构决策

如果某个需求会影响关键架构设计决策，它就是 ASR。

### 访谈利益相关者收集 ASR

质量属性工作坊：

```text
QAW = Quality Attribute Workshop
```

步骤包括：

- QAW 介绍（QAW presentation and introductions）
- 业务使命介绍（Business mission presentation）
- 架构计划介绍（Architectural plan presentation）
- 识别架构驱动因素（Identification of architectural drivers）
- 场景头脑风暴（Scenario brainstorming）
- 场景合并（Scenario consolidation）
- 场景优先级排序（Scenario prioritization）
- 场景细化（Scenario refinement）

结果通常包括：

- 架构驱动因素列表
- 利益相关者优先排序后的质量属性场景

### Utility Tree

Utility Tree 用树形结构捕获质量属性和场景。

utility tree 是一种把抽象质量目标逐层拆成具体质量场景，并按重要性和风险排序的树状工具；它用来识别哪些需求是真正会影响架构的 ASR

例如根节点是：

```text
Utility
```

下面可以展开：

- Performance
- Modifiability
- Availability
- Security

每个质量属性再细分到具体场景和响应度量。

### Persona-Based Approach

一种基于人物画像的方法来探索 ASR

问题背景：

- 许多项目中，ASR 尤其是 NFR 不容易被清楚提出
- 许多需求规约和敏捷用户故事没有包含 ASR 相关内容

做法：

- 构建架构敏感人物画像
- 用人物画像表达冲突需求
- 从人物的目标和痛点中发现架构显著需求
- 辅助做架构设计决策和权衡

这种方法尤其适合：

- 多利益相关者系统
- 需求冲突明显的系统
- 架构决策需要解释和协商的系统

课件里的关键词：

```text
ASP = Architecturally-Savvy Persona
具有架构意识的人物画像
```

传统 HCI persona 主要关注用户目标、技能、情境和痛点；ASP 进一步强调这些用户画像背后的架构关注点，例如安全、性能、可修改性、工作流灵活性等。

还要注意：

```text
Competing tradeoffs
相互竞争的权衡
```

不同 persona 可能想要不同质量属性。例如普通用户想要易用性，管理员想要安全性，开发者想要可修改性。架构设计经常不是找一个“全都最好”的答案，而是在这些质量属性之间做权衡。

## 本讲重点总结 Key Takeaways

本讲核心是：

- 区分功能需求、质量需求和约束
- 用质量属性场景精确定义质量需求
- 用六元素模型描述质量场景
- 理解战术是实现质量属性的设计决策
- 掌握多个常见质量属性及其战术
- 理解 ASR 对架构的影响
- 能够从文档、访谈、业务目标和 utility tree 中识别 ASR

一句话记：

> 架构设计不是只实现功能，而是在约束下通过设计决策和战术，使系统满足关键质量属性。

## 高频英文术语 Glossary

| English Term | 中文 | 备注 |
| --- | --- | --- |
| Functional Requirement | 功能需求 | 系统必须做什么 |
| Quality Requirement | 质量需求 | 系统工作得多好 |
| Quality Attribute | 质量属性 | 系统期望特征 |
| Non-functional Requirement, NFR | 非功能需求 | 常指质量属性和约束 |
| Constraint | 约束 | 自由度为 0 的设计决策 |
| General Scenario | 通用场景 | 系统无关质量场景 |
| Concrete Scenario | 具体场景 | 系统特定质量场景 |
| Stimulus | 刺激 | 引起系统响应的事件 |
| Source of Stimulus | 刺激源 | 发出刺激的人或系统 |
| Artifact | 制品 | 受影响的系统或部分 |
| Environment | 环境 | 刺激发生时系统状态 |
| Response | 响应 | 系统行为 |
| Response Measure | 响应度量 | 可测试指标 |
| Tactic | 战术 | 控制质量响应的设计决策 |
| Architectural Strategy | 架构策略 | 一组战术的组合 |
| ASR | 架构显著需求 | Architecturally Significant Requirement |
| QAW | 质量属性工作坊 | Quality Attribute Workshop |
| Utility Tree | 效用树 | 捕获质量属性和场景 |
| Availability | 可用性 | 系统可服务比例 |
| Interoperability | 互操作性 | 系统间有效交换信息 |
| Modifiability | 可修改性 | 修改成本与影响范围 |
| Performance | 性能 | 满足时序要求的能力 |
| Security | 安全性 | 保护数据和服务 |
| Testability | 可测试性 | 通过测试暴露故障的容易程度 |
| Usability | 易用性 | 用户完成任务的容易程度 |
| MTBF | 平均故障间隔时间 | Mean Time Between Failures |
| MTTR | 平均修复时间 | Mean Time To Repair |
| Fault | 故障根因 | 导致 failure 的原因 |
| Error | 错误状态 | fault 和 failure 之间的状态 |
| Failure | 失效 | 系统无法提供预期服务 |
| Outage | 服务中断 | 服务不可用时段 |
