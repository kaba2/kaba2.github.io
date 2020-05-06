---
title: Coons patches
author: kaba
parent: geometry
---

A [Coons patch][Coons] is a way to obtain a smooth surface by filling in the space bounded by four boundary curves. There is more than one way to do this. Bicubically blended Coons patches, which are implemented in Napa, allow for the user to define the tangent vectors perpendicular to the boundary curves at every point. This is the origin of the curves' "side conditions" widely used in Napa. Coons patches allow to construct a piecewise smooth surface by interpolating curves, as is currently done in Napa. 

[Coons]: https://en.wikipedia.org/wiki/Coons_patch
