import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { addEventIdToReservation, setReservationDate } from '../../redux/api/reservations';
// import { getEventById } from '../../redux/api/events';
import Stepper from "./Stepper";
import PickDate from "./PickDate";
import TarifCard from './TarifCard';
import EventImage from './EventImage';
import Identification from './Identification';
import Recapitulatif from './Recapitulatif';
import Paiement from './Paiement';

const Reservation = () => {  
    let { id } = useParams();
    const currentStep = useSelector(state => state.step);
    const events = JSON.parse(localStorage.getItem("events"));
    const event = events.filter(e => e.id === parseInt(id));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addEventIdToReservation(id));
    }, [id]);

    return(
        <div className="container ">
            <Stepper />
            <div className='d-flex form-step mt-4'>
                <EventImage event={event[0]}/>
                {currentStep === 0 && <PickDate event={event[0]} />}
                {currentStep === 1 && <TarifCard event={event[0]}/>}
                {currentStep === 2 && <Identification />}
                {currentStep === 3 && <Recapitulatif />}
                {currentStep === 4 && <Paiement />}
            </div>
        </div>
    )
}

export default Reservation;
