## [3.0.0]
> 2017-06-20

**NOTE:** Will only work with objects created by the Object constructor. You will need to do something like `const result = humps({ ...SomeOtherClass })` to get it process.

Switch from using `_.isObject` to `_.isPlainObject` before converting the keys and children objects. Switched to `_.isObjectLike` within the `getVal()` function. With version 2.0 function properties were converted to plain objects.

## [2.0.0]
> 2016-07-28

Drop support for passing a string. Use `_.camelCase()` instead.

## [1.1.1]
> 2016-07-19

Do not camelCase all values, only object values!

## [1.1.0]
> 2016-07-19

Yep, I was a little premature on the 1.0 release.
No longer need `require('lodash-humps').default`. See issue #2.
Thanks @jdalton for making the build process so much better.

## [1.0.0]
> 2016-07-19

Initial Release
