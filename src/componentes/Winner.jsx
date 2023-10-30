export default function Vencedor (squares){
    // checa constantemente se alguém com os mesmos valores completou 1 das sequências a seguir
    const lines =[
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
    ];
    // percorre o número de linhas que existe no array de cima
    for (let i = 0; i < lines.length; i++) {
      // define como a, b e c as posições que estão nas respectivas linhas
        const [a, b, c] = lines[i];
        // verifica se todos os quadrados estão preenchidos com algum valor e, se a condição for verdadeira, irá retornar um vencedor, se for falsa, retornará null.
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }