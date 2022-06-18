import { useState, useEffect } from "react";
import Square from "./Square";

const rowStyle = {
  display: "flex",
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


function Board() {
  const [nextPlayer, setNextPlayer] = useState('X');

  // exemplo do useState de forma diferente
  const arr1 = useState('');
  const value1 = arr1[0];
  const setValue1 = arr1[1];
  // modelo tradicional de useState
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('');


  const [winner, setWinner] = useState('');

	const [jogadorAtual, setJogadorAtual] = useState('');

  const play = (pos) => {
    if(winner) {
      return
    }
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
			setJogadorAtual(nextPlayer);
      setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
    }
  
  }

	const newLocal = () => {
			if (value1 !== "" && value1 === value2 && value2 === value3) {
			setWinner(jogadorAtual); };
				if (value4 !== "" && value4 === value5 && value5 === value6) {
				setWinner(jogadorAtual); };
					if (value7 !== "" && value7 === value8 && value8 === value9) {
					setWinner(jogadorAtual); };
						if (value1 !== "" && value1 === value4 && value4 === value7) {
						setWinner(jogadorAtual); };
							if (value2 !== "" && value2 === value5 && value5 === value8) {
							setWinner(jogadorAtual); };
								if (value3 !== "" && value3 === value6 && value6 === value9) {
								setWinner(jogadorAtual); };
									if (value1 !== "" && value1 === value5 && value5 === value9) {
									setWinner(jogadorAtual); };
											if (value3 !== "" && value3 === value5 && value5 === value7) {
											setWinner(jogadorAtual); };
	}


  const vencedor = newLocal


  function limpar() {
		console.log('limpou');
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
		setWinner('');
	}

  useEffect(() => { 
    vencedor();
  },[vencedor])

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

export default Board;