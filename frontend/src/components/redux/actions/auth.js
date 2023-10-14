// src/actions/auth.js

export const login = (username, isAdmin) => ({
  type: "LOGIN",
  username,
  isAdmin,
});

export const logout = () => ({
  type: "LOGOUT",
});
