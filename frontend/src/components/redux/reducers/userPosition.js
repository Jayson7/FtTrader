const initialState = {
  isSuperuser: false,
};

const userPositionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_IS_SUPERUSER":
      return {
        ...state,
        isSuperuser: action.payload,
      };
    default:
      return state;
  }
};

export default userPositionReducer;
