import Canvas from './canvas/ShirtIndex'
import SintraCanvasModel from './canvas/SintraIndex'
import Customizer from './pages/ShirtCustomizer'
import Home from './pages/Home'

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer/>
    </main>
  )
}

export default App
