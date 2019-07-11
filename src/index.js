import { camelCase } from 'lodash/fp'
import createHumps from './createHumps'
// Only export the one default. Be friendly to CommonJS.
export default createHumps(camelCase)
