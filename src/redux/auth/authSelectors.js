export const getIsAuthenticated = state => state.auth.IsAuthenticated;

export const getUsername = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
