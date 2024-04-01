import React, { useState, useEffect } from "react";
import ScoreContainer from "../containers/ScoreContainer";
import MapContainer from "../containers/MapContainer";
import Header from "../components/Header";
import StateToGuess from "../components/StateToGuess";
import { stateArray } from "../components/maps/UsMap";



const GameScreen = () => {


  
  const [currentState, setCurrentState] = useState(stateArray[Math.floor(Math.random() * stateArray.length)]);

  console.log(currentState);
 

  const handleStateClick = (state) => {
   
    if(state === currentState){
      let stateArray = stateArray.filter((state) => state !== currentState)
      setCurrentState(stateArray[Math.floor(Math.random() * stateArray.length)]);
    }
    console.log(state);
  }

  return (
    <>
      <Header header="test" />
      <div className="w-3/4 mx-auto flex flex-col justify-center mt-8">
        <StateToGuess />
        <div className="flex ">
          <ScoreContainer className="rounded-md"/>
          <MapContainer correctState={currentState} onStateClick={handleStateClick} />
        </div>
      </div>
    </>
  );
};

export default GameScreen;
