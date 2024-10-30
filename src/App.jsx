
import './App.css'
import Nav from './Components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    <Nav/>
    <div className=''>
    <Outlet />
    </div>
    <Footer/>
    </>
  )
}

export default App
