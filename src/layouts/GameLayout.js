import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class GameLayout extends React.Component {
  //tout ce qui est etqt de jeu c'est ici et pas plus bas
  constructor(props) {
    super(props);

    this.state = {
      gameState: "stale",
      cells: Array(9).fill(""),
      currentPlayer: "P1"
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  //truc a faire a la derniere etape du tp
  static getDerivedStateFromProps(props, state) {
    //lines
    if ((state.cells[0] === state.cells[1] === state.cells[2] && state.cells[0] !== "") ||
    (state.cells[3] === state.cells[4] === state.cells[5] && state.cells[3] !== "") ||
    (state.cells[6] === state.cells[7] === state.cells[8] && state.cells[6] !== "") ||
    //columns
    (state.cells[0] === state.cells[3] === state.cells[6] && state.cells[0] !== "") ||
    (state.cells[1] === state.cells[4] === state.cells[7] && state.cells[1] !== "") ||
    (state.cells[2] === state.cells[5] === state.cells[8] && state.cells[2] !== "") ||
    //diag
    (state.cells[0] === state.cells[4] === state.cells[8] && state.cells[0] !== "") ||
    (state.cells[6] === state.cells[4] === state.cells[2] && state.cells[6] !== ""))
    {
      state.winner = state.currentPlayer;
    }
    return state;
  }
  
  switchPlayer(currentPlayer) {
    if (currentPlayer === "P1")
      return "P2";
    return "P1";
  }

  onClickCell(cells) {
    return (index) => {
      if (cells[index] !== "")
        return;
      cells[index] = this.state.currentPlayer === "P1" ? "X" : "O";
      this.setState({cells: cells, currentPlayer: this.switchPlayer(this.state.currentPlayer)});
    };
  }

  render() {
    return (
      <div style={gameLayoutStyle}>
        <GameInfo gameState={this.state.gameState} currentPlayer={this.state.currentPlayer}/>
        <Board cells={this.state.cells} onClickCell={this.onClickCell(this.state.cells)} />
      </div>
    );
  }
}
export default GameLayout;
