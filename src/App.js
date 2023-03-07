import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import "./Components/Header/Header.css";
import Home from "./Components/Home/Home";
import NoteState from "./StateProvider/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<div>Checkout page</div>} />
          <Route path="/login" element={<div>Login</div>} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
