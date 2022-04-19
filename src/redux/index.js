import { createStore } from "redux";
import { list } from './reducers/list';

const store = createStore(list);

export { store }