# Information about ARrrrLib
*ARrrrLib* (try saying it like a pirate) is a collection of utility libraries for Facebook's AR platform **Spark AR Studio**.
The *Pièce-de-Résistance* of this library is a complete and feature-rich tweening-library. It has a similar syntax as Greensock's GSAP library. ARrrrLib also contains a few other gems that make developing a Spark AR filter a lot easier.

## What's inside ARrrrLib
Feature | Description
--- | ---
[ARTween](src/ARTween) | A complete Tweening-library in the style of good old TweenLite
[CustomConsole](src/CustomConsole) | Add a visual console to your scene so you can debug your projects on any device
[IKSystem](src/IKSystem) | A flexible IK-system. Handy if you need your character to use a bicycle
[CameraLookAt](src/CameraLookat) | Make something happen by looking at a specific object in the scene
[CustomUI](src/CustomUI) | A utility-class with some handy UI-functions
[AudioObject](src/AudioObject) | For handling audio much easier
[DeviceInfo](src/DeviceInfo) | DeviceInfo provides some basic information about the device. It needs a reference to a canvas in Spark AR to do so.
[Math2](src/Math2) | Handy math functions
[ObjectFinder](src/ObjectFinder) | Find objects, or not and get some nice debug-logs
[SceneLoader](src/SceneLoader) | For easy scene-manager
[Patches](src/Patches) | A collection of ready-to-use patches

## Setup
When you want to use ARrrrLib as an external library for your own (or a new) Studio AR project then follow the following procedure:
-  make sure to copy the [package-lock.json](```package-lock.json```) and [package.json](```package.json```) to the root of your project. This folder, although it's an external library will also need to have the node_modules installed to function. To install the ```node_modules``` you will have to run:
```javascript
npm i
```
The node_modules folder is ignored through the [.gitignore](.gitignore) which can be found in the root of ARrrrLib.

![Arr! Said the pirate](https://github.com/ypmits/ARrrrLib/blob/develop/images/pirate.png?raw=true)
