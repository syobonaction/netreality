const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: "production",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
    },
    devtool: 'source-map',
    devServer:{
        contentBase: 'public',
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
};