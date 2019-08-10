import { oneOfType, number, string, object } from 'prop-desc'

export function getSystemPropTypes(system) {
  if (!system) return {}
  return system.meta.props.reduce((obj, prop) => {
    obj[prop] = oneOfType([number, string, object]).desc(
      'See xstyled documentation (https://www.smooth-code.com/open-source/xstyled/docs/system-props/)',
    )
    return obj
  }, {})
}
