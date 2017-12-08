# Wallace Office


![wallaceoffice1](/ss/ss4.jpg)


Blade Runner 2049 inspired Niander Wallace Office in VR with A-Frame

The model represents the Wallce office where he stays alone most of the time.

A central deck made of wood surrounded by water. Mysterious lights that create a reflection in the walls, and a mystical ceiling entrance for a light similar to the sunlight, but since LA is cloudy, it is a mystery  where it actually comes from.

The office is not an exact reproduction of the Wallace Office from Blade Runner 2049, it looks a bit more to the version in the Memory Lab game based in the same universe.

[Wallace Office in Artstation](https://www.artstation.com/artwork/90JOa)

The environment has ambisonic audio, meaning that a single mono audio file has a slight difference on each ear providing localization, so you are able to find the sound source.

# Navigation

The main navigation is hand controls (Vive wands and Oculus Touch) to fire a teleporting ray to target where you want to be at.

For desktop the traditional gaming controls are available (WASD, arrow keys and mouse).

For mobile platforms (GearVR and Cardboard) there's currently only 360 view.




# Development process

Main modeling and lightning were created in Blender. Later models were converted to glTF and loaded into a A-Frame environment.

Textures were created with Substance Painter but later tweaked with Blender to bake lights.

Created an ambisonic_audio_component to handle the resonance-audio library in a A-Frame perspective, so a simple entity as follows works to add audio into a position in space:

```
<a-entity ambisonic="src:audio/ambience_1.mp3; volume:1" position="0 2 0"></a-entity>
```

Synth audio design created by me with only a couple of notes as ambience.

Rest of the audio is from freesfx placed with the ambisonic_audio_component but it requires a bit of work for it to match as a loop.

The water is still, but I want to improve this with a nice effect.

Also some textures are a bit off in ilumination after a scale that changed the power of the lights.


[Live Demo](https://absulit.github.io/wallace_office_aframe/)


[YouTube Video](https://www.youtube.com/watch?v=dAiCV090QfM)

# Technologies used

- [WebVR](https://webvr.info/)
- [Three.js](https://threejs.org/) (inside components)
- [A-Frame v 0.7.0](https://aframe.io/)
- [Blender](https://www.blender.org/)
- [glTF file format](https://www.khronos.org/gltf/)
- [Khronos glTF Blender Exporter](https://github.com/KhronosGroup/glTF-Blender-Exporter)

- [Resonance Audio SDK for Web](https://github.com/resonance-audio/resonance-audio-web-sdk)

# Models

Custom models created with Blender

# Audio is from

- ambience_1.ogg is an original ambience sound created by me
- [freesfx.co.uk](http://www.freesfx.co.uk/sfx/)

# More images

![wallaceoffice2](/ss/ss1.jpg)
![wallaceoffice3](/ss/ss2.jpg)
![wallaceoffice4](/ss/ss3.jpg)


[Live Demo](https://absulit.github.io/wallace_office_aframe/)
