AFRAME.registerComponent('ambisonic', {
    schema: {
        //src: {type: 'asset'}
        src: {type: 'string'},
        volume: {type: 'number', default: 1}
    },

    multiple: true,


    init: function () {
      this.sceneEl = document.querySelector('a-scene');
      this.camera = document.getElementById("camera");

      // Create an AudioContext
      let audioContext = new AudioContext();

      // Create a (first-order Ambisonic) Resonance Audio scene and pass it
      // the AudioContext.
      this.resonanceAudioScene = new ResonanceAudio(audioContext);

      // Connect the scene’s binaural output to stereo out.
      this.resonanceAudioScene.output.connect(audioContext.destination);


      // Define room dimensions.
      // By default, room dimensions are undefined (0m x 0m x 0m).
      let roomDimensions = {
        width: 39.1,
        height: 54.8,
        depth: 39.1,
      };

      // Define materials for each of the room’s six surfaces.
      // Room materials have different acoustic reflectivity.
      let roomMaterials = {
        // Room wall materials
        left: 'marble',
        right: 'marble',
        front: 'marble',
        back: 'marble',

        // Room floor
        down: 'wood-panel',

        // Room ceiling
        up: 'marble',
      };


      // Add the room definition to the scene.
      this.resonanceAudioScene.setRoomProperties(roomDimensions, roomMaterials);


      // Create an AudioElement.
      let audioElement = document.createElement('audio');

      audioElement.volume = this.data.volume;
      // Load an audio file into the AudioElement.
      audioElement.src = this.data.src;
      audioElement.loop = true;

      // Generate a MediaElementSource from the AudioElement.
      let audioElementSource = audioContext.createMediaElementSource(audioElement);


      // Add the MediaElementSource to the scene as an audio input source.
      this.source = this.resonanceAudioScene.createSource();
      audioElementSource.connect(this.source.input);

      // Set the source position relative to the room center (source default position).

      let elPosition = this.el.getAttribute("position");
      this.source.setPosition(elPosition.x, elPosition.y, elPosition.z);

      // Play the audio.
      audioElement.play();

    },

    update: function(){

    },

    play: function(){

    },

    tick: function(){
      this.resonanceAudioScene.setListenerFromMatrix(this.camera.object3D.matrixWorld);

    },

});
