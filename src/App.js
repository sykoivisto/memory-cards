import React, { useEffect, useState } from 'react';

import Card from './components/card';
import Scoreboard from './components/scoreboard';
import Gameover from './components/gameover';

import './app.css'

function App() {
  const [characters, setCharacters] = useState([
    {
      name: 'THE COLLECTOR',
      imgSrc: './img/collector.jpg',
      id: 1,
    },
    {
      name: 'DOCTOR ERIK SELVIG',
      imgSrc: './img/selvig.jpg',
      id: 2,
    },
    {
      name: 'DOCTOR STRANGE',
      imgSrc: './img/strange.jpg',
      id: 3,
    },
    {
      name: 'SKURGE',
      imgSrc: './img/skurge.jpg',
      id: 4,
    },
    {
      name: 'GRANDMASTER',
      imgSrc: './img/grandmaster.jpg',
      id: 5,
    },
    {
      name: 'HAWKEYE',
      imgSrc: './img/hawkeye.jpg',
      id: 6,
    },
    {
      name: 'HEIMDALL',
      imgSrc: './img/heimdall.jpg',
      id: 7,
    },
    {
      name: 'HELA',
      imgSrc: './img/hela.jpg',
      id: 8,
    },
    {
      name: 'HULK',
      imgSrc: './img/hulk.jpg',
      id: 9,
    },
    {
      name: 'LOKI',
      imgSrc: './img/loki.jpg',
      id: 10,
    },
    {
      name: 'ODIN',
      imgSrc: './img/odin.jpg',
      id: 11,
    },
    {
      name: 'THOR',
      imgSrc: './img/thor.jpg',
      id: 12,
    },
    {
      name: 'VALKYRIE',
      imgSrc: './img/valkyrie.jpg',
      id: 13,
    },
  ]);

  const [clickedCards, setClickedCards] = useState([]);

  const [score, setScore] = useState(0);

  const [bestScore, setBestScore] = useState(0);

  const [showGameOver, setShowGameOver] = useState(false);

  const [gameWin, setGameWin] = useState(false);

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
    // get rid of the game over screen
    setShowGameOver(false);
    // reset game win status
    setGameWin(false);
    // reset the score
    setScore(0);
    // reset clickedCards
    setClickedCards([]);
  };

  const onUserClickCard = (id) => {
    // reshuffle the cards.
    setCharacters(shuffleArray(characters));

    // check if the card has been clicked before
    if (clickedCards.includes(id)) {
      setShowGameOver(true); // we lost the game
      return;
    }

    // if we have not lost our game, log the new score and continue
    setScore(score + 1);

    // add the card to the list of clicked cards
    setClickedCards(clickedCards.concat([id]))
  };

  useEffect(() => {
    // check if the game is over by having clicked all the cards once
    if (clickedCards.length >= characters.length) {
      // we won the game so update status
      setGameWin(true);
      setShowGameOver(true);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedCards])

  useEffect(() => {
    const updateBestScore = (score) => {
      if (score > bestScore) setBestScore(score);
    };
    updateBestScore(score);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score])

  return (
    <div>
      {showGameOver ? (
        <Gameover win={gameWin} onRestartGame={onRestartGame} score={score}></Gameover>
      ) : (
        <div>
          <Scoreboard score={score} bestScore={bestScore}></Scoreboard>
          <div className='cardsContainer'>
            {characters.map((character) => {
              return (<Card
                key={character.id}
                id={character.id}
                imgSrc={character.imgSrc}
                name={character.name}
                onUserClickCard={onUserClickCard}
              ></Card>);
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
