// Duck is a file structure method
// All the constants, actions, reducers are in same file

// constants
const INCREMENT = "increment";
const DECREMENT = "decrement";

// actions
export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

// initial value
const intialState = {
  count: 0
};

// reducer
export default (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};
