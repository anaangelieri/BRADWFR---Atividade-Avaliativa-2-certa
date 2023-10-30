import './App.css';
import { BrowserRouter } from "react-router-dom";
import Menu from "./componentes/layouts/Menu.jsx"
import Content from './componentes/layouts/Content.jsx';

function App() {

  return (
    <>
      <div className='App'>
        {/* responsável por informar à aplicação que haverá um roteamento de componentes */}
        <BrowserRouter>
          <Menu />
          <Content/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
