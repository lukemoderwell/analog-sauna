/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://analogsauna.com',
  generateRobotsTxt: true,
  outDir: './public',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: ['/', '/owners', '/book', '/portfolio', '/photos'],
      },
    ],
  },
};

export default config;
