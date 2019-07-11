module.exports = function config(api) {
  api.cache(true)

  const presets = [
    ['@babel/preset-env'],
  ]
  const plugins = ['add-module-exports', 'lodash']

  return {
    presets,
    plugins,
  }
}
