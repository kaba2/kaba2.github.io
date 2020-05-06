---
title: Splines
parent: geometry
---

This page discusses splines.

<!-- ### Motivation

NAPA uses [Coons patches](coons-patches). CAD software uses splines. This makes it difficult to transfer geometry back and forth between NAPA and other CAD software. Conversion between splines and Coons patches is lossy and approximate in both directions, and a good approximation in either direction requires a large number of patches. Present-day splines are able to solve a fundamental problem that was open for a long time: joining pieces of surface together, possibly smoothly, to form a single water-tight surface.

The problem with Coons patches is that:
* they are geometrically complicated, meaning that even if the boundary curves are cubic polynomials, the surface may have a very high polynomial degree, and 
* piecewise Coons patches do not naturally allow for smoothness beyond the first derivative. However, ship-design requires, apart from isolated features, curvature-continuity and slowly changing curvature ("fairness"). -->

## What are splines?

The purpose of a spline is to parametrize a piecewise smooth manifold (with boundary) by a finite amount of data. Until very recently, a spline meant exclusively a piecewise polynomial/rational. However, then it was discovered that the properties of polynomials which make splines "work" can be abstracted, and that there are other classes of functions which fit that abstraction ("Quasi Extended Chebyshev piecewise space"). Time will tell whether these other classes find use in CAD or some other applications. We will concentrate only on the traditional piecewise polynomial/rational splines. Even then the question of what exactly is a spline is open. There is no single concept of a spline, but many. Could piecewise Coons patches be called a spline? Probably not. The reason is that splines are associated with piecewise-polynomial-like behavior, where the degree of a piece is relatively low (e.g. <= 10). It is the simplicity of the pieces which makes their associated problems solvable.

Some of the things common to most splines are:

* A spline is a parametrization of a piecewise smooth manifold (with boundary) (curve, surface, region) by a finite amount of data.
* Parametrization data has a geometric interpretation:
    * as a control point (e.g. in Bezier curves), where the manifold is locally attracted towards the control point,
    * as a control vector (e.g. end-derivatives in Hermite curves), where the derivative on the manifold is locally attracted towards the control vector,
* Which manifolds the spline can describe depends on the spline.
* What smoothness the parametrization has depends on the spline. 
    * Each piece is usually infinitely differentiable.
        * e.g. polynomials; a single Bezier curve is infinitely differentiable
    * Smoothness varies where the pieces join together.
    * Some splines do not guarantee any continuity:
        * e.g. a sequence of independent Bezier curves.
    * Some splines guarantee continuity in position: C^0
        * e.g. a sequence of Bezier curves where subsequent curves share end-points.
    * Some splines may provide continuity in first derivative: C^1
        * e.g. a sequence of Hermite curves where subsequent curves share end-points and end-first-derivatives.
        * e.g. Catmull-Rom spline
        * e.g. Kochanek-Bartels spline
    * Some splines may provide continuity in all derivatives except the highest: C^{n - 1}
        * e.g. B-splines without multiple knots.
    * Some splines may provide explicit control over which derivatives are continuous.
        * e.g. B-splines with multiple knots.

## What is local refinement?

A spline is locally refinable if there is a way to add a control point in it such that:
* the shape is not changed, and
* the number of additional control points can be bounded by a number which is independent on the number of existing control points.
Ideally, addition of a control would not cause any other control point to be added, or at least keep their number minimal in some sense. An S-spline is an example of a spline which achieves this.

## What are some existing splines?

* NURBS, where the domain is a rectangular grid. This has long been a standard representation and interchange format in CAD software. There are problems with NURBS:
    * NURBS can only represent a rectangular patch. Hence, modeling a complicated shape requires to combine multiple NURBS patches, which represents difficulties in maintaining smoothness constraints at the joins. 
    * NURBS cannot be locally refined: adding a control point requires to add a whole column and row of control points to retain the rectangular grid structure.
* T-splines, where the domain is partitioned into rectangles.
    * T-spline is able to represent an arbitrary manifold.
    * T-spline can be locally refined.
    * There are many variations of T-splines:
        * Analysis-suitable (AS)
        * Analysis-suitable++ (AS++)
        * Truncated
        * Hierarchical
        * Manifold
        * Modified
        * Weighted
        * PH
* S-spline

## What are polynomials?

An _$$n$$-degree $$k$$-dimensional polynomial_ on a set $$X \subset \TR^d$$, where $$n \in \TN^d$$, is a function $$f : X \to \TR^k$$ for which there exists $$a : I_n \to \TR^k$$ such that 

$$f(x) = \sum_{i \in I_n} a_i x^i.$$ 

n | Expression
--|--------------
$$0$$ | $$ f(x_1) = a_0 x_1^0 $$
$$1$$ | $$ f(x_1) = a_1 x_1^1 + a_0 x_1^0 $$
$$2$$ | $$ f(x_1) = a_2 x_1^2 + a_1 x_1^1 + a_0 x_1^0 $$
$$(0, 0)$$ | $$ f(x_1, x_2) = a_{0,0} x_1^0 x_2^0 $$
$$(1, 1)$$ | $$ f(x_1, x_2) = a_{1,1} x_1^1 x_2^1 + a_{1,0} x_1^1 x_2^0 + a_{0,1} x_1^0 x_2^1 + a_{0,0} x_1^0 x_2^0 $$
$$(2, 1)$$ | $$ f(x_1, x_2) = a_{2,1} x_1^2 x_2^1 + a_{2,0} x_1^2 x_2^0 + a_{1,1} x_1^1 x_2^1 + a_{1,0} x_1^1 x_2^0 + a_{0,1} x_1^0 x_2^1 + a_{0,0} x_1^0 x_2^0 $$

The set of $$n$$-degree $$k$$-dimensional on set $$X$$ is denoted by $$\polys$$. Polynomials $$f, g \in \polys$$ can be added together and multiplied with a scalar $$\alpha \in \TR$$ by

$$(f + g)(x) = f(x) + g(x), $$

$$(\alpha f)(x) = \alpha f(x). $$


