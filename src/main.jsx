import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, } from 'react-router'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import Accomodation from './pages/Accomodation/Accomodation'
import About from './pages/About/About'
import Layout from './components/Layout/Layout'
import './styles/styles.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='accomodation/:id' element={<Accomodation />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>

  </StrictMode>,
)
