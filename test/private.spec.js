import test from 'tape'
import { getVal, objIteratee } from '../src/lodash-humps'
import { basicObj, basicRes } from './mock'

test('getVal', (t) => {
  t.equal(getVal('foo bar'), 'foo bar', 'non object')
  t.deepEqual(getVal(basicObj), basicRes, 'object')
  t.end()
})
test('objIteratee', (t) => {
  t.deepEqual(objIteratee({}, 'under score', 'foo_bar'), { fooBar: 'under score' }, 'basic')
  t.deepEqual(objIteratee({}, basicObj, 'baz'), { baz: basicRes })
  t.end()
})
