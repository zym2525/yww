/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  plugins: [
    {
      postcssPlugin: 'internal:charset-removal',
      AtRule: {
        charset: (atRule) => {
          if (atRule.name === 'charset') {
            atRule.remove();
          }
        },
      },
    },
    require('autoprefixer'),
    require('postcss-import'),
  ],
};
