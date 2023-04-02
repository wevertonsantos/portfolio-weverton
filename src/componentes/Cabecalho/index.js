import './Cabecalho.css'

const Cabecalho = ({acao}) => {
	return(
		<header className={acao ? 'ativaCor' : ''}>
			<h1>WS</h1>
			<div>
				<ul>
					<li><a href=''>Principal</a></li>
					<li><a href=''>Sobre</a></li>
					<li><a href=''>Tecnologias</a></li>
					<li><a href=''>Projetos</a></li>
				</ul>
			</div>
		</header>
	)
}

export default Cabecalho