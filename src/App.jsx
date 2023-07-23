import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Reserve from './pages/Reserve'
import Photo from './pages/Photo'
import Sightseeing from './pages/Sightseeing'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/sightseeing" element={<Sightseeing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
