import React from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { CanvasLoader } from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');  // Try more 3d MOdels from online , download and reference their .gltf file here
  return (
    <group scale={7}>
      <primitive
        object={earth.scene}
        // scene={2.5}
        position-y={0}
        rotation-y={0}
      />
    </group>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 700,
        position: [-8, 5, 15]
      }}
      style={{ height: '100%', width: '100%' }}
    >
      <Suspense
        fallback={<CanvasLoader />}
      >
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

    </Canvas>
  )

}
export default EarthCanvas