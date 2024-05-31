import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export const FETCH_RADIOS_SUCCESS = "FETCH_RADIOS_SUCCESS";
export const FETCH_RADIO_SUCCESS = "FETCH_RADIO_SUCCESS";
export const CREATE_RADIO_SUCCESS = "CREATE_RADIO_SUCCESS";
export const CREATE_RADIO_FAILURE = "CREATE_RADIO_FAILURE";
export const DELETE_RADIO_SUCCESS = "DELETE_RADIO_SUCCESS";
export const API_ERROR_RADIO = "API_ERROR_RADIO";
export const FETCH_RADIOS_FAILURE = "FETCH_RADIOS_FAILURE";
export const UPDATE_RADIO_SUCCESS = "UPDATE_RADIO_SUCCESS";
export const UPDATE_RADIO_FAILURE = "UPDATE_RADIO_FAILURE";
export const DELETE_RADIO_FAILURE = "DELETE_RADIO_FAILURE";
export const FETCH_RADIO_BY_ID_SUCCESS = "FETCH_RADIO_BY_ID_SUCCESS";
export const FETCH_RADIO_BY_ID_FAILURE = "FETCH_RADIO_BY_ID_FAILURE";
export const UPDATE_RADIO_FAVORITE = "UPDATE_RADIO_FAVORITE";
export const SEARCH_RADIOS = "SEARCH_RADIOS";
export const SET_CURRENT_RADIO = "SET_CURRENT_RADIO";
export const TOGGLE_PLAY_PAUSE = "TOGGLE_PLAY_PAUSE";
export const SET_NEXT_RADIO = "SET_NEXT_RADIO";
export const SET_PREVIOUS_RADIO = "SET_PREVIOUS_RADIO";

export const fetchRadiosSuccess = (radios) => ({
  type: FETCH_RADIOS_SUCCESS,
  radios,
});
export const fetchRadiosFailure = (error) => {
  return {
    type: FETCH_RADIOS_FAILURE,
    payload: error,
  };
};

export const fetchRadioByIdSuccess = (radio) => ({
  type: FETCH_RADIO_BY_ID_SUCCESS,
  radio,
});

export const fetchRadioByIdFailure = (error) => ({
  type: FETCH_RADIO_BY_ID_FAILURE,
  error,
});

export const createRadioSuccess = (radio) => ({
  type: CREATE_RADIO_SUCCESS,
  radio,
});
export const createRadioFailure = (error) => ({
  type: CREATE_RADIO_FAILURE,
  payload: error,
});
export const updateRadioSuccess = (updatedRadio) => ({
  type: UPDATE_RADIO_SUCCESS,
  updatedRadio,
});

export const updateRadioFailure = (error) => ({
  type: UPDATE_RADIO_FAILURE,
  error,
});

export const deleteRadioSuccess = (radioId) => ({
  type: DELETE_RADIO_SUCCESS,
  radioId,
});

export const deleteRadioFailure = (error) => ({
  type: DELETE_RADIO_FAILURE,
  payload: error,
});

export const updateRadioFavorite = (radioId, favorite) => ({
  type: UPDATE_RADIO_FAVORITE,
  payload: { radioId, favorite },
});
export const searchRadios = (searchTerm) => ({
  type: SEARCH_RADIOS,
  payload: searchTerm,
});

export const setCurrentRadio = (radio) => ({
  type: SET_CURRENT_RADIO,
  payload: radio,
});

export const togglePlayPause = () => ({
  type: TOGGLE_PLAY_PAUSE,
});
export const setNextRadio = () => ({
  type: SET_NEXT_RADIO,
});

export const setPreviousRadio = () => ({
  type: SET_PREVIOUS_RADIO,
});

export const fetchRadios = (userId) => {
  return async (dispatch, getState) => {
    try {
      const accessToken = getState().auth.accessToken;
      const response = await api.get(`/radios/${userId}/all`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const radios = response.data;
      dispatch(fetchRadiosSuccess(radios));
    } catch (error) {
      dispatch(fetchRadiosFailure(error));
    }
  };
};
export const getRadioById = (radioId) => {
  return async (dispatch, getState) => {
    try {
      const accessToken = getState().auth.accessToken;
      const response = await api.get(`/radios/${radioId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const radioData = response.data;
      dispatch(fetchRadioByIdSuccess(radioData));
    } catch (error) {
      dispatch(fetchRadioByIdFailure(error));
    }
  };
};

export const createRadio = (userId, radioData) => {
  return async (dispatch, getState) => {
    try {
      const accessToken = getState().auth.accessToken;
      const response = await api.post(`/radios/${userId}/create`, radioData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const createdRadio = response.data;
      dispatch(createRadioSuccess(createdRadio));
    } catch (error) {
      dispatch(createRadioFailure(error));
    }
  };
};

export const updateRadio = (radioId, updatedRadioData) => {
  return async (dispatch, getState) => {
    try {
      const accessToken = getState().auth.accessToken;
      const response = await api.put(`/radios/${radioId}`, updatedRadioData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const updatedRadio = response.data;
      dispatch(updateRadioSuccess(updatedRadio));
    } catch (error) {
      dispatch(updateRadioFailure(error));
    }
  };
};

export const deleteRadio = (radioId) => {
  return async (dispatch, getState) => {
    try {
      const accessToken = getState().auth.accessToken;
      await api.delete(`/radios/${radioId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      dispatch(deleteRadioSuccess(radioId));
    } catch (error) {
      dispatch(deleteRadioFailure(error));
    }
  };
};
