module.exports = {
  __experimentalThemes: [
    {
      resolve: require.resolve('smooth-doc'),
      options: {
        name: 'smooth-ui',
        slug: 'smooth-ui',
        github: 'https://github.com/smooth-code/smooth-ui',
        menu: ['About', 'Introduction', 'Guides', 'API'],
        nav: [{ title: 'Docs', url: '/docs/' }],
        codeFundProperty: 268,
      },
    },
  ],
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
  ],
}
