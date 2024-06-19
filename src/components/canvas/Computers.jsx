import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.7}
        groundColor="black" />
      <pointLight intensity={0.7} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <directionalLight
        position={[5, 5, 2]}
        intensity={1.2}
        shadow-mapSize={1024}
        castShadow
      />
      <ambientLight intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // An Event Listener to detect the changes in the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    // A Callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    // A Callback function as a Listener for changes to the media query
    mediaQuery.addEventListener('change',
      handleMediaQueryChange
    )
    // Remove the Listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change',
        handleMediaQueryChange
      )
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}

    >
      <Suspense fallback={< CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  )


}
export default ComputersCanvas;