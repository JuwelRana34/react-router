
import './App.css'
import Nav from './Components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import ContextProvider from './ContextProvider'

function App() {
  

  return (
    <ContextProvider>
    <Nav/>
    <div className=''>
    <Outlet />
    </div>
    <Footer/>
    </ContextProvider>
  )
}

export default App
