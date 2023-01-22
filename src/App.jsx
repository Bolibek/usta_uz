import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import MainRoutes from './routes/MainRoutes'
import './App.css'

function App() {
  const [isSignedIn, setIsSignedIn] = useState()
  const [display, setDisplayNavbar] = useState('')
  useEffect(() => {
    setIsSignedIn(false)
  }, [isSignedIn])

  return (
    <div className="">
      <Navbar
        status={isSignedIn}
        display={display}
        setDisplayNavbar={setDisplayNavbar}
      />
      <MainRoutes setIsSignedIn={setIsSignedIn} />
    </div>
  )
}

export default App
