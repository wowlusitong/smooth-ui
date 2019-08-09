import { th } from '@xstyled/system'
import { scale } from './util'

export const space = {
  foo: { bar: '1rem' },
  button: {
    x: scale('.75rem', th.space('button.x.base')),
    y: scale('.375rem', th.space('button.y.base')),
  },
}
