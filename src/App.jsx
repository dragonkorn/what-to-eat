import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage'
import './App.css'

function App() {
  return (
    <MainPage />
    // <Router>
    //   <div className='grow'>
    //     <Navbar />

    //     <Routes>
    //       <Route index path="/" element={<TestPage />} />
    //       <Route path="/test" element={<TestPage />} />

    //       <Route path="*" element={<Navigate to="/" replace />} />
    //     </Routes>
    //   </div>
    // </Router>
  )
}

export default App
