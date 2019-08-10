import React from 'react'
import { darken } from 'polished'
import merge from 'deepmerge'
import { Button as ReakitButton } from 'reakit/Button'
import styled, { css } from '@xstyled/styled-components'
import { th, system } from '@xstyled/system'
import { node, bool, oneOf, string, oneOfType } from 'prop-desc'
import {
  fonts,
  colors,
  radii,
  fontSizes,
  zIndices,
  lineHeights,
  transitions,
} from './theming2/index'
import { SCALES, VARIANTS, scale } from './theming2/util'
import { useProps, getSystemPropTypes } from './common'
import { colorYik } from './utils/color'
import { safeTransition } from './utils/transition'

const InnerButton = React.forwardRef(function InnerButton(props, ref) {
  const { as, safeProps } = useProps(props)
  return <ReakitButton ref={ref} as={as} {...safeProps} />
})

const theme = {
  fonts,
  colors,
  radii,
  fontSizes,
  zIndices,
  transitions,
  space: {
    button: {
      x: scale('.75rem', () => '.75rem' || th.space('button.x.base')),
      y: scale('.375rem', () => '.375rem' || th.space('button.y.base')),
    },
  },
  lineHeights: {
    ...lineHeights,
    button: SCALES.reduce((obj, scale) => {
      obj[scale] = th.lineHeight(scale)
      return obj
    }, {}),
  },
  borderWidths: {
    button: SCALES.reduce((obj, scale) => {
      obj[scale] = 0
      return obj
    }, {}),
  },
  components: {
    Button: p => {
      const scale = p.scale || 'base'
      const baseColor =
        p.variant === null ? null : th.color(p.variant || 'primary')(p)
      const px = th.space(`button.x.${scale}`)(p)
      const py = th.space(`button.y.${scale}`)(p)
      return css`
        display: inline-block;
        z-index: ${th.zIndex('control')(p)};
        font-family: ${th.font('base')(p)};
        font-size: ${th.fontSize(scale)(p)};
        padding: ${py} ${px};
        border-radius: ${th.radius(scale)(p)};
        line-height: ${th.lineHeight(`button.${scale}`)(p)};
        border-width: ${th.borderWidth(`button.${scale}`)(p)};
        cursor: ${p.disabled ? 'initial' : 'pointer'};
        ${safeTransition('base')(p)};

        /* When used as link */
        text-decoration: none;

        &:disabled {
          opacity: 0.8;
        }

        ${baseColor &&
          css`
            color: ${colorYik(baseColor)(p)};
            background-color: ${baseColor};

            &:focus {
              ${p.theme.baseFocus(baseColor)(p)};
            }

            &:not(:disabled):hover,
            &:not(:disabled):active {
              background-color: ${darken(0.05, baseColor)};
            }
          `}

        && {
          ${system}
        }
      `
    },
  },
}

export const Button = styled(InnerButton)(p => {
  const props = merge({ theme }, p)
  return props.theme.components.Button(props)
})

Button.propTypes = {
  children: node,
  disabled: bool,
  scale: oneOf(SCALES),
  variant: oneOfType([oneOf(VARIANTS), string]).defaultTo('primary'),
  ...getSystemPropTypes(system),
}
