import { SAVE_INGREDIENTS } from "../actions/recipes_actions";

const ingredientsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case SAVE_INGREDIENTS:
      return action.ingredients;
    default:
      return state;
  }
};

export default ingredientsReducer;