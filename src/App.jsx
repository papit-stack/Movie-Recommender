
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import LandingPage from './Component/Landing/LandingPage'
import { Routes,Route } from 'react-router-dom'
import Signin from './Component/Signin/Signin';
import Hero from './Component/Hero/Hero';
import Quiz from './Component/Quiz/Quiz';
import Result from './Component/Result/Result';
import ProtectedRoute from './Component/Landing/ProtectedRoute';
import PublicRoute from './Component/Landing/PublicRoute';
function App() {

  return (
    <>    
     <Navbar/>
     <Routes>
        <Route path="/signin" element={<PublicRoute><Signin /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><LandingPage /></PublicRoute>} />
      <Route path="/home" element={<ProtectedRoute><Hero /></ProtectedRoute>} />
      <Route path="/" element={<ProtectedRoute><Hero /></ProtectedRoute>} />
      <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
      <Route path="/result" element={<ProtectedRoute><Result /></ProtectedRoute>} />

     </Routes>
    </>
  )
}

export default App
