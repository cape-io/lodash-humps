import test from 'tape'
import _ from 'lodash'
import createHumps from '../lib/createHumps'
import { basicObj, basicRes } from './mock'

const humps = createHumps(_.camelCase)
const snakes = createHumps(_.snakeCase)

test('createHumps', (t) => {
  t.deepEqual(humps(basicObj), basicRes, 'humps')
  t.deepEqual(snakes(basicRes), basicObj, 'snakes')
  t.end()
})
