import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose
  } from "redux";
//   import reducer from "./reducer";
  import thunk from "redux-thunk";
import reducer from "./reducer";
  
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;
  
  const middlewares = applyMiddleware(thunk);
  const enhancer = composeEnhancers(middlewares);
  
  export const store = createStore(reducer, enhancer);
  
  store.subscribe(() => {
    store.getState();
  });
  
  