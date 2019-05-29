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
const GameInfo = ({ gameState = "stale", currentPlayer = "unkown" }) => {
  switch(gameState)
  {
    case "stale":
      return <h3>It's your turn {currentPlayer}</h3>;
    case "even":
      return <h3>EGALITE !!!</h3>;
    default:
      return <h3>{currentPlayer} HAS WON THE GAME</h3>;
  }
};

export default GameInfo;
