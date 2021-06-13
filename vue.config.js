module.exports = {
  devServer: {
    proxy: {
        'https://outpost.mapmyindia.com/': {
          target: "http://localhost:8080/",
          changeOrigin: true
        }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
