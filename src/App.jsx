/* eslint-disable no-unused-vars */

import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
         <div id="navbar">
         <Link to='/'>Home</Link>
         <Link to='/red'>Red</Link>
         <Link to='/blue'>Blue</Link>
         </div>
         <div id="main-section">
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/blue" element={<Blue/>}/>
           <Route path="/red" element={<Red />}/>
         </Routes>
         </div>
    </div>
    </>
  )
}

export default App
