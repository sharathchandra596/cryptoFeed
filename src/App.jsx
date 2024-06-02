import {  Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home/Home"
import Coin from "./pages/coin/Coin"
import Footer from "./components/footer/Footer"



function App() {


  return (
    <div className='  text-white  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600'>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coin/:coinId" element={<Coin/>}/>
     </Routes>
     <Footer/>
     
    </div>
  )
}

export default App
