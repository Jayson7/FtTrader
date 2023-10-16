import { LOGOUT } from "../actions/logoutAction";
// Reducers
const initialState = {
  email: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,

        email: action.email,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
