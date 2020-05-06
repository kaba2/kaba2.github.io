---
title: Vector spaces
parent: mathematics.md
---

A [_vector space_][VectorSpace] is a set $$X$$ together with two operations called _addition_ $$+ : X \times X \to X$$ and _scalar multiplication_ $$\cdot : \TR \times X \to X$$, which satisfy the following properties

[VectorSpace]: https://en.wikipedia.org/wiki/Vector_space

Property | Meaning
---------|--------
Additive associativity | $$ x + (y + z) = (x + y) + z $$
Additive commutativity | $$ x + y = y + x $$
Additive identity | $$ \exists 0 \in X: \forall x \in X: x + 0 = 0 + x $$
Additive inverse | $$\forall x \in X : \exists -x \in X: x + (-x) = 0$$
Multiplicative compatibility | $$\alpha \cdot (\beta \cdot x) = (\alpha \beta) \cdot v$$
Multiplicative identity | $$1 \cdot x = x$$
Additive distributivity 1 | $$\alpha \cdot (x + y) = \alpha \cdot x + \alpha \cdot y$$
Additive distributivity 2 | $$(\alpha + \beta) \cdot x = \alpha \cdot x + \beta \cdot x$$

where $$\alpha, \beta \in \TR, x, y, z \in X$$. The scalar multiplication is usually denoted by juxtaposition: $$\alpha x = \alpha \cdot x$$. The elements of of $X$ are called _vectors_.

For example, $$\TR^d$$ is a vector space with elementwise addition and multiplication. The polynomials $$\polys$$ also form a vector space.

### What is a span?

The _span_ of a a finite set of vectors $$B = \setb{b_i \in X : i \in I}$$ is the set of all linear combinations of the vectors in $$B$$:

$$\span{B} = \setb{\sum_{i \in I} \alpha_i b_i : \alpha \in \TR^I}$$

### What is linear independence?

A set of vectors $$B = \setb{b_i \in X : i \in I}$$ is _linearly independent_, if for any $$\alpha \in \TR^I$$ we have

$$\sum_{i \in I} \alpha_i b_i = 0 \implies \alpha = 0.$$

Linear independence of $B$ is equivalent to the statement that for any $$x \in \span{B}$$, there exists _unique_ $$\alpha \in \TR^I$$ such that $$x = \sum_{i \in I} \alpha_i b_i$$. Then $$\alpha$$ are called the _coordinates_ of $$x$$ with respect to $$B$$.

* $$\setb{(1, 0, 0), (0, 1, 0)}$$ is a linearly independent set in $$\TR^3$$.
* $$\setb{x \mapsto x^i : i \in I_m}$$ is a linearly independent set in $$\polys$$, where $$x \in \TR^d$$, $$m, n \in \TN^d$$, and $$m \leq n$$.

### What is a basis?

A _basis_ of a vector space $$X$$ is a linearly independent set of vectors $$B = \setb{x_i \in X : i \in I}$$ such that $$\span{B} = X$$. Then _every_ $$x \in X$$ has a _unique_ coordinate with respect to $$B$$. Every vector space has at least one basis. However, in general a vector space has multiple different bases.
