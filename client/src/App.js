import './App.css';
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";

// import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
