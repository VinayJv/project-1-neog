import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mock-api" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
