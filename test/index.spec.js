import test from 'tape'
import humps from '../'
import { getVal, humpsObj, humpsArr } from '../src/lodash-humps'

test('getVal', t => {
  t.equal(getVal('foo'), 'foo', 'non object')
  t.deepEqual(getVal({ foo_bar: 'underscore' }), { fooBar: 'underscore' }, 'object')
  t.end()
})
test('humpsObj', t => {
  t.deepEqual(humpsObj({ foo_bar: 'underscore' }), { fooBar: 'underscore' }, 'basic')
  t.end()
})
test('humpsArr', t => {
  t.deepEqual(humpsArr([ { foo_bar: 'underscore' } ]), [ { fooBar: 'underscore' } ], 'basic')
  t.end()
})
test('humps', t => {
  t.equal(humps('some string_yo-dance around'), 'someStringYoDanceAround', 'strings')
  const before = {
    'space key': 'space', underscore_key: { another_one: 2 },
  }
  const after = {
    spaceKey: 'space', underscoreKey: { anotherOne: 2 },
  }
  t.deepEqual(humps(before), after, 'objects')
  t.end()
})
