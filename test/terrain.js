		const terrain = {

		const noise = new SimplexNoise();
			
		const terrainSize = 200;
		const terrainSegments = 100;
		const terrainGeometry = new THREE.PlaneBufferGeometry(terrainSize, terrainSize, terrainSegments, terrainSegments);
		terrainGeometry.rotateX(-Math.PI / 2);
		
		const noiseScale = 0.5;
		const noiseStrength = 25;
		const positionAttribute = terrainGeometry.getAttribute('position');
		for (let i = 0; i < positionAttribute.count; i++) {
		  const vertex = new THREE.Vector3().fromBufferAttribute(positionAttribute, i);
		  const noiseValue = noise.noise2D(vertex.x * noiseScale, vertex.y * noiseScale);
		  vertex.z += noiseValue * noiseStrength;
		  positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
		}
		
		const terrainMaterial = new THREE.MeshStandardMaterial({
		  color: 0x7f6548,
		  roughness: 1,
		  metalness: 0,
		});
		
		const terrainMesh = new THREE.Mesh(terrainGeometry, terrainMaterial);
		terrainMesh.receiveShadow = true;
		
		scene.add(terrainMesh);
		
		};
		
		export default { terrain };