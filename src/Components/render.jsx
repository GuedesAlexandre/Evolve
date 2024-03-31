


import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, useFBX } from '@react-three/drei';
import { useRef, useEffect } from 'react';



const Scene = () => {
    const fbx = useFBX("../../src/Models/kaban.fbx");
    const fbxRef = useRef();
    const { camera } = useThree();
    useEffect(() => {
        if (fbxRef.current) {
          camera.lookAt(fbxRef.current.position);
        }
      }, [fbxRef, camera]);
    
      useFrame(() => {
        camera.lookAt(fbxRef.current.position);
      });
    
      return <primitive object={fbx}  scale ={0.05} ref={fbxRef} />;
    }
  


export default Scene