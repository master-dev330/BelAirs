import axios from "axios";

const GET_LOCKERS_STOCK = 'GET_LOCKERS_STOCK';


export const getLockersStock = (container_id, date) => async (dispatch) => {
    console.log({container_id, date});
    const info = {
        "chosen_date": date.split('T')[0],
    }
    const res = await axios.post(`${process.env.REACT_APP_PUBLIC_URL}/lockers/stocks/${container_id}`, info)
    const data = await res.data;
    dispatch({
        type: GET_LOCKERS_STOCK,
        payload: data,
    });
};

const lockerReducer = (state = [], action) => {
    switch (action.type) {
        case GET_LOCKERS_STOCK:
            return action.payload;
        default:
        return state;
    }
}

export default lockerReducer;