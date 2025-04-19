import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import TestPage from './pages/TestPage'
import './App.css'
import MainPage from './pages/MainPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="/test" element={<TestPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
