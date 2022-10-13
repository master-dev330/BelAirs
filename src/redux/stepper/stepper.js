
const stepperReducer = (state = 0, action) => {
    switch(action.type) {
        case 'SET_STEP':
            return action.payload;
        case 'NEXT_STEP':
            return state + 1;
        case 'PREVIOUS_STEP':
                return state - 1;
        default:
            return state;
    }
};

export default stepperReducer;