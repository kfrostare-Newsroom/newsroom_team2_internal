import initialState from "../store/initialState.js";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_CREATE":
      return {
        ...state,
        createArticle: true,
        firstPage: false
      }
      case "HIDE_CREATE":
        return {
          ...state,
          createArticle: false
        }
    default:
      return state;
  }
};
export default rootReducer;
