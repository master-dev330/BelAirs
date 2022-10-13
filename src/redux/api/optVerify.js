import axios from 'axios';

const SEND_OPT_VERIFY = 'SEND_OPT_VERIFY';

const generateCode = () => {
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += Math.floor(Math.random() * 10);
    }
    return code;
}


export const sendOptVerify = (telephone) => async dispatch => {
    const code = generateCode();
    const data = {
        telephone,
        code,
    };
    // const url = `${process.env.PUBLIC_URL}/clients/verify`;
    // const res = await axios.post(url, data);
    dispatch({
        type: SEND_OPT_VERIFY,
        payload: code,
    });
}

const optReducer = (state = '', action) => {
    switch (action.type) {
        case SEND_OPT_VERIFY:
            return action.payload;
        default:
            return state;
    }
}

export default optReducer;