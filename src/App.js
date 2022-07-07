import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/style.css"
import Cart from "./components/Cart";
import AppBar from "./components/AppBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
