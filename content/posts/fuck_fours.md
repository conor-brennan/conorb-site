+++
title = "F*** Fours - An Exploration"
date = 2026-03-24
summary = "What if we got rid of the number 4?"
main_image = "/images/fourgraph.png"  # optional
tags = ["math", "exploration"]
categories = ["Math Exploration", "Writing"]
+++

### Introduction

Here is a little thought I had the other day:

*If we got rid of the number 4, what would happen?*

Now, I don't mean that we switch to base 9 and use the symbols 0, 1, 2, 3, 5, 6, 7, 8, 9 for our numbers (though that would be a fun way to confuse people). My disdain for the number 4 runs deeper than this. I want to know what happens when we continue to do math as normal, but we remove all 4's from existence.

The clearest way of demonstrating what I mean is to look at doubling a number $n$. Normally, doubling $n$ gives us $2n$. We can write this as $n\mapsto 2n$ if you want to use some more fun math notation.

### Definition

What I am proposing, for lack of a better way of writing it, is that doubling $n$ instead gives us $n\mapsto 2n\cap\{0,1,2,3,5,6,7,8,9\}$. In English, you double $n$ and then cut out all of the resultant fours. For the sake of future shorthand, I will call this doubling function $d$.

Here are a few examples to help understand what it means to truly experience freedom from fours fury:
- $d(1)=2$: Double 1 to get 2. Nothing new here.
- $d(2)=0$: Double 2 to get 4, but we remove the 4 and are left with 0.
- $d(32)=6$: Double 32 to get 64, remove the 4 to get 6.
- $d(0)=0$. That one is pretty self explanatory.

Notice, by simplying culling fours from our figures, we no longer have a monotonically increasing function! In fact, repeated applications of $d$ don't necessarily increase the number.

### Chains

Check a few numbers by hand and you'll find that if you repeatedly apply $d$ to a number $n$, it seems to always collapse to 0, and rather quickly, too. Here is one of my favourite chains produced by a relatively small $n$:
- $19\xrightarrow{d} 38\xrightarrow{d} 76 \xrightarrow{d} 152 \xrightarrow{d} 30 \xrightarrow{d} 60 \xrightarrow{d} 120 \xrightarrow{d} 20 \xrightarrow{d} 0$.

I am using $a\xrightarrow{d}b$ instead of $d(a)=b$ above to make it easier to read and a bit more visually appealing. We see that 9 collapses to 0 after 8 applications of $d$. We can express this as $d^8(9)=d(d(d(d(d(d(d(d(9))))))))=0$. It's a fair bit cleaner that way.

Let's also define what a *chain* is now, even though I've already been using it. A chain is a sequence of numbers $n,d(n),d^2(n),...,d^c(n)$ where $c$ is the first value for which $d^c(n)=0$. The chain produced by 19 has length 8, as seen above. The length of the chain can be written as $c(n):=\min\{k\in\mathbf{N},d^k(n)=0\}$

We can also talk about the longest chain up to a certain number $n$, which is the longest chain that can be produced starting at some number $0\leq a\leq n$.

Here are the chains of the REAL one digit numbers.

| Digit | Chain length | Chain                     |
|:-----:|:------------:|:-------------------------:|
| 0     | 0            | 0                         |
| 1     | 2            | 1, 2, 0                   |
| 2     | 1            | 2, 0                      |
| 3     | 4 (ew)       | 3, 6, 12, 2, 0            |
| 5     | 3            | 5, 10, 20, 0              |
| 6     | 3            | 6, 12, 2, 0               |
| 7     | 3            | 7, 1, 2, 0                |
| 8     | 6            | 8, 16, 32, 6, 12, 2, 0    |
| 9     | 6            | 9, 18, 36, 72, 1, 2, 0    |

### An aside for art

Let's do something a bit more visually interesting for a moment and create a graph that shows all of these chains.

![A view of the doubling graph of starting numbers up to 19](/images/fuckfour_19.png)

This is what I call a "doubling graph" of the numbers 0 through 19. It shows the chains for numbers 0 through 19 and how they connect to each other. All of these numbers eventually reach 0.

In fact, the header image at the top of this page is a view of the doubling graph of the numbers 0 through 1000, and they all eventually collapse to 0, too.

### Hypothesis

After playing around with this for a while, I have come up with the following conjecture.

**Conjecture 1**: For all numbers $n$, repeated applications of $d$ will eventually cause it collapse to 0. In otherwords, for each $n\in \mathbf{N}$, there exists some $k\in\mathbf{N}$ such that $d^k(n)=0$.

This seems to be the case to me because it takes just over 3 doublings to gain a digit ($\log_2(10)\approx 3.322$) but only one unlucky occurrence of a 4 to lose a digit. The only counterexample to this conjecture, aside from some $n$ exploding to $\infty$, is if there were some loop where repeated applications of $d$ looped back around on itself. Essentially, that $d^k(n)=n$ for some $k>1$. The odds of this seem to me to be almost just as low as some $n$ managing to explode.

### An exhaustive search

I checked all numbers up to 100,000,000 with some fairly unoptimized Python code and found that every single one collapsed to 0 eventually. The longest chain in this search that I found was for 99,999,995 with a chain length of 28. The biggest number in this chain is $d^3(99999995)=1599999920$.

In my exploration, I noticed that the longest chain starting under $10^m$ is usually pretty close to $10^m$, as seen above with the longest chain I found in my exhaustive search, but with a few key exceptions. Here are the first few powers of 10 and their longest chain.

| Limit  | Longest chain | Starting number for longest chain |
|:------:|:-------------:|:---------------------------------:|
| $10^1$ | $6$           | $8$                               |
| $10^2$ | $12$          | $99$                              |
| $10^3$ | $12$          | $99$                              |
| $10^4$ | $17$          | $9999$                            |
| $10^5$ | $20$          | $99998$                           |
| $10^6$ | $22$          | $999999$                          |
| $10^7$ | $25$          | $9999998$                         |
| $10^8$ | $28$          | $99999995$                        |

The only instance we have here of $10^k$ and $10^{k+1}$ having the same longest chain is $10^2$ and $10^3$ with 99 being the longest in both cases. On a whim, I decided to check 999 and found that $c(99)=c(999)=22$. So, you could write that the starting number for the longest chain is indeed 999 rather than 99.

I wonder how long all the other chains for $10^k-1$ are?

| Starting number | Longest chain |
|:---------------:|:-------------:|
| $10^{1}-1$      | $6$           |
| $10^{2}-1$      | $12$          |
| $10^{3}-1$      | $12$          |
| $10^{4}-1$      | $17$          |
| $10^{5}-1$      | $20$          |
| $10^{6}-1$      | $22$          |
| $10^{7}-1$      | $25$          |
| $10^{8}-1$      | $28$          |
| $10^{9}-1$      | $30$          |
| $10^{10}-1$     | $36$          |
| $10^{11}-1$     | $36$          |
| $10^{12}-1$     | $41$          |
| $10^{13}-1$     | $44$          |
| $10^{14}-1$     | $46$          |

### Another hypothesis

The first few lengths here seem to line up with the longest chains from the previous table. That leads me to my next conjecture.

**Conjecture 2**: The longest chain produced by a starting number under $10^k$ is exactly the length of the chain produced by $10^k-1$. In other words, $c(n)\leq c(10^k-1)$ for all $n<10^k$.

This makes intuitive sense to me after playing around with a few of these, as 9 takes a while to start producing 4's.

### Conclusion and questions

I won't be proving either of these conjectures today, as fun as it was exploring this topic. The proofs (or proofs to the contrary) will be left as exercises for the reader.

All of the code I used to produce these figures and tables will be available on my GitHub. If you are reading this sentence, I have yet to upload it, but you can check out some of my other projects [on my GitHub page](https://github.com/conor-brennan).

Thanks for reading.