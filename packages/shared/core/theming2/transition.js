import { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

const safeTransitionAttrs = [
  'color',
  'border-style',
  'border-color',
  'visibility',
  'background',
  'background-color',
  'text-decoration',
  'box-shadow',
  'transform',
  'opacity',
]

export const transitionEnabled = true

export const transitions = {
  base: '.2s ease-in-out',
}

export const transition = value => p => {
  if (!th('transitionEnabled')(p)) return null
  return css`
    transition: ${value};

    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `
}

export const transitionBase = p =>
  transition(
    safeTransitionAttrs
      .map(attr => `${attr} ${th.transition('base')(p)}`)
      .join(','),
  )(p)
