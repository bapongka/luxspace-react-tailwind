// import logo from './logo.svg';
// import './App.css';
import "./assets/css/app.css";
// import "assets/css/app.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
