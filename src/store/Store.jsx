import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const ContextStore = createContext(null);

/**
 * @component This is a store context component which takes props.children and returns a context provider.
 * @typedef {function}  Store
 * @param {props} children
 * @returns {Provider} returns a Context.Provider
 */

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextStore.Provider value={[state, dispatch]}>
      {children}
    </ContextStore.Provider>
  );
};

export default Store;
