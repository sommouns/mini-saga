import * as ActionTypes from "./actionTypes";

const reducer = (state = { number: 0 }, action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return { number: state.number + 1 };
    default:
      return state;
  }
};

export default reducer