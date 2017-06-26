const devMiddleware = require('webpack-dev-middleware')
const express = require('express')
const hotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')
const path = require('path')
const pkg = require('./package.json')


const webPackConfig = require('./webpack.config')

const app = express()

const compiler = webpack(webPackConfig)
app.use(devMiddleware(compiler, {
    publicPath: webPackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false,
        chunkModules: false,
        chunkOrigins: false,
    },
}))

app.use(hotMiddleware(compiler))
app.use(express.static(path.join(__dirname, 'public')))

// Start Express
const port = process.env['PORT'] || 8080
app.listen(port, function () {
    console.log(`${pkg.name} listening on port ${port}`)
    console.log('NODE_ENV is ' + process.env.NODE_ENV)
})
