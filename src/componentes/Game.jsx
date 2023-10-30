import React, { useState } from "react";
import Board from "./Board.jsx";

export default function Game() {
  // Cria a constante history que armazena o histórico do jogo, que começa com um array de 9 posições nulas.
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // Cria a constante currentMove, que acompanha qual é o movimento atual
  const [currentMove, setCurrentMove] = useState(0);
  // Cria a constante para controlar qual será o próximo jogador, que só existirá quando o índice do movimento for par, é quando será a vez do X ou da 🐮 
  const xIsNext = currentMove % 2 === 0;
  // Cria a constante currentSquares, que acompanha qual é o quadrado da jogada atual
  const currentSquares = history[currentMove];

  // Essa função é a que vai atualizar o histórico de jogadas
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // Essa função é a que vai controlar e atualizar o próximo movimento do jogo, ela que permite que o jogador volte um movimento
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // Utiliza o método map para uma lista de botões que representam os movimentos
  const moves = history.map((squares, move) => {
    let description;
    // se o movimento for maior que 0, a descrição do botão será: Vá para o movimento # junto com o número do movimento
    if (move > 0) {
      description = '🌼 Vá para o movimento #' + move;
    } else {
      // se o movimento for igual a zero, a descrição do botão será: Vá para o início do jogo
      description = '🌼 Vá para o início do jogo';
    }
    return (
      // aqui é onde se retorna a lista com todos os movimentos, que já foram realizados, com suas respectivas descrições      
      <li key={move} className="list">
        <button className="buttons" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        {/* passa as propriedades xIsNext, squares e onPlay para o componente Board */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="play-board">
        <div className="game-info">
        {/* onde é criada a lista de movimentos */}
        <ol>{moves}</ol>
      </div>
      </div>
    </div>
  );
}