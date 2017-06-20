# lodash-humps v3.0.0

This is basically https://github.com/domchristie/humps but depends on lodash. I think I read "copies some utility functions from Underscore.js" and decided to write a few line module that just uses lodash. Works on deeply nested objects/arrays. I love lodash.

## Install

```bash
$ npm i --save lodash-humps
```

## Usage

### Converting object keys

    const object = { attr_one: 'foo', attr_two: 'bar', attr_three: { attr_one: 'foo' } }
    humps(object) // { attrOne: 'foo', attrTwo: 'bar', attrThree: { attrOne: 'foo' } }

Arrays of objects are also converted

    const array = [{ attr_one: 'foo' }, { attr_one: 'bar' }]
    humps(array) // [{ attrOne: 'foo' }, { attrOne: 'bar' }]

## Version 3 Changes

**NOTE:** Version 3.x will only work with objects created by the Object constructor. You may need to do something like `const result = humps({ ...SomeOtherClass })` to get humps to process your stuff. Functions are now kept and not converted. Some might say this is a _bug_ and others might call it a _feature_. Full version bump so you can have your pick.

Internally switched from using `_.isObject` to `_.isPlainObject` before converting the keys and children objects. Switched to `_.isObjectLike` within the `getVal()`.
