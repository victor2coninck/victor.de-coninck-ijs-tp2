import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseOver: false,
      clicked: false,
      symb: ""
    };
  }

  render() {
    return (
    <div 
      style={{...cellStyle, backgroundColor: this.state.mouseOver ? 'blue' : 'white'}} 
      onMouseOver={() => this.setState({mouseOver: true})}
      onMouseOut={() => this.setState({mouseOver: false})}
      onClick={() => this.state.clicked ? {} : this.setState({clicked: true, symb: (this.props.player==="P1" ? "X" : "O")})}
  >{this.state.symb}</div>);
  }
}

//onClickCell here
export default Cell;
