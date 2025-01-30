const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pwa: {
    name: '님 앱이름',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, 'index.html']
    }
  }
})
