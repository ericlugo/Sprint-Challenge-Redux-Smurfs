import {
  GET_ALL_PENDING,
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  POST_PENDING,
  POST_SUCCESS,
  POST_FAILURE,
} from '../actions';

const initialState = {
  addingSmurf: false,
  //  deletingSmurf: false,
  error: null,
  fetchingSmurfs: false,
  smurfs: [],
  //  updatingSmurf: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PENDING:
      return {
        ...state,
        error: null,
        fetchingSmurfs: true,
      };
    case GET_ALL_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        smurfs: action.payload.data,
      };
    case GET_ALL_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false,
      };
    case POST_PENDING:
      return {
        ...state,
        addingSmurf: true,
        error: null,
      };
    case POST_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: null,
        smurfs: action.payload.data,
      };
    case POST_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
