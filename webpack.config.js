const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        // 主文件入口
        main: './src/index.js',
        // vendors.js用于引入依赖包，将第三方依赖打包到vendors中
        vendors: './src/vendors.js'
    },
    output: {
        // webpack-dev-server在开发环境时读取静态文件包的路径
        publicPath: '/dist/',
        // 用于存储打包后文件路径
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
        // 对所有出去node_modules以外的js都使用babel-loader解析
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
        // 将样式文件单独抽出，打包至style.css中使用
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ],
    resolve: {
        alias: {
            // 为文件配置快速访问入口
            vue: 'vue/dist/vue.js',
            'src': path.resolve(__dirname, './src'),
            'js': path.resolve(__dirname, './src/js'),
            'api': path.resolve(__dirname, './src/js/api'),
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

// 如果为生产环境，则进行代码压缩
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        // 在编译时配置全局变量NODE_ENV
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // 使用UglifyJS压缩代码
        new UglifyJSPlugin({
            uglifyOptions: {
                warnings: false
            }
        }),
        // 根据模块的引用次数设置模块ids，使得ids可预测减小总文件大小
        new webpack.optimize.OccurrenceOrderPlugin()
    ])
}