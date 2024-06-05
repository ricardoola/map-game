import React, { useState, useEffect } from "react";
import ScoreContainer from "../containers/ScoreContainer";
import MapContainer from "../containers/MapContainer";
import Header from "../components/Header";
import StateToGuess from "../components/StateToGuess";
import { stateArray } from "../components/maps/UsMap";

const GameScreen = () => {
  const [gameStateArray, setGameStateArray] = useState(stateArray); // Manage gameStateArray in state
  const [currentState, setCurrentState] = useState(
    gameStateArray[Math.floor(Math.random() * gameStateArray.length)]
  );
  const [stateColors, setStateColors] = useState({});

  useEffect(() => {
    if (gameStateArray.length > 0) {
      setCurrentState(
        gameStateArray[Math.floor(Math.random() * gameStateArray.length)]
      );
    }
  }, [gameStateArray]);

  const handleStateClick = (state) => {
    if (state === currentState) {
      setGameStateArray((prevState) =>
        prevState.filter((state) => state !== currentState)
      );
      setStateColors((prevState) => ({
        ...prevState,
        [state]: "green",
      }));
    }
  };

  return (
    <>
      <Header header="test" />
      <div className="w-3/4 mx-auto flex flex-col justify-center mt-8">
        <StateToGuess displayedState={currentState} />
        <div className="flex">
          <ScoreContainer className="rounded-md" />
          <MapContainer
            correctState={currentState}
            onStateClick={handleStateClick}
            stateColors={stateColors} // Pass down stateColors
          />
        </div>
      </div>
    </>
  );
};

export default GameScreen;
