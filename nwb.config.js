module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactKeyboard',
      externals: {
        react: 'React'
      }
    }
  }
}
