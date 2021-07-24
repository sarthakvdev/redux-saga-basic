// constants
export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

// actions
export const getUser = () => ({
  type: GET_USER
});

export const setUser = (user) => ({
  type: SET_USER,
  user
});

// initial value
const intialState = {
  user: undefined
};

// reducer
export default (state = intialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user };
    default:
      return state;
  }
};

/* Not making a reducer fot GET_USER because the watcher will attend it */
