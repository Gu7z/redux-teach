import { ADICIONA_ITEM_NA_LISTA, CONFIGURA_NOVA_LISTA } from "./types";

//string
const adicionaItemNaLista = (listaAntiga, item) => {
  return { type: ADICIONA_ITEM_NA_LISTA, payload: [...listaAntiga, item] };
};

//string[]
const configuraNovaLista = (lista) => {
  return { type: CONFIGURA_NOVA_LISTA, payload: lista };
};

export { adicionaItemNaLista, configuraNovaLista };
