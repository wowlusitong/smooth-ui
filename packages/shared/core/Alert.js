import React from 'react'
import { darken } from 'polished'
import styled, { css } from '@xstyled/styled-components'
import { th, system } from '@xstyled/system'
import { node, oneOf, string, oneOfType } from 'prop-desc'
import { useProps, getSystemPropTypes } from './common'
import { SCALES, VARIANTS } from './theming2/util'

const InnerAlert = React.forwardRef(function InnerAlert(props, ref) {
  const { as: As = 'p', safeProps } = useProps(props)
  return <As ref={ref} role="alert" {...safeProps} />
})

const alertColorLevel = 6
const alertBgLevel = -10
const alertBorderLevel = -9

export const Alert = styled(InnerAlert)(p => {
  const baseColor =
    p.variant === null ? null : th.color(p.variant || 'primary')(p)
  const color = p.theme.colorLevel(baseColor, alertColorLevel)(p)
  const bgColor = p.theme.colorLevel(baseColor, alertBgLevel)(p)
  const borderColor = p.theme.colorLevel(baseColor, alertBorderLevel)(p)
  const hrColor = darken(0.05, color)
  return css`
    font-family: base;
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1rpx;
    border-color: transparent;
    border-radius: base;
    color: ${color};
    background-color: ${bgColor};
    border-color: ${borderColor};

    hr {
      border-top-color: ${hrColor};
    }

    && {
      ${system}
    }
  `
})

Alert.propTypes = {
  children: node,
  variant: oneOfType([oneOf(VARIANTS), string]).defaultTo('primary'),
  ...getSystemPropTypes(system),
}
