import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Kaban = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Create a loader
    const loader = new GLTFLoader();

    // Load the .glb file
    loader.load('src/Models/kaban.gltf', (gltf) => {
      // Access the loaded object
      const object = gltf.scene;
      scene.add(object);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Render the scene with the camera
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <h1>Objet Blender 3D</h1>
    </div>
  );
};

export default Kaban;