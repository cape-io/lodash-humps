import test from 'tape'
import humps from '../'

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
