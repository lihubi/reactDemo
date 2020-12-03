import { createStore } from 'redux'
import rootReducers from '../reducers/index'

export default function configureStore() {
    const store = createStore(
        rootReducers,/* preloadedState, */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       );
    return store;
  }