import { transform, set } from 'lodash'
import {
  isArray, isObjectLike, isPlainObject, map,
} from 'lodash/fp'

function createIteratee(converter, self) {
  return (result, value, key) => set(result, converter(key), isObjectLike(value) ? self(value) : value)
}

export default function createHumps(keyConverter) {
  return function humps(node) {
    if (isArray(node)) return map(humps, node)
    if (isPlainObject(node)) return transform(node, createIteratee(keyConverter, humps))
    return node
  }
}
