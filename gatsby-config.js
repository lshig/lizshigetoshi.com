module.exports = {
  siteMetadata: {
    article: true,
    author: 'Liz Shigetoshi',
    description: "Hi, I'm Liz Shigetoshi.",
    image: '/static/2016-lake-clementine.jpg',
    keywords: 'Liz, Shigetoshi',
    title: 'Liz Shigetoshi',
    twitterUsername: '@LizShigetoshi',
    url: 'https://lizshigetoshi.com'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#000',
        crossOrigin: 'use-credentials',
        display: 'standalone',
        icon: 'src/favicon/icon.png',
        name: 'Liz Shigetoshi',
        short_name: 'Liz Shigetoshi',
        start_url: '/',
        theme_color: '#000'
      }
    }
  ]
};
