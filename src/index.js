import camelCase from 'lodash/camelCase'
import forEach from 'lodash/forEach'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'
import isString from 'lodash/isString'
import map from 'lodash/map'

export function getVal(val) {
  if (isObject) return humps(val) // eslint-disable-line no-use-before-define
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
