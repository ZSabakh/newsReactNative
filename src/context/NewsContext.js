import createContext from "./createContext";

function newsReducer(state, action) {
  switch (action.type) {
    case "addNews":
      return [...state, { title: `News #${state.length + 1}` }];
    default:
      return;
  }
}

function addNews(dispatch) {
  return () => {
    dispatch({ type: "addNews" });
  };
}

export const { Context, Provider } = createContext(
  newsReducer,
  { addNews },
  []
);
