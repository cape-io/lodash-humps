import { camelCase, forEach, isArray, isObject, isString, map } from 'lodash'

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

export function humpsArr(arr) {
  return map(arr, humps) // eslint-disable-line no-use-before-define
}

export default function humps(node) {
  if (isArray(node)) return humpsArr(node)
  if (isObject(node)) return humpsObj(node)
  if (isString(node)) return camelCase(node)
  return node
}
