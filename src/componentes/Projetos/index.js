import './Projetos.css'

const Projetos = () => {
    return(
        <section className='projetos' id="projetos">
            <h1>Projetos</h1>

            <div className='container'>
                <a href='https://github.com/wevertonsantos/organo-reactjs'>
                    <div className='organo'>
                    </div>
                    <p>Página de organização</p>
                </a>
                <a href='https://github.com/wevertonsantos/play-requisicoes'>
                    <div className='play-requisicoes'>
                    </div>
                    <p>Plataforma de compartilhamento de vídeos</p>
                </a>
                <a href='https://github.com/wevertonsantos/consultBooks'>
                    <div className='consultalivros'>
                    </div>
                    <p>Página de consulta de livros</p>
                </a>
            </div>

            <a href='https://github.com/wevertonsantos?tab=repositories'><button>Ver mais</button></a>
        </section>
    )
}

export default Projetos