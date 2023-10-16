export const setUserIsSuperuser = (isSuperuser) => {
  return {
    type: "SET_USER_IS_SUPERUSER",
    payload: isSuperuser,
  };
};
