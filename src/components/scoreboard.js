import React from "react";

const Scoreboard = (props) => {

  return (
    <div className="scoreboardWrapper">
      <div className='scoreboard'>
          <p>Current Score: {props.score}</p>
          <p>Best Score: {props.bestScore}</p>
      </div>
    </div>
  )
}

export default Scoreboard