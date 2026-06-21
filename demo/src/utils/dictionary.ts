import { isString } from './is'
import { DICTIONARY, TDictionaryKey } from '@/schema'
export function dictionary(is: TDictionaryKey) {
  const text = DICTIONARY[is]
  if (isString(text)) return text
  else throw `${is} - not found in Dictionary`
}
