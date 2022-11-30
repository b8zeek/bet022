export const getTokenFromLocalStorage = () =>
  localStorage.getItem('auth-token') === null ? '' : JSON.parse(localStorage.getItem('auth-token')!)
