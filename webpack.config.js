const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js',
        login: './src/login.js'

    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),

    },
    watch: true
}