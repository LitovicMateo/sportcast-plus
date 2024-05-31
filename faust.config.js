import { setConfig } from '@faustwp/core/dist/mjs/config/index.js';
import possibleTypes from './src/lib/possibleTypes.json';

/** @type {import('@faustwp/core').FaustConfig} */
export default setConfig({
  possibleTypes,
});