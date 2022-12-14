import path from 'node:path'

export const PRICE = '0,0'

export const PRINT_TIME = 600

/** @type {('SUNMI' | 'UHUO')[]} */
export const OTHER_BRAND = ['SUNMI', 'UHUO']

/** @type {('USB' | 'SUNMI' | 'UHUO')[]} */
export const NO_NET_BRAND = ['USB', 'SUNMI', 'UHUO']

export const SESSION_PATH = path.join(process.cwd(), './session.log')
