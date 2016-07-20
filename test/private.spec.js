import test from 'tape'
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
