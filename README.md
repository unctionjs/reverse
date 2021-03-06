# @unction/reverse

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string

Takes an ordered enumerable type and returns the reverse version of it.

``` javascript
reverse([1, 2, 3]) // [3, 2, 1]
reverse("abc") // "cba"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/reverse.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/reverse.svg?maxAge=2592000&style=flat-square
