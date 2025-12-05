import './styles/fonts.css'
import './styles/App.css'
import Curriculum from './components/Curriculum'
import Navbar from './components/Navbar';
import ExportButton from './components/ExportButton';
function App() {
  return (
    <>
      <Navbar />
      <Curriculum />
      <ExportButton targetId="Curriculum" />
    </>
  )
}

export default App
