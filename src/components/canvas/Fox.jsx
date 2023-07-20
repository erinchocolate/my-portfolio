import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Fox = () => {
  const earth = useGLTF("./fox/scene.gltf");

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <hemisphereLight intensity={0.75} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.3}
          penumbra={1}
          intensity={3}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive object={earth.scene} scale={0.5}/>
      </mesh>
    </Float>
  );
};

const FoxCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{
        position: [2, 3, 5],
        fov: 45,
        near: 0.1,
        far:200,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Fox />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default FoxCanvas;
