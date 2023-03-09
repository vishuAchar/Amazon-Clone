import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import "./Components/Header/Header.css";
import Home from "./Components/Home/Home";
import CheckOut from "./Components/CheckOut/CheckOut";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/login" element={<div>Login</div>} />
      </Routes>
    </>
  );
}

export default App;
