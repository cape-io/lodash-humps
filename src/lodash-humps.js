import { camelCase, forEach, isArray, isObject, map } from 'lodash'

export function getVal(val) {
  if (isObject(val)) return humps(val) // eslint-disable-line no-use-before-define
  return val
}

// keyMap and valueMap at the same time.
export function humpsObj(obj) {
  const result = {}
  forEach(obj, (val, key) => {
    result[camelCase(key)] = getVal(val)
  })
  return result
}

export default function humps(node) {
  if (isArray(node)) return map(node, humps)
  if (isObject(node)) return humpsObj(node)
  return node
}
