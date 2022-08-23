import { createStore } from "redux";
import listaReducer from "./lista/reducer";

let globalState = createStore(listaReducer);

export default globalState;
