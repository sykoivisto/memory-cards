import React from 'react';

const Gameover = (props) => {
  //props.win should be true or false
  //props.onRestartGame will restart the game.
  //props.score is the score

  return (
    <div>
      {props.win ? <p>You won the Game!</p> : <p>Your score was {props.score}. Better luck next time!</p>}
      <button onClick={props.onRestartGame}>Play Again</button>
    </div>
  )
}

export default Gameover