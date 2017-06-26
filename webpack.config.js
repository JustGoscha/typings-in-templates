const path = require('path')
const webpack = require('webpack')

const PATH_DIST = path.resolve(__dirname, 'public', 'dist')

const config = {
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    entry: {
        app: [
            './src/index.tsx'
        ].filter(s => s),
    },
    output: {
        filename: `[name].js`,
        chunkFilename: `[name].chunk.js`,
        path: PATH_DIST,
        publicPath: '/dist/'
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader'
        }, {
            test: /\.tsx?$/,
            loaders: [
                {
                    loader: 'awesome-typescript-loader',
                    options: {
                        target: 'es6',
                    }
                }
            ].filter(l => l),
            exclude: path.resolve(__dirname, 'node_modules'),
            include: path.resolve(__dirname, 'src'),
        }]
    }
}

module.exports = config