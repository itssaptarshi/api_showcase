import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/weather" element={<Weather/>} />
      </Routes>
    </>
  );
}

export default App;