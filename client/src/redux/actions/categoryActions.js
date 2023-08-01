import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

export function getCategories() {
  // Redux-Thunk
  // connecting to the API; we need Redux-Thunk for Asynchronous Operations
  return function (dispatch) {
    // debugger; // go to browser and refresh
    let url = "http://localhost:3000/categories";

    return fetch(url)
      .then((response) => response.json()) // response is always "string"
      .then((result) => dispatch(getCategoriesSuccess(result)));
    // .then((result) => {
    //   // console.log(dispatch);

    //   // dispatch(getCategoriesSuccess(result));
    // });
  };
}
