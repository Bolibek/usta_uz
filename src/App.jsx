import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import SignInPage from './pages/SignInPage/SignInPage'
import PostsFormPage from './pages/PostsFormPage'
import LatestNews from './pages/LatestNewsPage'
import Profile from './pages/Profile'
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage handleStatus={setIsSignedIn} />} />
        <Route path="/postforms" element={<PostsFormPage />} />
        <Route path="/posts/:newJobPostId" element={<PostsFormPage />} />
        <Route path="/news" element={<LatestNews />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
