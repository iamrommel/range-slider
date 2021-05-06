module.exports = function (api) {
  api.cache(true)

  return {
    targets: {
      browsers: ['last 2 versions', 'safari > 8', 'not ie < 11'],
    },
    presets: ['@babel/preset-env', '@babel/preset-react'],
    env: {
      production: {
        ignore: ['**/*.spec.js', '**/*.stories.js'],
      },
    },
  }
}
