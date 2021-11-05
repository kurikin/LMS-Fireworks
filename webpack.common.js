const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        content: "./src/content.js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [{ from: "src/manifest.json" }],
        }),
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.css/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                ],
            },
        ],
    },
    watchOptions: {
        ignored: /node_modules/,
    },
};
