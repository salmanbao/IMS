const webpack = require('webpack');

module.exports = {
    plugins: [new webpack.DefinePlugin({
        'process.env': {
            PORT: JSON.stringify(process.env.PORT)
        }
    })]
}