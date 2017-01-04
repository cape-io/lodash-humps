import test from 'tape'
import humps from '../'

test('humps', (t) => {
  const before = {
    'space key': 'space',
    underscore_key: { another_one: 2 },
    TXT: 'ONE MORE THING',
    foo_bar: 'underscore',
    tests: 'ASTM D 4157-13',
    contents: [ '100% Acrylic' ],
  }
  const after = {
    spaceKey: 'space',
    underscoreKey: { anotherOne: 2 },
    txt: 'ONE MORE THING',
    fooBar: 'underscore',
    tests: 'ASTM D 4157-13',
    contents: [ '100% Acrylic' ],
  }
  t.equal(humps('some string_yo'), 'some string_yo', 'no string processing')
  t.deepEqual(humps(before), after, 'objects')
  t.deepEqual(humps([ before, before ]), [ after, after ], 'array')
  t.end()
})
