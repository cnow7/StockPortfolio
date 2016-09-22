var app;
const port = (process.env.PORT || 5000)

if (process.env.NODE_ENV === 'production') {

  const Server = require('./server.js')
  app = Server.app()

} else {

  const webpack = require('webpack')
  const webpackDevServer = require('webpack-dev-server')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)

  app = new webpackDevServer(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })

}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
