import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { useSelector, useDispatch } from 'react-redux';
import {getEvents} from './redux/api/events';
import Home from './components/homepage/Home';
import Reservation from './components/pages/Reservation';
import orderEventByDate from './utils';

const App = () => {
  const reservation = useSelector((state) => state.reservation);
  const eventData = useSelector((state) => state.events) || [];
  const step = useSelector((state) => state.step);

  const dispatch = useDispatch();

  if(step === 2 && reservation.locker_type === undefined){
    dispatch({type: "PREVIOUS_STEP"});
    NotificationManager.error('Veuillez choisir un type de locker', 'Erreur', 5000);
  }

  useEffect(() => {
    dispatch(getEvents());
  },[dispatch]);

  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home events={orderEventByDate(eventData)} />} />
        <Route exact path="/reservation/:id" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
