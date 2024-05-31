import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const SET_USER_ID = "SET_USER_ID";
export const API_ERROR = "API_ERROR";

export const registerSuccess = (accessToken, refreshToken) => ({
  type: REGISTER_SUCCESS,
  accessToken,
  refreshToken,
});

export const loginSuccess = (accessToken, refreshToken) => ({
  type: LOGIN_SUCCESS,
  accessToken,
  refreshToken,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const refreshTokenSuccess = (accessToken) => ({
  type: REFRESH_TOKEN_SUCCESS,
  accessToken,
});

export const setUserId = (userId) => ({
  type: SET_USER_ID,
  userId,
});

export const apiError = (error) => ({
  type: API_ERROR,
  error,
});

export const registerUser = (userData, navigate) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/register", userData);
      const { access_token, refresh_token } = response.data;
      dispatch(registerSuccess(access_token, refresh_token));
      navigate("/login");
    } catch (error) {
      dispatch(apiError(error));
    }
  };
};

export const loginUser = (credentials, navigate) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/login", credentials);
      const { access_token, refresh_token, user_id } = response.data;

      console.log("access_token", access_token);
      dispatch(loginSuccess(access_token, refresh_token));
      navigate(`/content/${user_id}`);
    } catch (error) {
      console.log("login error", error);
      dispatch(apiError(error));
    }
  };
};
/////////////////////////**********************************problem******************** */
export const logoutUser = () => {
  return async (dispatch, getState) => {
    try {
      // Get the current refresh tokenco

      const refreshToken = getState().auth.refreshToken;
      console.log("ddddddddddd", refreshToken);

      // Call the logout endpoint with the refresh token
      const response = await api.post("/logout", {
        refresh_token: refreshToken,
      });
      console.log("1111111111log err", response);

      // Dispatch the logout success action
      dispatch(logoutSuccess());
      console.log("1111222222222222222111111log err");

      // Clear local storage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      console.log("33333333333333 err");
    } catch (error) {
      console.log("log err", error);
      // Dispatch API error action
      dispatch(apiError(error));
    }
  };
};

export const refreshToken = () => {
  return async (dispatch, getState) => {
    try {
      const refreshToken = getState().auth.refreshToken;
      const response = await api.post("/refresh_token", {
        refresh_token: refreshToken,
      });
      const { access_token } = response.data;
      dispatch(refreshTokenSuccess(access_token));
    } catch (error) {
      dispatch(apiError(error));
      dispatch(logoutUser());
    }
  };
};
