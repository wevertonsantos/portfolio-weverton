import './Cabecalho.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Cabecalho = ({acao}) => {
	return(
		<header className={acao ? 'ativaCor' : ''}>
			<h1>WS</h1>
			<nav>
				<ul>
					<li><AnchorLink href='#inicio'>Início</AnchorLink></li>
					<li><AnchorLink href='#sobre'>Sobre</AnchorLink></li>
					<li><AnchorLink href='#habilidades'>Habilidades</AnchorLink></li>
					<li><AnchorLink href='#projetos'>Projetos</AnchorLink></li>
				</ul>
			</nav>
		</header>
	)
}

export default Cabecalho