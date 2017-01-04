import test from 'tape'
import { getVal, humpsObj } from '../src/lodash-humps'

test('getVal', (t) => {
  t.equal(getVal('foo bar'), 'foo bar', 'non object')
  t.deepEqual(getVal({ foo_bar: 'under score' }), { fooBar: 'under score' }, 'object')
  t.end()
})
test('humpsObj', (t) => {
  t.deepEqual(humpsObj({ foo_bar: 'under score' }), { fooBar: 'under score' }, 'basic')
  t.end()
})
