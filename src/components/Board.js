import React from "react";
import Cell from "./Cell";

const boardStyle = {
  display: "grid",
  width: "600px",
  height: "calc(100%)",
  grid: "auto-flow dense / 1fr 1fr 1fr",
  gridAutoRows: "auto"
};

//par defaut un arr vide, a nous de faire ensorte que non
//la fct aussi par defaut elle fait rien comme ca ca fait pas derreur au cas ou
const Board = ({ cells = [], onClickCell = () => {} }) => (
  <div style={boardStyle}>
    {cells.map((c, index) => <Cell symb={c} onClick={() => onClickCell(index) }/>)}
  </div>
    /*cells.map is the new for, cells on l emodifie pas,
                                                              tout doit etre imutable, du coup on en cree un neww a partir de cells 
                                                              map donne l'elem (c) et l'index
                                                              */
);

export default Board;
