import axios from "axios";
const GET_CONTAINER_STOCK = "GET_CONTAINER_STOCK";

export const getContainersDetails = (container_id) => async (dispatch) => {
    const res = await axios.get(`${process.env.REACT_APP_PUBLIC_URL}/containers/${container_id}`);
    const containerDetails = res.data;
    localStorage.setItem("containers",JSON.stringify(containerDetails));

    dispatch({
        type: GET_CONTAINER_STOCK,
        payload: containerDetails,
    });
}

const containerReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CONTAINER_STOCK:
            return action.payload;
        default:
            return state;
    }
}

export default containerReducer;
