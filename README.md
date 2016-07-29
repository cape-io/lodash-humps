# lodash-humps v2.0.0

This is basically https://github.com/domchristie/humps but depends on lodash. I think I read "copies some utility functions from Underscore.js" and decided to write a few line module that just uses lodash. Works on deeply nested objects/arrays. I love lodash.

## Install

```bash
$ npm i --save lodash-humps
```

## Usage

### Converting object keys

    const object = { attr_one: 'foo', attr_two: 'bar' }
    humps(object) // { attrOne: 'foo', attrTwo: 'bar' }

Arrays of objects are also converted

    const array = [{ attr_one: 'foo' }, { attr_one: 'bar' }]
    humps(array) // [{ attrOne: 'foo' }, { attrOne: 'bar' }]
