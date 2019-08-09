import { darken } from 'polished'
import { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

const alertColorLevel = 6
const alertBgLevel = -10
const alertBorderLevel = -9

export const alertVariant = variant => p => {
  const variantColor = th.color(variant)(p)
  const color = p.theme.colorLevel(variantColor, alertColorLevel)(p)
  const bgColor = p.theme.colorLevel(variantColor, alertBgLevel)(p)
  const borderColor = p.theme.colorLevel(variantColor, alertBorderLevel)(p)
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
