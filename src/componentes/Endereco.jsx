
const Endereco = ({ endereco }) => {

  return (
    <div className="resultado">

      <h2>Endereço encontrado</h2>

      <p><strong>CEP:</strong> {endereco.cep}</p>

      <p><strong>Rua:</strong> {endereco.logradouro}</p>

      <p><strong>Bairro:</strong> {endereco.bairro}</p>

      <p><strong>Cidade:</strong> {endereco.localidade}</p>

      <p><strong>Estado:</strong> {endereco.uf}</p>

      <p><strong>DDD:</strong> {endereco.ddd}</p>

    </div>
  );
}

export default Endereco;
