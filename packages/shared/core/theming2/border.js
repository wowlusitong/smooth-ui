/* eslint-disable no-use-before-define */
import { th } from '@xstyled/system'
import { scale, SCALES } from './util'

export const radii = scale(th.px('4rpx'), th.radius('base'))
export const borderWidths = scale(th.px('1rpx'), th.borderWidth('base'))
borderWidths.button = SCALES.reduce((obj, scale) => {
  obj[scale] = 0
  return obj
}, {})
