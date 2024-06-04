
import React, { useState, useEffect } from "react";
import ScoreContainer from "../containers/ScoreContainer";
import MapContainer from "../containers/MapContainer";
import Header from "../components/Header";
import StateToGuess from "../components/StateToGuess";
import { stateArray } from "../components/maps/UsMap";

const GameScreen = () => {
  let gameStateArray = stateArray;

  const [currentState, setCurrentState] = useState(
    gameStateArray[Math.floor(Math.random() * gameStateArray.length)]
  );
  const [stateColors, setStateColors] = useState({});
  console.log(currentState);


  const handleStateClick = (state) => {
    if (state === currentState) {
      gameStateArray = gameStateArray.filter((state) => state !== currentState);
      const newState =
        gameStateArray[Math.floor(Math.random() * gameStateArray.length)];
      setCurrentState(newState);

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
        <StateToGuess />
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

