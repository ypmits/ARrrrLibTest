export default [
{
	input: [
		"./node_modules/socialarlib/src/index.js"
	],
	output: {
		file: "scripts/socialarlib.js",
		format: "cjs"
	},
	externals: {
		Animation: "commonjs Scene",
		Animation: "commonjs Animation",
		Diagnostics: "commonjs Diagnostics",
		CameraInfo: "commonjs CameraInfo",
		Materials: "commonjs Materials",
		Textures: "commonjs Textures"
	}
}]