const console = require('Diagnostics');
const Animation = require('Animation');
const FaceTracking = require('FaceTracking');
const FaceGestures = require('FaceGestures');
const Scene = require('Scene');
const Reactive = require("Reactive");
const Tweener = require("./ARTween").ARTween;
const Delay = require("./ARTween").Delay;
const Ease = require("./ARTween").Ease;

var rect = Scene.root.find("rect");
var facemesh = Scene.root.find("faceMesh");
facemesh.transform.scaleX = Reactive.val(2);
facemesh.transform.scaleZ = Reactive.val(2);


new Delay(1000, () => {
	console.log("Let's start the face-stuff!");
	new Tweener(facemesh, [
		{rotationZ: 360, duration: 2000},
		{scaleX: .6, duration: 2000, loop:-1, yoyo:true, ease:Ease.InOutQuad()},
		{scaleY: 3, duration: 2000, loop:-1, yoyo:true, ease:Ease.InOutQuad()},
		{scaleZ: 0, duration: 2000, loop:-1, yoyo:true, ease:Ease.InOutQuad()}
	]).onComplete(function(){
		console.log("Done!"+Ease.InBack());
	});
});


new Delay(3000, () => {
	console.log("Let's start the UI-rectangle-stuff!");
	// new Tweener(rect, [
	// 	{rotationZ:360, duration:5000, loop:-1, ease:Ease.Linear()}
	// ], true);

	const mouthOpenness = FaceTracking.face(0).mouth.openness;
	const linearSampler = Animation.samplers.linear(1, 2);
	const mouthOpennessDriver = Animation.valueDriver(mouthOpenness, 0.1, 0.6);
	const scaleAnimation = Animation.animate(mouthOpennessDriver, linearSampler);

	// Bind the scale animation signal to the y-axis scale signal of the plane
	rect.transform.scaleY = scaleAnimation;
})


this.smileSubscribe = null;
var setSmile = function(faceID, startCallback, stopCallback) {
	var faceTracker = FaceTracking.face(faceID);
	this.smileSubscribe = FaceGestures.isSmiling(faceTracker).monitor().subscribe(
		function (e) {
			if (e.newValue) {
				startCallback()
			}
			else {
				stopCallback();
			}
		}
	);
}

var stopSmile = function() {
	if (this.smileSubscribe != null) this.smileSubscribe.unsubscribe();
}

setSmile(0, ()=>{
	console.log("Start smiling! :)");
},
()=>{
	console.log("STOP smiling :(");
});