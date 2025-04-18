import { useState } from "react";
// como exportamos com export, temos que colocar o componente dentro de chaves
import { ButtonSubmit } from "./button";

function App() {
  const [message, setMessage] = useState("");

  async function handleRegister(formData) {
    // FAKE DELAY
    // vai travar nessa função por 2.5s
    await new Promise((resolve) => setTimeout(resolve, 2500));

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
        <input
          type="text"
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
        <ButtonSubmit />
      </form>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
