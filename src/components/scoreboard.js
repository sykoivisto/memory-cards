import React from "react";

const Scoreboard = (props) => {

  return (
    <div className='scoreboard'>
        <p>Current Score: {props.score}</p>
        <p>Best Score: {props.bestScore}</p>
    </div>
  )
}

export default Scoreboard