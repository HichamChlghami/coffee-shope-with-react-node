import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { cart } from "./cartReducer";
import { product } from "./productReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet,
};

export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers(persistConfig, {
      product,
      cart,
    }),
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
  const persistor = persistStore(store);

  return { persistor, store };
};
