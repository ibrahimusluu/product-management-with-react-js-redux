import { applyMiddleware, createStore } from "redux"; // configureStore instead deprecated "createStore"
import rootReducer from "./index";
import thunk from "redux-thunk"; // importing of "Thunk"

export default function configureStore() {
  // "Actions" must be plain objects. Instead, the actual type was: 'function'. You may need to add "middleware" to your store...
  // Use "custom middleware" for "async actions"
  return createStore(rootReducer, applyMiddleware(thunk));
}
