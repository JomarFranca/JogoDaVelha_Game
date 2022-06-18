import React from "react";

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};


function Square(props) {


  const {value1, value2, value3, value4, value5, value6, value7, value8, value9, jogar, pos} = props;
  let value = '';
  switch (pos) {
    case 1: value = value1; break;
    case 2: value = value2; break;
    case 3: value = value3; break;
    case 4: value = value4; break;
    case 5: value = value5; break;
    case 6: value = value6; break;
    case 7: value = value7; break;
    case 8: value = value8; break;
    case 9: value = value9; break;

    default:
  }

  return <div className="square" style={squareStyle} onClick={() => jogar(pos)} >{value}</div>;
}

export default Square;