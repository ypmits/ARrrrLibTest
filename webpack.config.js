const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

module.exports = {
	entry: './scripts/socialarlib.js',
	output: {
		filename: '[name]',
		path: path.resolve(__dirname, 'scripts'),
	},
	plugins: [
		new MergeIntoSingleFilePlugin({
			"./scripts/socialarlib.js": [
				path.resolve(__dirname, 'node_modules/socialarlib/src/ARTween/ARTween.js'),
				path.resolve(__dirname, 'node_modules/socialarlib/src/AudioObject/AudioObject.js')
			]
		})
	],
	externals: {
		Animation: "commonjs Animation",
		Diagnostics: "commonjs Diagnostics",
		FaceTracking: "commonjs FaceTracking",
		Audio: "commonjs Audio",
		DeviceMotion: "commonjs DeviceMotion",
		FaceTracking2D: "commonjs FaceTracking2D",
		FaceGestures: "commonjs FaceGestures",
		Fonts: "commonjs Fonts",
		HandTracking: "commonjs HandTracking",
		Instruction: "commonjs Instruction",
		IrisTracking: "commonjs IrisTracking",
		LightingEstimation: "commonjs LightingEstimation",
		LiveStreaming: "commonjs LiveStreaming",
		Locale: "commonjs Locale",
		Patches: "commonjs Patches",
		NativeUI: "commonjs NativeUI",
		Persistence: "commonjs Persistence",
		PersonSegmentation: "commonjs PersonSegmentation",
		Random: "commonjs Random",
		Reactive: "commonjs Reactive",
		Scene: "commonjs Scene",
		Time: "commonjs Time",
		TouchGestures: "commonjs TouchGestures",
		CameraInfo: "commonjs CameraInfo",
		Materials: "commonjs Materials",
		Textures: "commonjs Textures"
	}
};