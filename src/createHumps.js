import { isArray, isObjectLike, isPlainObject, map, transform, set } from 'lodash'

function createIteratee(converter, self) {
  return (result, value, key) =>
    set(result, converter(key), isObjectLike(value) ? self(value) : value)
}

export default function createHumps(keyConverter) {
  return function humps(node) {
    if (isArray(node)) return map(node, humps)
    if (isPlainObject(node)) return transform(node, createIteratee(keyConverter, humps))
    return node
  }
}
