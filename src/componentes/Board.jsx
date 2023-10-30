import React from "react";
import Square from "./Square.jsx";
import Winner from "./Winner.jsx";

export default function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
      if (Winner(squares) || squares[i]) {
        return;
        // Este if encerra a função se o jogo já tiver um vencedor ou se o jogador tentar clicar em um botão já ocupado.
      }
      const nextSquares = squares.slice();
      // Controla quem será o próximo jogador
      if (xIsNext) {
        nextSquares[i] = '🐮';
      } else {
        nextSquares[i] = '🐥';
      }
      onPlay(nextSquares);
    }
  
    // Controla as mensagens que irão aparecer na tela, ou seja, se alguém ganhou ou quem é o próximo jogador
    const winner = Winner(squares);
    let status;
    if (winner) {
      status = 'Vencedor: ' + winner;
    } else {
      status = 'Próximo jogador: ' + (xIsNext ? '🐮' : '🐥');
    }
  
    return (
      <>
      {/* monta o tabuleiro do jogo em si, uma div com três linhas e cada linha representada por uma div com três quadrados (é chamada a função square) */}
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <hr/>
      </>
    );
  }