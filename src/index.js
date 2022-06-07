import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

const rowStyle = {
  display: "flex",
};

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

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

function Square({value1, value2, value3, value4, value5, value6, value7, value8, value9, jogar, pos}) {
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

function Board() {
  const [nextPlayer, setNextPlayer] = useState('X');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('');


  const [winner, setWinner] = useState('');

  const play = (pos) => {
    console.log("vai jogar: ", pos, nextPlayer);
    switch(pos) {
      case 1: if(value1 === '') setValue1(nextPlayer); break;
      case 2: if(value2 === '') setValue2(nextPlayer); break;
      case 3: if(value3 === '') setValue3(nextPlayer); break;
      case 4: if(value4 === '') setValue4(nextPlayer); break;
      case 5: if(value5 === '') setValue5(nextPlayer); break;
      case 6: if(value6 === '') setValue6(nextPlayer); break;
      case 7: if(value7 === '') setValue7(nextPlayer); break;
      case 8: if(value8 === '') setValue8(nextPlayer); break;
      case 9: if(value9 === '') setValue9(nextPlayer); break;

      default:
    }
    if((pos === 1 && value1 === '') || (pos === 2 && value2 === '') || (pos === 3 && value3 === '') || (pos === 4 && value4 === '') || (pos === 5 && value5 === '') || (pos === 6 && value6 === '') || (pos === 7 && value7 === '') || (pos === 8 && value8 === '') || (pos === 9 && value9 === '')) {
      setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
    }
    
    const vencedor = () => {    
      if (value1 !== '' && value2 !== '' && value3 !== '') {
        setWinner (nextPlayer);
      }
    }

    vencedor();
  }

  const limpar = () => {
    console.log('limpou')
    setNextPlayer("X");
    setValue1('');
    setValue2('');
    setValue3('');
    setValue4('');
    setValue5('');
    setValue6('');    
    setValue7('');
    setValue8('');
    setValue9('');
  }

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{nextPlayer}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        {winner && (<>Winner: <span>{winner}</span></>)}
      </div>
      <button style={buttonStyle} onClick={limpar}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square value1={value1} jogar={play} pos={1} />
          <Square value2={value2} jogar={play} pos={2} />
          <Square value3={value3} jogar={play} pos={3} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value4={value4} jogar={play} pos={4} />
          <Square value5={value5} jogar={play} pos={5} />
          <Square value6={value6} jogar={play} pos={6} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value7={value7} jogar={play} pos={7} />
          <Square value8={value8} jogar={play} pos={8} />
          <Square value9={value9} jogar={play} pos={9} />
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

ReactDOM.render(<Game />, document.getElementById("root"));
