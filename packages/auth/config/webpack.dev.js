const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

// instead of manually adding shared libs, just read dependencies from 
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8082/',
    },
    devServer: {
        port: 8082,
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'modAuth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthIndex': './src/bootstrap'
            },
            shared: packageJson.dependencies,
            // shared: ['react', 'react-dom'],
        })
    ]
};

module.exports = merge(commonConfig, devConfig);