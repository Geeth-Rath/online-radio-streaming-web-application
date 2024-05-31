import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REFRESH_TOKEN_SUCCESS,
  SET_USER_ID,
} from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
  userId: null,
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("accessToken", action.accessToken);
      localStorage.setItem("refreshToken", action.refreshToken);
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: action.accessToken,
      };
    case SET_USER_ID:
      return {
        ...state,
        userId: action.userId,
      };
    default:
      return state;
  }
};
export default authReducer;
