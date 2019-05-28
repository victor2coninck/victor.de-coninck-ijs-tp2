import React from "react";



// FIXME: change message and color based on `gameState`'s value
//la fct s'attend a un iput qui est un object qui contient ces deux
// truccs, et si ils y sont pas c'est mis a default selon les val
//la mauvaise facon c'est de juste mettre props puis props.currentPlayer
/*

destructuration:
c pas mal pcq en opti ca dit si player est use ou pas
const Gale ) (props) => {
  cont { player } = props.plyer;
  return (
      <h3> cc {player} </h>
  );
}

*/
const GameInfo = ({ gameState = "stale", currentPlayer = "unkown" }) => (
  gameState.winner === "" ?
  <h3>It's your turn {currentPlayer}</h3> : <h1>{gameState.winner} HAS WON THE GAME</h1>
);

export default GameInfo;
