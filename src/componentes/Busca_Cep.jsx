
import { useState } from "react";
import axios from "axios";

const BuscaCEP = ({ setEndereco }) => {

  const [cep, setCep] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function consultarCEP() {

    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      setErro("Digite um CEP válido!");
      setEndereco(null);
      return;
    }

    try {

      setCarregando(true);
      setErro("");
      setEndereco(null);

      const resposta = await axios.get(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );

      if (resposta.data.erro) {
        setErro("CEP não encontrado!");
        return;
      }

      setEndereco(resposta.data);

    } catch (error) {

      setErro("Erro ao consultar o CEP. Tente novamente.");

    } finally {

      setCarregando(false);

    }
  }

  return (
    <div>

      <input
        type="text"
        placeholder="Digite seu CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        maxLength={9}
      />

      <button onClick={consultarCEP} disabled={carregando}>
        {carregando ? "Consultando..." : "Consultar"}
      </button>

      {erro && <p className="erro">{erro}</p>}

    </div>
  );
}

export default BuscaCEP;
