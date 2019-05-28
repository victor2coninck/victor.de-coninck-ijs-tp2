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
      cells: Array(9).fill("X"),
      currentPlayer: "P1",
      winner: ""
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


  render() {
    return (
      <div
        style={gameLayoutStyle}
        onClick={() => 
        {if (this.state.currentPlayer === "P1") {
          this.setState({currentPlayer: "P2"});
        }else{
          this.setState({currentPlayer: "P1"});
        }}}
      >
        <GameInfo onClick={this.handleClick} gameState={this.state} currentPlayer={this.state.currentPlayer}/>
        <Board cells={this.state.cells} currentPlayer={this.state.currentPlayer} onClickCell={index => this.handleClickCell(index)} />
      </div>
    );
  }
}
export default GameLayout;
