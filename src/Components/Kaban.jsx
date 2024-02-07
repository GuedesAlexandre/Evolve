
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const Kaban = () => {
    const { scene } = useThree();

    useEffect(() => {
      const loader = new GLTFLoader();
  
      loader.load('', (gltf) => {
        scene.add(gltf.scene);
      });
    }, [scene]);
  
    return null;
}

export default Kaban