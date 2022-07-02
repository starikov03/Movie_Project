import { createStore } from 'redux';
import MovieApp from "./reducers";


export const store = createStore(MovieApp);
//const unsubscribe = store.subscribe(() => console.log(store.getState()))


