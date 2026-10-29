
import { useState } from "react";
import BuscaCEP from "./componentes/Busca_Cep";
import Endereco from "./componentes/Endereco";
import "./App.css";

const App = () => {

  const [endereco, setEndereco] = useState(null);

  return (
    <div className="container">

      <h1>Localizador de CEP</h1>

      <p>
        Descubra informações de qualquer endereço
        através do CEP.
      </p>

      <BuscaCEP setEndereco={setEndereco} />

      {endereco && (
        <Endereco endereco={endereco} />
      )}

    </div>
  );
}

export default App;
