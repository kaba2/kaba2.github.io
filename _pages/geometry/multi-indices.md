---
title: Multi-indices
parent: mathematics.md
---

A _$$d$$-multi-index_ is an element of $$i \in \TN^d$$, where $$d \in \TN$$. For multi-indices $$i, j, n \in \TN^d$$, and $$x \in \TR^d$$, we define

Name | Symbol | Definition |Example
-----|--------|------------|-------
Dimension | $$\dim(n)$$ | $$d$$ | $$\dim((2, 3, 0)) = 3$$
Norm | $$\abs{i}$$ | $$ i_1 + \cdots + i_d $$ | $$ \abs{(2, 3, 0)} = 2 + 3 + 0 = 5$$
Power | $$ x^i $$ | $$ x_1^{i_1} \cdots x_d^{i_d} $$ | $$(x_1, x_2, x_3)^{(2, 3, 0)} = x_1^2 x_2^3 x_3^0$$
Factorial | $$ i! $$ | $$i_1! \cdots i_d! $$ | $$ (2, 3, 0)! = 2! 3! 0! $$
Multinomial | $$ \binom{n}{i} $$ | $$ \frac{n!}{i!} $$ | $$ \binom{5}{2, 3, 0} = \frac{5!}{2! 3! 0!} $$
Relations | $$ i \sim j $$ | $$ i_k \sim j_k $$ for each $$k$$ | $$ (1, 4) \leq (2, 3) \iff 1 \leq 2 \land 4 \leq 3 $$
Indices | $$ I_n $$ | $$\setb{i \in \TN^{\dim(n)} : i \leq n}$$ | $$ I_{(2, 1)} = \setb{(0, 0), (0, 1), (1, 0), (1, 1), (2, 0), (2, 1)}$$

A multi-index allows to represent monomials easily. Monomials can then be summed to produce polynomials. 

