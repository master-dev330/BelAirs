import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import eventReducer from './api/events';
import reservationReducer from './api/reservations';
import stepperReducer from './stepper/stepper';
import optReducer from './api/optVerify';
import containerReducer from './api/containers';
import lockerReducer from './api/lockers';

const rootReducer = combineReducers({
  events: eventReducer,
  reservation: reservationReducer,
  containers: containerReducer,
  locker: lockerReducer,
  step: stepperReducer,
  opt: optReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
