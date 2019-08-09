// import * as path from 'path'
// import externalLinks from 'remark-external-links'

// const modifyBundlerConfig = config => {
//   config.resolve.alias = Object.assign({}, config.resolve.alias, {
//     '@smooth-ui': path.resolve(__dirname, 'packages'),
//     '@docs': path.resolve(__dirname, 'docs'),
//   })

//   return config
// }

export default {
  title: 'Smooth UI',
  description: 'Modern UI library for React',
  propsParser: false,
  src: './docs',
}
