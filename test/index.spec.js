import _ from 'lodash'
import test from 'tape'
import humps from '../'
import { basicObj, basicRes } from './mock'

test('humps', (t) => {
  const before = {
    'space key': 'space',
    underscore_key: basicObj,
    TXT: 'ONE MORE THING',
    foo_bar: 'underscore',
    tests: 'ASTM D 4157-13',
    contents: ['100% Acrylic'],
    'dispatch-func': _.noop,
  }
  const after = {
    spaceKey: 'space',
    underscoreKey: basicRes,
    txt: 'ONE MORE THING',
    fooBar: 'underscore',
    tests: 'ASTM D 4157-13',
    contents: ['100% Acrylic'],
    dispatchFunc: _.noop,
  }
  t.equal(humps('some string_yo'), 'some string_yo', 'no string processing')
  t.deepEqual(humps(before), after, 'objects')
  t.deepEqual(humps([before, before]), [after, after], 'array')
  t.deepEqual(humps(_.noop), _.noop, 'saves functions')
  t.end()
})
