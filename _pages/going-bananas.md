---
title: Going bananas
parent: get-started.md    
---

Bananas won't go bananas, because
* they are yellow, and
* they taste good.

Let's put that into a table:

Banana property | Value
----------------|---------
Color           | Yellow
Taste           | Good
Mystical        | $$ ax^2 + bx + c = 0 $$
Goes bananas    | No

``` c#
public static UInt16 ReverseBytes(UInt16 value)
{
return (UInt16)((value & 0xFFU) << 8 | (value & 0xFF00U) >> 8);
}
```
