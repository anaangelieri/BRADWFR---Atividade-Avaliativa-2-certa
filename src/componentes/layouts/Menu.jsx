import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './Menu.css';

const Menu = (props) => {
   // Define uma variável de estado chamada menuOpen para controlar a visibilidade do menu
  //  o useState começa em false porque o menu vai iniciar fechado
    const [menuOpen, setMenuOpen] = useState(false);
  
     // Define uma função handleMenu para alternar o estado do menu entre aberto e fechado, quando ela é chamada, inverte o valor do menu
    const handleMenu = () => {
      setMenuOpen(!menuOpen);
  };
  
    return (
      <>
      {/* Cria uma div com a classe "Menu" e adiciona a classe "open" se menuOpen for verdadeiro */}
      {/* ${} é usado para incorporar o valor de menuOpen na string. */}
      {/* Se menuOpen for verdadeiro, ele adiciona a classe 'open' à string; senão, deixa a string em branco. */}
        <div className={`Menu ${menuOpen ? 'open' : ''}`}>
           {/* Cria uma div que atua como botão para abrir/fechar o menu e associa o evento de clique à função handleMenu */}
          <div className='handle-menu' onClick={handleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
          <nav>
            <ul>
              {/* Exibe o Home caso o menuOpen seja verdadeiro */}
              {menuOpen && (
                <li><Link to="/home">Home</Link></li>
              )}
              {/* Exibe o Jogo da Velha caso o menuOpen seja verdadeiro */}
              {menuOpen && (
                <li><Link to="/jogo">Jogo da Velha</Link></li>
              )}
              {/* Exibe a Precisão do tempo caso o menuOpen seja verdadeiro */}
              {menuOpen && (
                <li><Link to="/clima">Previsão do tempo</Link></li>
              )}
            </ul>
          </nav>
        </div>
      </>
    );
  };
  
  export default Menu;