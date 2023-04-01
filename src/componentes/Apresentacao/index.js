import './Apresentacao.css'
import imgProgramador from '../../imagens/programador.png'

const Apresentacao = () => {
    return(
        <section className="apresentacao">
            <div>
                <h2>Olá, eu sou</h2>
                <h1>Weverton Santos</h1>
                <p>Criações e experiência no desenvolvimento front-end</p>
                <button>Download CV</button>
                <button>Contrate-me</button>
            </div>
            <img src={imgProgramador}/>
        </section>
    )
}

export default Apresentacao