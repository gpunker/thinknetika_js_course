const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.[fullhash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
}