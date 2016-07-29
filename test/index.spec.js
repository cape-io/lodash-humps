import test from 'tape'
import humps from '../'

test('humps', t => {
  const before = {
    'space key': 'space',
    underscore_key: { another_one: 2 },
    TXT: 'ONE MORE THING',
    foo_bar: 'underscore',
    tests: 'ASTM D 4157-13',
  }
  const after = {
    spaceKey: 'space',
    underscoreKey: { anotherOne: 2 },
    txt: 'ONE MORE THING',
    fooBar: 'underscore',
    tests: 'ASTM D 4157-13',
  }
  t.deepEqual(humps(before), after, 'objects')
  t.deepEqual(humps([ before, before ]), [ after, after ], 'array')
  t.equal(humps('some string_yo-dance around'), 'someStringYoDanceAround', 'strings')
  t.end()
})
