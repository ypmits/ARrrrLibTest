const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./node_modules/socialarlib/src",
    output: {
        path: path.resolve(__dirname, './scripts'),
        filename: "socialarlib.js"
    },
    externals: {
        Animation: "commonjs Animation",
        Diagnostics: "commonjs Diagnostics",
        FaceTracking: "commonjs FaceTracking",
        Reactive: "commonjs Reactive",
        Scene: "commonjs Scene",
        Time: "commonjs Time"
    },
    plugins: [
        // new CleanWebpackPlugin({

        // })
    ]
}