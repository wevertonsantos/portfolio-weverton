import { useEffect } from 'react'
import './Habilidades.css'

const Habilidades = () => {

    const divExplicacao = document.querySelector('.explicacao')

    const explicacaoPadrao = () => {
        divExplicacao.innerHTML = `Passe por cima de uma tecnologia para visualizar as informações`
    }

    const explicacaoCss = () => {

            divExplicacao.innerHTML =  
                                    `
                                        CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas.
                                        É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML, por exemplo.
                                        De forma prática, ela funciona como uma camada de personalização ao conteúdo visível.
                                    `
    
    }

    const explicacaoJs = () => {

        divExplicacao.innerHTML =  `
                                    JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — 
                                    toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — 
                                    mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc.
                                    `

}

    const explicacaoHtml = () => {
        
        divExplicacao.innerHTML = `Sigla para HyperText Markup Language — Linguagem de Marcação de Hipertexto —, o HTML é o componente base da web.
                                    Isso quer dizer que ele permite a construção de websites e a inserção de novos conteúdos,
                                     como imagens e vídeos, por meio dos hipertextos.
                                    `

    }

    const explicacaoGit = () => {
        
        divExplicacao.innerHTML = `O Git é um sistema de controle de versão distribuído, 
                                    o que significa que um clone local do projeto é um repositório de controle de versão completo.
                                     Esses repositórios locais totalmente funcionais facilitam o trabalho offline ou remotamente.
                                    `

    }

    return(
        <section className="tecnologias" id="habilidades">
            <h1>Habilidades</h1>
            <div>
                <div className='tecnologias-container'>
                    <h2 className='html' onMouseOver={explicacaoHtml} onMouseOut={explicacaoPadrao}><i class="fa-brands fa-html5"></i></h2>
                    <h2 className='css' onMouseOver={explicacaoCss} onMouseOut={explicacaoPadrao}><i class="fa-brands fa-css3-alt"></i></h2>
                    <h2 className='js' onMouseOver={explicacaoJs} onMouseOut={explicacaoPadrao}><i class="fa-brands fa-square-js"></i></h2>
                    <h2 className='git' onMouseOver={explicacaoGit} onMouseOut={explicacaoPadrao}><i class="fa-brands fa-github"></i></h2>
                </div>
                <div className='explicacao'>
                    Passe por cima de uma tecnologia para visualizar as informações
                </div>
            </div>
        </section>
    )
}

export default Habilidades