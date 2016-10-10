import {FETCH_CATEGORY_PRODUCTS,MAKE_IT_DONE} from '../actions/CategoryPage';

const initialState = {
  categoryProductData: [],
  done: false
};

export default function categoryPage(state = initialState, action) {
  debugger;
  switch (action.type) {
    case FETCH_CATEGORY_PRODUCTS:
    var newState = {
      ...state,
      categoryProductData: action.data.products
    };
      return newState;
      case MAKE_IT_DONE:
    var newState = {
      ...state,
      done: action.done
    };
      return newState;
    default:
      return state;
  }
}
