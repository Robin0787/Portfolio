import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import CanvasLoader from "../Loader";

const Earth = () => {
    const { scene } = useGLTF('./planet/scene.gltf');
    return (
       <primitive 
        // eslint-disable-next-line react/no-unknown-property
        object={scene}
        scale={2.5}
        // eslint-disable-next-line react/no-unknown-property
        position-y={0}
        // eslint-disable-next-line react/no-unknown-property
        rotation-y={0}
       />
    );
};


const EarthCanvas = () => {
    return (
      <Canvas
        shadows
        frameloop='demand'
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
  
          <Preload all />
        </Suspense>
      </Canvas>
    );
  };


export default EarthCanvas;