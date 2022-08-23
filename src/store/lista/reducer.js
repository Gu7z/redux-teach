import { ADICIONA_ITEM_NA_LISTA, CONFIGURA_NOVA_LISTA } from "./types";

const initialState = ["Gustavo", "Mateus"];

function listaReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CONFIGURA_NOVA_LISTA:
      return payload;
    case ADICIONA_ITEM_NA_LISTA:
      return payload;
    default:
      return state;
  }
}

export default listaReducer;
