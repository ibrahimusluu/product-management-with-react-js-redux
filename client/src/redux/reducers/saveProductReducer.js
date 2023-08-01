import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function savedProductReducer(
  state = initialState.savedProduct,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      return action.payload;

    case actionTypes.CREATE_PRODUCT_SUCCESS: // more professional with intentional programming
      return action.payload;

    default:
      return state;
  }
}
