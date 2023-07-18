import { Link } from "react-router-dom";
import "./styles.css";
import SpellLogo from "./SpellLogo";
import CharactersLogo from "./CharactersLogo";

const HarryPotter = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-4xl text-white font-bold mb-5">
          A Complete Guide On All The Spells And Characters Of Harry Potter
        </div>

      
        <div className="flex flex-col justify-center md:flex-row ">
            <Link className=" text-white p-5" to="/harrypotter/characters">
              <div>
                <div className="card1">
                  <div>
                    <CharactersLogo />
                  </div>
                  <div className="card__content">
                    <p className="card__title">Characters</p>
                    <p className="card__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          
          
            <Link className=" text-white p-5 " to="/harrypotter/spells">
              <div>
                <div className="card1">
                  <div>
                    <SpellLogo />
                  </div>
                  <div className="card__content">
                    <p className="card__title">Spells</p>
                    <p className="card__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
     
    </>
  );
};

export default HarryPotter;
