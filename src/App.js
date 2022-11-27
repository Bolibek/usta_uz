import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from "./components/Navbar";

import './App.css';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
