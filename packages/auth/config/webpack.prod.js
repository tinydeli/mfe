const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

// instead of manually adding shared libs, just read dependencies from 
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/auth/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'modAuth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthIndex': './src/bootstrap'
            },
            shared: packageJson.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);