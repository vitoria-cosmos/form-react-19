import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  // o formData posso pegar as propriedades dentro do formulário
  //   como os nomes dos nossos inputs
  // usando o action, eu só quero pegar o valor final
  function handleRegister(formData) {
    const nome = formData.get("nome");
    const tarefa = formData.get("tarefa");

    console.log(nome);
    console.log(tarefa);
    setMessage("Bem vindo " + nome + "Tarefa atual " + tarefa);
  }
  return (
    <div>
      <h1>Form + Action</h1>
      <form action={handleRegister}>
        {/* a action sempre envia o formulário, como método post */}
        <input
          type="text"
          //   o nome é do que se trata o input
          name="nome"
          required
          placeholder="Digite seu nome..."
        />
        <br />
        <input
          type="text"
          name="tarefa"
          required
          placeholder="Digite a tarefa..."
        />
        <br />

        <button type="submit">Cadastrar</button>
      </form>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
