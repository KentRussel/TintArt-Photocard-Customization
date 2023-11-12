import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei';
import Sintra from './Sintra/Sintra';
import CameraRig from './CameraRig';

const SintraCanvasModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />

      <CameraRig>
        <Center>
          <Sintra/>
        </Center>
      </CameraRig>
    </Canvas>
    
  )
}

export default SintraCanvasModel