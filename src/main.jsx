import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, } from 'react-router'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Layout from './components/Layout/Layout'
import './styles/styles.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>

  </StrictMode>,
)
