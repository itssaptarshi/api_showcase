import { Link } from "react-router-dom";
import Spells from "./Spells";

const HarryPotter = () => {

  return (
    <>
    <div className="flex flex-col">
    <Link className=" p-5" to='/harrypotter/spells'>Spells</Link>
    <Link to='/harrypotter/characters'>Characters</Link>

    </div>
    </>
    
  );
};

export default HarryPotter;
