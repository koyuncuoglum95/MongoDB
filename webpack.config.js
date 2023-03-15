const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    // We are creating localhost by showing index.html
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    module: {
        rules: [

            // This one let us use JavaScript in Webpack
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            // This one let us use CSS in Webpack
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]  
            },
            // This one let us use png or jpg image files in Webpack

            {
                test: /\.(png|jpg)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            }
        ]
    }
}