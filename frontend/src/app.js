import React  from "react";
import { Routes, Route, Link  } from "react-router-dom";
import About from "./pages/about";
import Home from './pages/home'

const App = () => {

  return (
  
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Blogs</Link>
          </li>
         
        </ul>
      </nav>
     
      
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
       
    </div>
  
  );
};

export default App;
