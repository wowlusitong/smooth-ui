import React from 'react'
import { darken } from 'polished'
import merge from 'deepmerge'
import styled, { css } from '@xstyled/styled-components'
import { th, system } from '@xstyled/system'
import { node, oneOf, string, oneOfType } from 'prop-desc'
import { useProps, getSystemPropTypes } from './common'
import { VARIANTS } from './theming2/util'
import { fonts, colors, radii } from './theming2/index'
import { colorLevel } from './utils/color'

const InnerAlert = React.forwardRef(function InnerAlert(props, ref) {
  const { as: As = 'p', safeProps } = useProps(props)
  return <As ref={ref} role="alert" {...safeProps} />
})

const theme = {
  fonts,
  colors,
  radii,
  colorLevels: {
    Alert: {
      color: 6,
      backgroundColor: -10,
      borderColor: -9,
    },
  },
  components: {
    Alert: p => {
      const baseColor =
        p.variant === null ? null : th.color(p.variant || 'primary')(p)
      const textColorLevel = th('colorLevels.Alert.color')(p)
      const backgroundColorLevel = th('colorLevels.Alert.backgroundColor')(p)
      const borderColorLevel = th('colorLevels.Alert.borderColor')(p)
      const color = colorLevel(baseColor, textColorLevel)(p)
      const backgroundColor = colorLevel(baseColor, backgroundColorLevel)(p)
      const borderColor = colorLevel(baseColor, borderColorLevel)(p)
      const hrColor = darken(0.05, color)
      return css`
        font-family: ${th.font('base')(p)};
        position: relative;
        padding: 12rpx 20rpx;
        margin-bottom: 16rpx;
        border: 1rpx;
        border-color: transparent;
        border-radius: ${th.radius('base')(p)};
        color: ${color};
        background-color: ${backgroundColor};
        border-color: ${borderColor};

        hr {
          border-top-color: ${hrColor};
        }

        && {
          ${system}
        }
      `
    },
  },
}

export const Alert = styled(InnerAlert)(p => {
  const props = merge({ theme }, p)
  return props.theme.components.Alert(props)
})

Alert.theme = theme

Alert.propTypes = {
  children: node,
  variant: oneOfType([oneOf(VARIANTS), string]).defaultTo('primary'),
  ...getSystemPropTypes(system),
}
