import { darken } from 'polished'
import { css } from '../styled-engine'
import { colorLevel, getColor } from './color'

const alertColorLevel = 6
const alertBgLevel = -10
const alertBorderLevel = -9

export const alertVariant = variant => p => {
  const variantColor = getColor(variant)(p)
  const color = colorLevel(variantColor, alertColorLevel)(p)
  const bgColor = colorLevel(variantColor, alertBgLevel)(p)
  const borderColor = colorLevel(variantColor, alertBorderLevel)(p)
  const hrColor = darken(0.05, color)

  return css`
    color: ${color};
    background-color: ${bgColor};
    border-color: ${borderColor};

    hr {
      border-top-color: ${hrColor};
    }
  `
}
