import { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

export const transition = value => p => {
  if (th('transitionEnabled')(p) === false) return null
  return css`
    transition: ${th.transition(value)};
    transition-property: color, border-style, border-color, visibility,
      background, background-color, text-decoration, box-shadow, transform,
      opacity;

    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `
}

export const safeTransition = value => p => {
  const transitionValue = transition(value)(p)
  if (!transitionValue) return null
  return css`
    ${transitionValue}
    transition-property: color, border-style, border-color, visibility,
      background, background-color, text-decoration, box-shadow, transform,
      opacity;
  `
}
