const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

// instead of manually adding shared libs, just read dependencies from 
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/marketing/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'modMarketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingIndex': './src/bootstrap'
            },
            shared: packageJson.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);