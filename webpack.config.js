const path = require('path');

module.exports = {
	mode: "production",
	entry: {
		main: "./node_modules/socialarlib/src/ARTween/ARrrrTween.js"
	},
	output: {
		path: path.resolve(__dirname, './scripts'),
		filename: "socialarlib.js",
		library: "socialarlib",
		libraryTarget: "commonjs-module"
	},
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
	},
	watch: false
}