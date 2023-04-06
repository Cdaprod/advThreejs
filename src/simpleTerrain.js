const function generateTerrain = {

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


  const noise = new ImprovedNoise();

  const terrainSize = 200; // The size of the terrain in world units
  const terrainSegments = 100; // The number of segments in each dimension of the terrain geometry
  const terrainGeometry = new THREE.PlaneGeometry(terrainSize, terrainSize, terrainSegments, terrainSegments);

  // Modify the terrain vertices using Perlin noise
  const noiseScale = 0.5; // The scale of the noise function
  const noiseStrength = 25; // The strength of the noise function
  for (let i = 0; i < terrainGeometry.vertices.length; i++) {
    const vertex = terrainGeometry.vertices[i];
    const noiseValue = noise.perlin3(vertex.x * noiseScale, vertex.y * noiseScale, vertex.z * noiseScale);
    vertex.z += noiseValue * noiseStrength;
  }

  // Create a material for the terrain
  const terrainMaterial = new THREE.MeshStandardMaterial({
    color: 0x7f6548,
    roughness: 1,
    metalness: 0,
  });

  // Create a mesh for the terrain
  const terrainMesh = new THREE.Mesh(terrainGeometry, terrainMaterial);
  terrainMesh.rotation.x = -Math.PI / 2;
  terrainMesh.receiveShadow = true;

  // Add the terrain mesh to the scene
  scene.add(terrainMesh);
  };

export { generateTerrain };