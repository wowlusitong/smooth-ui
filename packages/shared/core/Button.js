import React from 'react'
import { darken } from 'polished'
import { Button as ReakitButton } from 'reakit/Button'
import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { useProps } from './common'

function InnerButton(props) {
  const { as, safeProps } = useProps(props)
  return <ReakitButton as={as} {...safeProps} />
}

export const Button = styled(InnerButton)(p => {
  const scale = p.scale || 'base'
  const baseColor =
    p.variant === null ? null : th.color(p.variant || 'primary')(p)
  const px = th.space(`button.x.${scale}`)(p)
  const py = th.space(`button.y.${scale}`)(p)
  return css`
    display: inline-block;
    z-index: control;
    font-family: base;
    font-size: ${scale};
    padding: ${py} ${px};
    border-radius: ${scale};
    line-height: ${th.lineHeight(`button.${scale}`)(p)};
    border-width: ${th.borderWidth(`button.${scale}`)(p)};
    cursor: ${p.disabled ? 'initial' : 'pointer'};
    ${p.theme.transitionBase(p)};

    /* When used as link */
    text-decoration: none;

    &:disabled {
      opacity: 0.8;
    }

    ${baseColor &&
      css`
        color: ${p.theme.colorYik(baseColor)(p)};
        background-color: ${baseColor};

        &:focus {
          ${p.theme.baseFocus(baseColor)(p)};
        }

        &:not(:disabled):hover,
        &:not(:disabled):active {
          background-color: ${darken(0.05, baseColor)};
        }
      `}
  `
})

Button.propTypes = {}
