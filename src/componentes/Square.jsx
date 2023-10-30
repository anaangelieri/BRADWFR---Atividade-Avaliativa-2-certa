// Para fazer cada quadrado separadamente, deve - se ter um botão que com o clique, onde vai ser atribuído um valor à ele
export default function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }