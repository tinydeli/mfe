const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

//Setup on CI/CD process
const domain = process.env.PRODUCTION_DOMAIN;

// instead of manually adding shared libs, just read dependencies from 
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                modMarketing: `modMarketing@${domain}/marketing/latest/remoteEntry.js`,
                modAuth: `modAuth@${domain}/auth/latest/remoteEntry.js`,
            },
            shared: packageJson.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);