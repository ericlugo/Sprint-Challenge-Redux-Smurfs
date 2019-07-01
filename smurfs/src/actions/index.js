import axios from 'axios';

export const GET_ALL_PENDING = 'GET_ALL_PENDING';
export const GET_ALL_SUCCESS = 'GET_ALL_SUCCESS';
export const GET_ALL_FAILURE = 'GET_ALL_FAILURE';
export const POST_PENDING = 'POST_PENDING';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';
/*
  For this project you'll need at least 2 action creators for the main portion,
  and 2 more for the stretch problem.
  Be sure to include action types for each type of action creator. Also, be sure to mind
    the "pending" states like, fetching, creating, updating and deleting.
  C - addSmurf    [x]
  R - getSmurfs   [x]
  U - updateSmurf [ ]
  D - deleteSmurf [ ]
*/

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: POST_PENDING });
  const request = axios.post(`http://localhost:3333/smurfs`, smurf);
  request
    .then((response) => {
      dispatch({
        type: POST_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: POST_FAILURE,
        payload: `${error}`,
      });
    });
};

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: GET_ALL_PENDING });
  const request = axios.get(`http://localhost:3333/smurfs`);
  request
    .then((response) => {
      dispatch({
        type: GET_ALL_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ALL_FAILURE,
        payload: `${error}`,
      });
    });
};
