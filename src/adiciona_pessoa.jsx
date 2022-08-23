import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adicionaItemNaLista, configuraNovaLista } from "./store/lista/action";

function AdicionaPessoa() {
  const [novaPessoa, setNovaPessoa] = useState("");
  const lista = useSelector((state) => state);

  const dispatch = useDispatch();

  const addPessoa = (event) => {
    event.preventDefault();
    if (!novaPessoa) return;

    dispatch(adicionaItemNaLista(lista, novaPessoa));
  };

  const novaLista = () => {
    dispatch(configuraNovaLista(["valor1", "valor2"]));
  };

  const actionQueNaoExiste = () => {
    dispatch({
      type: "batatinha123",
      payload: ["aviao", "feijao"],
    });
  };

  return (
    <form action="" onSubmit={addPessoa}>
      <input
        type="text"
        onChange={(event) => setNovaPessoa(event.target.value)}
      />
      <input type="submit" value="Enviar pessoa" />
      <input type="button" value="Criar nova lista" onClick={novaLista} />
      <input
        type="button"
        value="Action que nao existe"
        onClick={actionQueNaoExiste}
      />
    </form>
  );
}

export default AdicionaPessoa;
