import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Weather from "./components/Weather/Weather";
import Cat from "./components/cat/Cat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/weather" element={<Weather/>} />
        <Route path="/cat" element={<Cat/>} />
      </Routes>
    </>
  );
}

export default App;
