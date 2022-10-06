
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  
  devServer: {
    port: 3000,
    proxy: {
      '/api' : {
          target: 'https://backend-beratagaca-dev.apps.sandbox.x8i5.p1.openshiftapps.com/',
          ws: true,
          changeOrigin: true
      }
    }
    
  }

})
