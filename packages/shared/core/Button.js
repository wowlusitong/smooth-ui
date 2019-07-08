import React from 'react'
import { Button as ReakitButton } from 'reakit/Button'
import { useProps } from './common'

function Button(props) {
  const { as, safeProps } = useProps(props)
  return <ReakitButton as={as} {...safeProps} />
}

Button.propTypes = {}

export default Button
