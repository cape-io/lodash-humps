const test = require('tape')
const humps = require('../')

test('humps', function(t) {
  t.equal(humps('some string_yo-dance around'), 'someStringYoDanceAround', 'strings')
  t.end()
})
