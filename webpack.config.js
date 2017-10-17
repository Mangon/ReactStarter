var path = require('path');

var config = {
    entry : path.resolve(__dirname, 'src/index.jsx'),
    output : {
        path : path.resolve(__dirname, 'build'),
        filename : 'bundle.js',
    },
    module : {
        loaders : [ {
            test : /\.jsx?$/,
            loader : 'babel-loader'
        }, {
            test : /\.css$/, // Only .css files
            loader : 'style-loader!css-loader' // Run both loaders
        }, {
            test : /\.less$/,
            loader : 'style-loader!css-loader!less-loader'
        }],
    }
};

module.exports = config;