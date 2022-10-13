import { useDispatch } from 'react-redux';
import { daysBetween, formatDate, rangeOfDates } from '../../utils';
import { FaCalendarAlt } from 'react-icons/fa';
import { setReservationDate } from '../../redux/api/reservations';
import { getLockersStock } from '../../redux/api/lockers';
import { getContainersDetails } from '../../redux/api/containers';

import './pickdate.css';
import { useEffect } from 'react';

const shortDate = (date) => {
    const d = new Date(date);
    return d.toISOString().slice(0, 10);
}

const PickDate = ({ event }) => {
    const container_id = event.container_id
    const nbOfDay = daysBetween(event.start_date, event.end_date);
    const dates = rangeOfDates(event.start_date, event.end_date);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContainersDetails(container_id))
    }, [container_id])
    
    const addLongdate = (start_date, end_date) => {
        const sd = shortDate(start_date);
        const ed = shortDate(end_date);
        dispatch(getLockersStock(container_id, sd))
        dispatch(setReservationDate(sd, ed));
        dispatch({ type: "NEXT_STEP" });
    }

    const handleClick = (date) => {
        const d = shortDate(date);
        dispatch(getLockersStock(container_id, d))
        dispatch(setReservationDate(shortDate(d), shortDate(d)));
        dispatch({ type: "NEXT_STEP" });
    }

    return (
        <div className='date-pick-div ml-2'>
            <section>
                <h4>{nbOfDay > 1 ? 'FORFAITS PASS' : 'FORFAIT POUR 24 H'}</h4>
                <hr />
                <div className='d-flex date-pick-section'>
                    <p>{nbOfDay}{' '} JOUR{nbOfDay > 1 ?? 'S'}</p>
                    <p><FaCalendarAlt />{' '}{formatDate(event.start_date)}</p>
                    <button
                        onClick={() => addLongdate(event.start_date, event.end_date)}
                        type="button"
                    >
                        SELECTIONNER
                    </button>
                </div>
            </section>
            {nbOfDay > 1 && (
                <section className='mt-4'>
                    <h4>FORFAITS JOURNALIERS</h4>
                    <hr />
                    {
                        dates.map((date, index) => (
                            <div key={index} className='d-flex date-pick-section mb-2'>
                                <p><FaCalendarAlt />{' '}{formatDate(date)}</p>
                                <button
                                    onClick={() => handleClick(date)}
                                    type="button"
                                >
                                    SELECTIONNER
                                </button>
                            </div>
                        ))

                    }
                </section>
            )}
        </div>
    )
};

export default PickDate;
