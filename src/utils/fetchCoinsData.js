import { API_KEYS } from './urlAPIs';

export const initRequest = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'X-CMC_PRO_API_KEY': API_KEYS,
    'Access-Control-All-Origin': '*'
  },
  json: true,
  gzip: true
}