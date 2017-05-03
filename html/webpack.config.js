var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        path.resolve(__dirname, './src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['es2015', 'react', "stage-0"] }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};