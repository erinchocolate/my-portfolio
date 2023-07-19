import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Room = ({isMobile}) => {
  const room = useGLTF('./room/scene.gltf');

  return (
    <mesh><hemisphereLight intensity={0.15}
      groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={room.scene}
        scale={isMobile ? 0.007 : 0.01}
        position={isMobile ? [0, -2, -1] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.01, -0.1]} />
    </mesh>
  );
}

const RoomCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    //Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    // Set the initial value of the "isMobile" state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches)
    };

    // Add the callback function as a  listener to the media query changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <Room isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
export default RoomCanvas;