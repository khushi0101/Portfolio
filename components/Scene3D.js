import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function RoomModel({ zone }) {
  const group = useRef();
  // Replace with your actual 3D model path
  const { scene } = useGLTF('/models/khushi_room.glb'); 

  useEffect(() => {
    // Camera movements based on the Zone
    if (zone === 'about') {
      gsap.to(group.current.position, { x: 0, y: 0, z: 0, duration: 2 });
    } else if (zone === 'projects') {
      gsap.to(group.current.position, { x: -5, y: 0, z: -2, duration: 2 });
    } else if (zone === 'work') {
      gsap.to(group.current.position, { x: 5, y: 0, z: 2, duration: 2 });
    }
  }, [zone]);

  return <primitive ref={group} object={scene} scale={1.5} />;
}

export default function Scene3D({ currentZone }) {
  return (
    <Canvas shadows className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 5, 10]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RoomModel zone={currentZone} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
