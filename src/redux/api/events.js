import axios from 'axios';
// import eventData from '../../dummyData';

const url = `${process.env.REACT_APP_PUBLIC_URL}/events`;

const GET_EVENTS = 'GET_EVENTS';
const GET_EVENT_BY_ID = 'GET_EVENT_BY_ID';

export const getEvents = () => async (dispatch) => {
    const response = await axios.get(url);
    const eventData = response.data;
    localStorage.setItem("events",JSON.stringify(eventData));
    dispatch({
        type: GET_EVENTS,
        payload: eventData,
    });
};

export const getEventById = (id) => async (dispatch) => {
    const response = await axios.get(`${url}/${id}`);
    const event = response.data;
    dispatch({
        type: GET_EVENT_BY_ID,
        payload: event[0],
    });
}

const eventReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EVENTS:
        return action.payload;
    case GET_EVENT_BY_ID:
        return action.payload;
    default:
      return state;
  }
};

export default eventReducer;