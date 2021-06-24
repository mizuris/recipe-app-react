const INITIAL_STATE = {
  favorites: [],
  recipes: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      const alreadyFavorite = state.favorites.some(
        (item) => item.id === action.payload.id
      );
      if (alreadyFavorite) {
        return;
      }
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (recipe) => recipe.id !== action.payload
        ),
      };
    case "GET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
      };
    case "REJECT_RECIPE":
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
