import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="text-5xl font-bold text-white ">API Showcase</div>
        <div className="text-2xl font-bold mt-5 text-white ">This is a project that shows my ability to work with various apis.</div>

        <div className="flex flex-row mt-10 flex-wrap">
          <div className="m-5">
            <Link to="/weather">
              <div className="card">
                <div className="card-inner">
                  <div className="card-front bg-[url('https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover">
                    <div className="font-bold text-4xl">Weather</div>
                  </div>
                  <div
                    className="card-back flex flex-col bg-[url('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg')]"
                  >
                    <p className="text-2xl font-semibold mb-5">Weather</p>
                    <div className="text-xl  px-3">
                      This is an app where you can search any location you like
                      and enquire the weather
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="m-5">
            <Link to="/cat">
              <div className="card">
                <div className="card-inner">
                  <div className="card-front bg-[url('https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg')] bg-cover">
                    <div className="font-bold text-4xl">Cat</div>
                  </div>
                  <div
                    className="card-back flex flex-col bg-[url('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg')]"
                  >
                    <p className="text-2xl font-semibold mb-5">Cat</p>
                    <div className="text-xl  px-3">
                      A simple app where you can look at cats as long as you like!
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="m-5">
            <Link to="/harrypotter">
              <div className="card">
                <div className="card-inner">
                  <div className="card-front bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5N4opbXdEPYFUV7fc7-XoTRxsAPGtclaS9Q&usqp=CAU')] bg-cover">
                    <div className="font-bold text-4xl">Harry Potter</div>
                  </div>
                  <div
                    className="card-back flex flex-col bg-[url('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg')]"
                  >
                    <p className="text-2xl font-semibold mb-5">Harry Potter</p>
                    <div className="text-xl  px-3">
                     A database of all the spells and characters in the Harry Potter universe.
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="m-5">
            <Link to="/food">
              <div className="card">
                <div className="card-inner">
                  <div className="card-front bg-[url('https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000')] bg-cover">
                    <div className="font-bold text-4xl">Food</div>
                  </div>
                  <div
                    className="card-back flex flex-col bg-[url('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg')]"
                  >
                    <p className="text-2xl font-semibold mb-5">Food</p>
                    <div className="text-xl  px-3">
                      A simple recipie app, where you can put in the ingredients, and it will spit out recipies for you.
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="m-5">
            <Link to="/trivia">
              <div className="card">
                <div className="card-inner">
                  <div className="card-front bg-[url('https://media.istockphoto.com/id/1335403960/vector/seamless-question-mark-asking-questions-quiz-background-pattern.jpg?s=612x612&w=0&k=20&c=imLca1F4ycclosW2avHWeBgnsIDdml6V4SM-vQSallU=')] bg-cover">
                    <div className="font-bold text-4xl ">Trivia</div>
                  </div>
                  <div
                    className="card-back flex flex-col bg-[url('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg')]"
                  >
                    <p className="text-2xl font-semibold mb-5">Trivia</p>
                    <div className="text-xl  px-3">
                     A simple trivia game, where if you answer right, you score.
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
