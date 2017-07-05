'use strict'

/**
 * Date and array index to return.
 * 0 -> YEAR
 * 1 -> MONTH
 * 2 -> DAY
 * @param date
 * @param returnPart
 */
export const splitDate = (date, returnPart) => date.split('-')[returnPart]
