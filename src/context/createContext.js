import React, { useReducer } from "react";

export default (reducer, action, initialState) => {
  const Context = React.createContext();

  function Provider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const dispatchAction = {};
    for (let key in action) {
      dispatchAction[key] = action[key](dispatch);
    }

    return (
      <Context.Provider value={{ state: state, ...dispatchAction }}>
        {props.children}
      </Context.Provider>
    );
  }

  return { Context, Provider };
};
