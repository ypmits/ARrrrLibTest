const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./node_modules/socialarlib/",
    output: {
        path: path.resolve(__dirname, './scripts'),
        filename: "socialarlib.js",
    },
    module: {
        rules: [
            {
                include: [
                    path.resolve(__dirname, "ARTween")
                ],
                exclude: []
            },
            {
                include: [
                    path.resolve(__dirname, "Math2"),
                ]
            }
        ]
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