const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        vendors: './src/vendors.js'
    },
    output: {
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader',
        }, {
            test: /\.vue$/,
            use: [
                {
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            less: ExtractTextPlugin.extract({
                                use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
                                fallback: 'vue-style-loader'
                            }),
                            css: ExtractTextPlugin.extract({
                                use: ['css-loader', 'autoprefixer-loader', 'less-loader'],
                                fallback: 'vue-style-loader'
                            })
                        }
                    }
                },
                {
                    loader: 'iview-loader',
                    options: {
                        prefix: true
                    }
                }
            ]
        }, {
            test: /iview\/.*?js$/,
            loader: 'babel-loader'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            'src': path.resolve(__dirname, './src'),
            'js': path.resolve(__dirname, './src/js'),
            'component': path.resolve(__dirname, './src/js/component'),
            'image': path.resolve(__dirname, './src/iamge'),
            // vue: 'vue/dist/vue.runtime.js'
        }
    },
    devServer: {
        port: 8887,
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    devtool: 'cheap-module-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ])
}
