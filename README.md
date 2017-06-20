# lodash-humps v3.1.0

Converting object keys to camelCase. Works on deeply nested objects/arrays. Handy for converting underscore keys to camelCase. Using lodash keeps the code small at around 15 lines.

## Install

```bash
$ npm i --save lodash-humps
```

## Usage

### Converting object keys

Defaults to remove any hyphens, underscores, whitespace characters, and uppercases the first character that follows. See `_.camelCase()` https://lodash.com/docs#camelCase and https://en.wikipedia.org/wiki/CamelCase.

````javascript
import humps from 'humps'

const object = { attr_one: 'foo', attr_two: 'bar', attr_three: { attr_one: 'foo' } }
humps(object) // { attrOne: 'foo', attrTwo: 'bar', attrThree: { attrOne: 'foo' } }
````

Arrays of objects are also converted:

````javascript
const array = [{ attr_one: 'foo' }, { attr_one: 'bar' }]
humps(array) // [{ attrOne: 'foo' }, { attrOne: 'bar' }]
````

### Custom key converter

What if you want to convert it back?!? See test/createHumps.spec.js for an example. Open an issue if you want a proper export.

````javascript
import createHumps from 'humps/lib/createHumps'
import { snakeCase } from 'lodash'

const snakes = createHumps(snakeCase)
const object = { attrOne: 'foo', attrTwo: 'bar', attrThree: { attrOne: 'foo' } }
snakes(object) // { attr_one: 'foo', attr_two: 'bar', attr_three: { attr_one: 'foo' } }
````

## Version 3 Changes

**NOTE:** Version 3.x will only work with objects created by the Object constructor. You may need to do something like `const result = humps({ ...SomeOtherClass })` to get humps to process your stuff. Functions properties are now kept and not converted to `{}`. Some might say this is a _bug_ and others might call it a _feature_. Full version bump so you can have your pick.

Internally switched from using `_.isObject` to `_.isPlainObject` before converting the keys and children objects.


## Prior Art

https://www.npmjs.com/package/humps
