import {Route, Routes} from 'react-router-dom';
import Clima from '../../views/pages/Clima.jsx';
import Home from '../../views/pages/Home.jsx';
import Jogo from '../../views/pages/Jogo da Velha.jsx';

const Content = props => (
    <>
    <aside className='Content'>
        <Routes>
            {/* Cada route é uma rota do nosso sistema e deve-se informar qual vai ser o caminho da url */}
            <Route path='/home' exact element={<Home/>}/>
            <Route path='/jogo' exact element={<Jogo />}/>
            <Route path='/clima' exact element={<Clima />}/>
        </Routes>
    </aside>
    </>
)
export default Content;