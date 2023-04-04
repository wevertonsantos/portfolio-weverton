import './Apresentacao.css'
import imgProgramador from '../../imagens/programador.png'

const Apresentacao = () => {
    return(
        <section className="apresentacao" id="inicio">
            <div>
                <h2>Olá, eu sou</h2>
                <h1>Weverton Santos</h1>
                <p>Criações e experiência no desenvolvimento front-end</p>
                <a href='https://drive.google.com/file/d/1V9V1BS2JDyDpSpLX_M6seg3cMk7-_Oxi/view?usp=share_link'><button>Download CV</button></a>
                <a href='https://www.linkedin.com/in/wevertonsantoss/'><button>Contrate-me</button></a>
            </div>
            <img src={imgProgramador}/>
        </section>
    )
}

export default Apresentacao