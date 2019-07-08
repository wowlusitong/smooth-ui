import { themeGetter } from '@xstyled/system'

const radii = {
  md: '4px',
}

export const getRadius = themeGetter({ key: 'radii', defaultVariants: radii })
