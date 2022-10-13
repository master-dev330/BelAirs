const ADD_EVENT_ID = 'ADD_EVENT_ID_TO_RESERVATION';
const SET_RESERVATION_DATE = 'SET_RESERVATION_DATE';
const SET_TARIF = 'SET_TARIF';
const SET_CLIENT_DETAILS = 'SET_CLIENT_DETAILS';
const RESET_RESERVATION_INFOS = 'RESET_RESERVATION_INFOS';

export const addEventIdToReservation = (id) => async (dispatch) => {
    dispatch({
        type: ADD_EVENT_ID,
        payload: id || null,
    });
};

export const setReservationDate = (start_date, end_date) => async (dispatch) => {
    const dates = {start_date, end_date}
    dispatch({
        type: SET_RESERVATION_DATE,
        payload: dates,
    });
}

export const setTarif = (info) => async (dispatch) => {
    dispatch({
        type: SET_TARIF,
        payload: info,
    });
}

export const setClientDetails = (info) => async (dispatch) => {
    dispatch({
        type: SET_CLIENT_DETAILS,
        payload: info,
    })
}

export const resetRervationDetails = () => async (dispatch) => {
    dispatch({
        type: RESET_RESERVATION_INFOS
    })
}


const reservationReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_EVENT_ID:
            return {
                ...state,
                event_id: action.payload,
            };
        case SET_RESERVATION_DATE:
            return {
                ...state,
                start_date: action.payload.start_date,
                end_date: action.payload.end_date,
            };
        case SET_TARIF:
            return {
                ...state,
                ...action.payload,
            }
        case SET_CLIENT_DETAILS:
            return {
                ...state,
                ...action.payload,
            }
        case RESET_RESERVATION_INFOS:
            return {
                event_id: state.event_id,
            }
        default:
            return state;
    }
};

export default reservationReducer;