import React, { useEffect, useState } from "react"
import Cabecalho from "./componentes/Cabecalho"
import Apresentacao from "./componentes/Apresentacao"
import Sobre from "./componentes/Sobre"
import Projetos from "./componentes/Projetos"
import Habilidades from "./componentes/Habilidades"

function App() {

  const [ativaCor, setAtivaCor] = useState(false)
  useEffect(() => {
    const posicaoScroll = () => {
      if(window.scrollY > 10){
        setAtivaCor(true)
      }else{
        setAtivaCor(false)
      }
    }

    window.addEventListener('scroll', posicaoScroll)
  }, [])


  return (
    <div className="App">
      <Cabecalho acao={ativaCor}/>
      <Apresentacao/>
      <Sobre/>
      <Habilidades/>
      <Projetos/>
    </div>
  );
}

export default App;
