import { mix, getContrast } from 'polished'
import { th } from '@xstyled/system'

const black = '#000'
const white = '#fff'

const gray100 = '#f8f9fa'
const gray200 = '#e9ecef'
const gray300 = '#dee2e6'
const gray400 = '#ced4da'
const gray500 = '#adb5bd'
const gray600 = '#6c757d'
const gray700 = '#495057'
const gray800 = '#343a40'
const gray900 = '#212529'

const blue = '#007bff'
const indigo = '#6610f2'
const purple = '#6f42c1'
const pink = '#e83e8c'
const red = '#dc3545'
const brick = '#bd4932'
const orange = '#fd7e14'
const yellow = '#ffc107'
const green = '#28a745'
const teal = '#20c997'
const cyan = '#17a2b8'

const primary = th.color('brick')
const secondary = th.color('gray600')
const success = th.color('green')
const info = th.color('cyan')
const warning = th.color('yellow')
const danger = th.color('red')
const light = th.color('gray100')
const dark = th.color('gray800')

const yikTextDark = '#111'
const yikTextLight = '#fff'

export const colors = {
  black,
  white,
  gray100,
  gray200,
  gray300,
  gray400,
  gray500,
  gray600,
  gray700,
  gray800,
  gray900,
  blue,
  indigo,
  purple,
  pink,
  red,
  brick,
  orange,
  yellow,
  green,
  teal,
  cyan,
  primary,
  secondary,
  success,
  info,
  warning,
  danger,
  light,
  dark,

  // yik
  yikTextDark,
  yikTextLight,
}

export const colorInterval = 0.08

export const colorLevel = (color, level) => p => {
  const baseColor = level > 0 ? th.color('black')(p) : th.color('white')(p)
  const absLevel = Math.abs(level)
  return mix(absLevel * colorInterval, baseColor, color)
}

export const yiqContrastedThreshold = 150

export const colorYik = color => p => {
  const darkValue = th.color('yikTextDark')(p)
  const lightValue = th.color('yikTextLight')(p)
  const colorValue = th.color(color)(p)
  const darkContrast = getContrast(colorValue, darkValue)
  const lightContrast = getContrast(colorValue, lightValue)
  return darkContrast < lightContrast ? lightValue : darkValue
}
