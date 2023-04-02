import React, { useEffect, useState } from "react"
import Cabecalho from "./componentes/Cabecalho"
import Apresentacao from "./componentes/Apresentacao"
import Sobre from "./componentes/Sobre"
import Tecnologias from "./componentes/Tecnologias"

function App() {

  const [ativaCor, setAtivaCor] = useState(false)

  useEffect(function(){
    function posicaoScroll(){
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
      <Tecnologias/>
    </div>
  );
}

export default App;
