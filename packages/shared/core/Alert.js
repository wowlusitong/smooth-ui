import React from 'react'
import { useProps } from './common'

function Alert(props) {
  const { as: As = 'p', safeProps } = useProps(props)
  return <As role="alert" {...safeProps} />
}

Alert.propTypes = {}

export default Alert
