import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei';
import Photocard from './Photocard/Photocard';
import CameraRig from './CameraRig';
import Photocard from './Photocard/Photocard';

const PhotocardCanvasModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />

      <CameraRig>
        <Center>
          <Photocard/>
        </Center>
      </CameraRig>
    </Canvas>
    
  )
}

export default PhotocardCanvasModel