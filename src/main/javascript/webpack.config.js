require('babel-register')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
    entry: [
        '@babel/polyfill',
        path.join(__dirname, './index.js')],
    output: {
        path: path.join(__dirname, '../resources/static'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            "@babel/plugin-proposal-object-rest-spread",
                            "@babel/plugin-proposal-export-namespace-from",
                            "@babel/plugin-proposal-export-default-from",
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-transform-object-assign"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
            './src'
        ],
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
    devtool: 'source-map'

}
