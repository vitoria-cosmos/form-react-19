// importar o nosso hook
import { useFormStatus } from "react-dom";

export function ButtonSubmit() {
  const { pending } = useFormStatus();
  //   o pending vai ser o nosso loader. Ele vai verificar se os dados ainda não foram enviados
  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending ? "Enviando dados..." : "Cadastrar"}
      </button>

      {pending && <p>Estamos enviando seu formulário...</p>}
    </div>
  );
}
