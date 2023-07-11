import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Weather from "./components/Weather/Weather";
import Cat from "./components/cat/Cat";
import HarryPotter from "./components/harryPotter/HarryPotter";
import Spells from "./components/harryPotter/Spells";
import Characters from "./components/harryPotter/Characters";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/weather" element={<Weather/>} />
        <Route path="/cat" element={<Cat/>} />
        <Route path="/harrypotter" element={<HarryPotter/>} />
        <Route path="/harrypotter/spells" element={<Spells/>} />
        <Route path="/harrypotter/characters" element={<Characters/>} />
      </Routes>
    </>
  );
}

export default App;
