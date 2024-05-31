import {
  FETCH_RADIOS_SUCCESS,
  FETCH_RADIO_BY_ID_SUCCESS,
  FETCH_RADIO_BY_ID_FAILURE,
  CREATE_RADIO_SUCCESS,
  DELETE_RADIO_SUCCESS,
  FETCH_RADIOS_FAILURE,
  UPDATE_RADIO_SUCCESS,
  DELETE_RADIO_FAILURE,
  UPDATE_RADIO_FAVORITE,
  SEARCH_RADIOS,
  SET_CURRENT_RADIO,
  TOGGLE_PLAY_PAUSE,
  SET_PREVIOUS_RADIO,
  SET_NEXT_RADIO,
} from "../actions/radioActions";

const initialState = {
  radios: [],
  radio: null,
  load: false,
  error: null,
  filteredSearchRadios: [],
  searchTerm: false,
  currentRadio: null,
  isPlaying: false,
};

const radioReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RADIOS_SUCCESS:
      return {
        ...state,
        radios: action.radios,
        load: true,
        error: null,
      };

    case FETCH_RADIO_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        radio: action.radio,
        error: null,
      };
    case FETCH_RADIO_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_RADIO_SUCCESS:
      return {
        ...state,
        radios: [...state.radios, action.radio],
        error: null,
      };
    case DELETE_RADIO_SUCCESS:
      return {
        ...state,
        radios: state.radios.filter((radio) => radio.id !== action.radioId),
        error: null,
      };
    case FETCH_RADIOS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_RADIO_SUCCESS:
      return {
        ...state,
        radios: state.radios.map((radio) =>
          radio.iud === action.updatedRadio.iud ? action.updatedRadio : radio
        ),
        error: null,
      };
    case DELETE_RADIO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_RADIO_FAVORITE:
      return {
        ...state,
        radios: state.radios.map((radio) =>
          radio.iud === action.payload.radioId
            ? { ...radio, favorite: action.payload.favorite }
            : radio
        ),
      };
    case SEARCH_RADIOS:
      const searchTerm = action.payload.toLowerCase();
      return {
        ...state,
        searchTerm: true,
        filteredSearchRadios: state.radios.filter((radio) =>
          radio.programme.toLowerCase().includes(searchTerm)
        ),
      };
    case SET_CURRENT_RADIO:
      return {
        ...state,
        currentRadio: action.payload,
      };
    case TOGGLE_PLAY_PAUSE:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    case SET_NEXT_RADIO: {
      const currentIndex = state.radios.findIndex(
        (radio) => radio.id === state.currentRadio.id
      );
      const nextIndex = (currentIndex + 1) % state.radios.length;
      return { ...state, currentRadio: state.radios[nextIndex] };
    }
    case SET_PREVIOUS_RADIO: {
      const currentIndex = state.radios.findIndex(
        (radio) => radio.id === state.currentRadio.id
      );
      const previousIndex =
        (currentIndex - 1 + state.radios.length) % state.radios.length;
      return { ...state, currentRadio: state.radios[previousIndex] };
    }

    default:
      return state;
  }
};

export default radioReducer;
