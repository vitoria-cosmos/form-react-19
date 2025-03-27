import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Form + Action</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
