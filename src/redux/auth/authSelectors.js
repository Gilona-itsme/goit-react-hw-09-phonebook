export const getIsAuthenticated = state => Boolean(state.auth.token);

export const getUsername = state => state.auth.user.name;
