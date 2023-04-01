import './Apresentacao.css'
import imgProgramador from '../../imagens/programador.png'

const Apresentacao = () => {
    return(
        <section className="apresentacao">
            <div>
                <h1>Weverton Santos</h1>
                <h2>Desenvolvedor Front-End</h2>
                <p>Apaixonado por criar.</p>
            </div>
            <img src={imgProgramador}/>
        </section>
    )
}

export default Apresentacao