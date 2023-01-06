import React, { useState } from 'react';

import Card from './components/card';
import Scoreboard from './components/scoreboard';

function App() {
  // App is used as the game controller. App contains an array of cards which can be shuffled and rendered as many times as the user wants.
  // App controls the flow of the game.
  // There should be a function that displays the cards in a random order anytime a user clicks one

  const [characters, setCharacters] = useState([
    {
      name: 'THE COLLECTOR',
      imgSrc: '',
      id: 1,
    },
    {
      name: 'DOCTOR ERIK SELVIG',
      imgSrc: '',
      id: 2,
    },
    {
      name: 'DOCTOR STRANGE',
      imgSrc: '',
      id: 3,
    },
    {
      name: 'SKURGE',
      imgSrc: '',
      id: 4,
    },
    {
      name: 'GRANDMASTER',
      imgSrc: '',
      id: 5,
    },
    {
      name: 'HAWKEYE',
      imgSrc: '',
      id: 6,
    },
    {
      name: 'HEIMDALL',
      imgSrc: '',
      id: 7,
    },
    {
      name: 'HELA',
      imgSrc: '',
      id: 8,
    },
    {
      name: 'HULK',
      imgSrc: '',
      id: 9,
    },
    {
      name: 'LOKI',
      imgSrc: '',
      id: 10,
    },
    {
      name: 'ODIN',
      imgSrc: '',
      id: 11,
    },
    {
      name: 'THOR',
      imgSrc: '',
      id: 12,
    },
    {
      name: 'VALKYRIE',
      imgSrc: '',
      id: 13,
    },
  ]);

  const [clickedCards, setClickedCards] = useState([]);

  const [score, setScore] = useState(0);

  // Durstenfeld
  const shuffleArray = (orig) => {
    let array = orig.slice(0);
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const onRestartGame = () => {
    // do some cleanup
    // reset the score
    setScore(0);
    // reset clickedCards
    setClickedCards([]);
  };

  // do stuff that should happen when the game is over
  // success true: all cards clicked successfully
  // false: user clicked a card twice
  const onGameOver = (success) => {
    // display our game over screen.
    // add a button to restart game that
    // destroys the game over scren and calls onRestartGame();
  };

  // the user clicking the card should set off a chain of events
  // 1 - check if the game is over by having clicked every card once
  // 2 - we need to determine if the card has been clicked before so we can eithe either end the game, or log the new score
  // 3 - reshuffle the cards, and if the game is over- show an end game screen
  const onUserClickCard = (id) => {
    // reshuffle the cards.
    setCharacters(shuffleArray(characters));

    // check if the game is over by having clicked all the cards once
    if (clickedCards.length >= characters.length) {
      onGameOver(true); // we won the gane
      return;
    }

    // check if the card has been clicked before
    if (clickedCards.includes(id)) {
      onGameOver(false); // we lost the game
      return;
    }

    // if we have not won or lost our game, log the new score and continue
    setScore(score + 1);

    // add the card to the list of clicked cards
    setClickedCards(clickedCards.concat([id]))
  };

  return (
    <div>
      <Scoreboard score={score}></Scoreboard>
      {characters.map((character) => {
        return (<Card
          id={character.id}
          imgSrc={character.imgSrc}
          name={character.name}
          onUserClickCard={onUserClickCard}
        ></Card>);
      })}
    </div>
  );
}

export default App;
