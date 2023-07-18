import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Weather from "./components/Weather/Weather";
import Cat from "./components/cat/Cat";
import HarryPotter from "./components/harryPotter/HarryPotter";
import Spells from "./components/harryPotter/Spells";
import Characters from "./components/harryPotter/Characters";
import Food from "./components/food/Food";
import Trivia from "./components/trivia/Trivia";
import NavBar from "./components/global/NavBar";
import Particle from "./components/global/Particles";

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/weather" element={<Weather/>} />
        <Route path="/cat" element={<Cat/>} />
        <Route path="/harrypotter" element={<HarryPotter/>} />
        <Route path="/harrypotter/spells" element={<Spells/>} />
        <Route path="/harrypotter/characters" element={<Characters/>} />
        <Route path="/food" element={<Food/>} />
        <Route path="/trivia" element={<Trivia/>} />

      </Routes>
    <Particle/>

    </>
  );
}

export default App;
