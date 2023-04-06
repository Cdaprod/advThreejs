// index.js

// Import Three.js
import THREE from 'three';
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

// Import Three.js math classes
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';

// Import your own modules
import { initThreeComponent } from '../src/ThreeComponent.js';
import { generateTerrain } from '../src/simpleTerrain.js';

// Export the modules that need to be used in other files
export {
  THREE,
  ImprovedNoise,
  initThreeComponent,
  generateTerrain,
};
