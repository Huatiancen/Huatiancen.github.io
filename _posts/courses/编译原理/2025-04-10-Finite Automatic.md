---
layout: post
title: Finite  Automata
date: 2025-04-10 00:00 +0800
last_modified_at: 2025-04-10 00:00 +0800
tags: [编译原理]
toc:  true
---

# Finite  Automata

有限自动机

根据patterns查找Lexemes，并创建tokens

- Lexeme：一个字符序列。 
- Pattern：正则表达式（如果没有匹配的模式，则会出现词法错误）
- Token： <token类名，属性> 比如 60 为<number,60>

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-18%20214244.png)

形式语言与自动机理论

Regular Language是指正则语言

## Math Preliminaries

数学基础

Alphabet and Strings   字母表和字符串

A **string** is a sequence of letters defined over an **alphabet**

• string example: cat, dog, …

• alphabet example: ? = { a, b, c, d, …, z }

String Operations

- Concatenation 连接
- Reverse
- Length

Empty String $\epsilon$ and Sub-String 

Prefix and Suffix 前缀和后缀

Power 幂 字符串的重复 特别的 0次幂为$\epsilon$

Kleene Star 克林闭包 语言中所有字符串的任意次重复（包括零次）

- $\sum$ = {a, b}     $\sum$^*^ = {$\epsilon$,a,b,ab,abb,aab,........}

Plus 正闭包  $\sum$^+^ = $\sum$^*^ - {$\epsilon$}

Language   $\sum$^*^的任一子集

Complement 补集 $\overline{L}$ = $\sum$^*^ - L

Star-Closure 星号闭包 前面的字符或子表达式可以重复零次或多次 L*

Positive-Closure 正闭包 L^+^ =  L^*^ - {$\epsilon$}

## Deterministic Finite Automata

确定性有限自动机 DFA

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-19%20012220.png)



就是一个字符一个字符匹配，没匹配一次就进行一次状态转移，能走到最后就accept

DFA 是一个五元组 $(Q,\Sigma,\delta,q_0,F)$

- Q:有限状态集合

- $\Sigma$：有限字母集(不包括$\epsilon$)
- $\delta$:QX$\Sigma$->Q   *δ*(*q*,*a*)=*q*′  q指当前状态，a指输入字符 状态转移函数  $\delta$^*^是扩展状态转移函数 区别是输入的是字符串
- q~0~初始状态
- F 最终状态的有限子集

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-19%20014707.png)

**DFA Minimization**

- 有利于提高计算效率

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-19%20144911.png)

其实就是合并状态 可以看到q~0~和q~1~输入a/b后的状态属于一个集合里的

- 输入a 都在 {q~0~，q~1~}中
- 输入b都在{q~2~，q~3~，q~4~}中

所以这两个状态可以合并，q~5~则单独分离开

**DFA Bi-Simulation** 双模拟

- 用来判断两个DFA是否等价

- 给定两个DFA：M₁ = (Q₁, Σ, δ₁, q₀₁, F₁) 和 M₂ = (Q₂, Σ, δ₂, q₀₂, F₂)
- 建立一个关系 R ⊆ Q₁ × Q₂

- 两个状态 p∈Q₁ 和 q∈Q₂ 如果满足以下条件则被认为是双模拟的：
  - p是接受状态当且仅当q也是接受状态
  - 对所有输入符号a∈Σ，如果p通过a转移到p'，则q通过a必须转移到q'，且(p',q')∈R
  - 反之亦然：如果q通过a转移到q'，则p通过a必须转移到p'，且(p',q')∈R

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-19%20150720.png)

## Non-deterministic Finite Automata

NFA

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-19%20151150.png)

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-19%20151453.png)

NFA 是一个五元组 $(Q,\Sigma\cup\{\epsilon\},\delta,q_0,F)$

- Q:有限状态集合

- $\Sigma$：有限字母集(不包括$\epsilon$)

$\delta$:QX$\Sigma\cup\{\epsilon\}$->2^Q^  *δ*(*q*,*a*)={*q*′,*q*′′}  q指当前状态，a指输入字符 状态转移函数  $\delta$^*^是扩展状态转移函数 区别是输入的是字符串

- q~0~初始状态
- F 最终状态的有限子集

$\epsilon$-Closure 

- $\epsilon$-Closure(q)返回所有q能通过$\epsilon$到达的状态,包括q自身

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-19%20152515.png)

DFA和NFA的等价性

NFA可以通过子集构造法转化为DFA

NFA状态集合的一个集合是DFA的一个状态

![](https://huatiancen.oss-cn-nanjing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-03-19%20154328.png)

步骤1：初始化DFA

- **DFA的初始状态**：DFA的初始状态是NFA的初始状态 *q*0 的ε-closure（即通过ε转换可以到达的所有状态的集合）。记为 {*q*0}。

步骤2：处理每个DFA状态和字符

- **对于每个DFA状态**：每个DFA状态是一个NFA状态的集合，记为{qi,qj,…,qm}。
- **对于每个字符**：对于每个字符 *a*∈Σ，我们需要计算从当前DFA状态通过字符 *a* 可以到达的NFA状态集合。

具体计算方法如下：

1. **计算每个NFA状态通过字符 a 的转移**：对于DFA状态中的每个NFA状态 qk，计算 *δ*∗(qk,a)，即从 qk 通过字符 *a* 可以到达的所有NFA状态的集合。
2. **合并所有转移结果**：将所有 *δ*∗(*q**k*,*a*) 的结果合并成一个集合 *S*。

步骤3：添加转移

- **添加DFA转移**：将计算得到的集合 *S* 作为新的DFA状态，并添加转移 *δ*′({*qi*,*qj*,…,*qm*},*a*)