
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import LandingPage from './Component/Landing/LandingPage'
import { Routes,Route } from 'react-router-dom'
import Signin from './Component/Signin/Signin';
import Hero from './Component/Hero/Hero';
import Quiz from './Component/Quiz/Quiz';
import Result from './Component/Result/Result';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>    
     <Navbar/>
     <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path='/home' element={<Hero/>}/>
      <Route path='/' element={<Hero/>}/>
      <Route path='/signup' element={<LandingPage/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
     </Routes>
    </>
  )
}

export default App
