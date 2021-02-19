const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

// instead of manually adding shared libs, just read dependencies from 
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8081/',
    },
    devServer: {
        port: 8081,
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'modMarketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingIndex': './src/bootstrap'
            },
            shared: packageJson.dependencies,
            // shared: ['react', 'react-dom'],
        })
    ]
};

module.exports = merge(commonConfig, devConfig);