import Cabecalho from "./componentes/Cabecalho"
import Apresentacao from "./componentes/Apresentacao"
import Tecnologias from "./componentes/Tecnologias"
import Sobre from "./componentes/Sobre"

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Apresentacao/>
      <Sobre/>
      <Tecnologias/>
    </div>
  );
}

export default App;
