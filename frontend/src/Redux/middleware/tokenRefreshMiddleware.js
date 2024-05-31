import { refreshToken } from "../actions/authActions";

const tokenRefreshMiddleware = (store) => (next) => (action) => {
  if (action.type === "API_ERROR" && action.error.response.status === 401) {
    store.dispatch(refreshToken());
  }
  return next(action);
};

export default tokenRefreshMiddleware;
