import './Home.css'

const Home = props => (
    <>
        <div className="Home">
            <h1>Home</h1>
            <div className="text_home">
                <h2 className='subtitulo'>Seja bem vindo!</h2>
                <p>Aqui você vai ter acesso a:</p>
                <ul>
                    <li>Jogo da velha</li>
                    <li>Previsão do tempo</li>
                </ul>
                <p>Aproveite!</p>
            </div>
        </div>
    </>
)

export default Home;