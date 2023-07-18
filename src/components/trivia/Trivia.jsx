import { useState } from "react";

const Trivia = () => {
  const [ques, setQues] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [ans, setAns] = useState("");
  const [score, Setscore] = useState(0);

  // useEffect(() => {

  //   randomTrivia();
  // }, []);

  const randomTrivia = () => {
    fetch("http://jservice.io/api/random").then((result) => {
      result.json().then((response) => {
        let c = Object.entries(response);
        let d = c[0][1];
        setQues(d);
        console.log(d);
        setToggle(true);
      });
    });
  };

  const handleClick = () => {
    if (ans === ques.answer.toLowerCase() || ans === ques.answer) {
      Setscore(score + ques.value);
      randomTrivia();
      setAns("");
    } else {
      Setscore(score - 100);
      randomTrivia();
      setAns("");
    }
  };

  return (
    <div>
      {toggle === true ? (
        <>
          <div className="flex justify-between">
            <div className="text-white text-xl md:text-2xl lg:text-4xl font-bold mb-5">
              {ques.question}
            </div>

            <div className="text-lg font-bold">Score: {score}</div>
          </div>
          <input
            className="block w-full  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Submit Answer"
            type="text"
            value={ans}
            onChange={(e) => setAns(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="text-white  bg-gray-950 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold rounded-full text-xl p-5 mt-5"
          >
            Submit Answer
          </button>
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <div className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-5">
              A Fun Little Trivia Game
            </div>
            <div className="text-white text-2xl font-semibold mb-5">
              The rules are really simple. Press the button to start the game.
              Once in the game, you will be presented with questions. Answer
              them correctly, and your score goes up. Each wrong answer will
              deduce 100 points from the score. Have fun
            </div>
          </div>

          <button
            type="button"
            className="text-white  bg-gray-950 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold rounded-full text-3xl px-7 py-5 m-2"
            onClick={randomTrivia}
          >
            Start The Trivia
          </button>
          <div className="text-gray-400 text-sm font-semibold mt-20">
            P.S: The answers are in the console, if you really wanna score.
          </div>
        </>
      )}
    </div>
  );
};

export default Trivia;
