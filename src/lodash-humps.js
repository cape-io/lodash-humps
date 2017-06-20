import { camelCase, isArray, isObjectLike, isPlainObject, map, transform, set } from 'lodash'

export function getVal(val) {
  return isObjectLike(val) ? humps(val) : val // eslint-disable-line no-use-before-define
}

export function objIteratee(result, value, key) {
  return set(result, camelCase(key), getVal(value))
}

export default function humps(node) {
  if (isArray(node)) return map(node, humps)
  if (isPlainObject(node)) return transform(node, objIteratee)
  return node
}
