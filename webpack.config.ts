const webpack = require('webpack');
const path = require('path');

const entry = ['./src/index.tsx'];
if (process.env.NODE_ENV !== 'production') {
    entry.unshift('webpack-hot-middleware/client?reload=true&noInfo=true');
}

module.exports = {
    mode: 'development',
    entry: ['./src/index.tsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
}
