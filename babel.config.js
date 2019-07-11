module.exports = function config(api) {
  api.cache(true)

  const presets = [
    ['@babel/preset-env'],
  ]
  const plugins = ['lodash']

  return {
    presets,
    plugins,
  }
}
