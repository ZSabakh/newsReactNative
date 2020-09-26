import createContext from "./createContext";

function newsReducer(state, action) {
  switch (action.type) {
    case "addNews":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `News #${state.length + 1}`,
        },
      ];
    case "deleteNews":
      return state.filter((state) => state.id !== action.payload);
    default:
      return;
  }
}

function addNews(dispatch) {
  return () => {
    dispatch({ type: "addNews" });
  };
}

function deleteNews(dispatch) {
  return (id) => {
    dispatch({ type: "deleteNews", payload: id });
  };
}

export const { Context, Provider } = createContext(
  newsReducer,
  { addNews, deleteNews },
  []
);
