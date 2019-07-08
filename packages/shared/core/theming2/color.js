import { mix, parseToRgb } from 'polished'
import { getColor as baseGetColor, themeGetter } from '@xstyled/system'

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

const primary = baseGetColor('brick')
const secondary = baseGetColor('gray600')
const success = baseGetColor('green')
const info = baseGetColor('cyan')
const warning = baseGetColor('yellow')
const danger = baseGetColor('red')
const light = baseGetColor('gray100')
const dark = baseGetColor('gray800')

const colors = {
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
}

export const getColor = themeGetter({ key: 'colors', defaultVariants: colors })

export const colorInterval = 0.08

export const colorLevel = (color, level) => p => {
  const baseColor = level > 0 ? getColor('black')(p) : getColor('white')(p)
  const absLevel = Math.abs(level)
  return mix(absLevel * colorInterval, baseColor, color)
}

export const yiqContrastedThreshold = 150
export const yikTextDark = '#111'
export const yikTextLight = '#fff'

export const colorYik = color => {
  const { red: r, green: g, blue: b } = parseToRgb(color)
  const yik = (r * 299 + g * 587 + b * 114) / 1000
  return yik >= yiqContrastedThreshold ? yikTextDark : yikTextLight
}
