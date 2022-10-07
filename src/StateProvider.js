import React, { createContext, useContext, useReducer } from "react";
//Prepare dataLayer
export const StateContext = createContext();
//Wrap our app and provide dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//Pull info from the dataLayer
export const useStateValue = () => useContext(StateContext);
