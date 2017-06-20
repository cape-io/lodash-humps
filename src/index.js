import { camelCase } from 'lodash'
import createHumps from './createHumps'
// Only export the one default. Be friendly to CommonJS.
export default createHumps(camelCase)
