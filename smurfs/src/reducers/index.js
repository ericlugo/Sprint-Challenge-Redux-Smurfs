import { GET_ALL_PENDING, GET_ALL_SUCCESS, GET_ALL_FAILURE } from '../actions';

const initialState = {
  //  addingSmurf: false,
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
        fetchingSmurfs: true,
      };
    case GET_ALL_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload.data,
      };
    case GET_ALL_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
