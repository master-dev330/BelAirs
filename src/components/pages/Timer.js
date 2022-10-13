import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetRervationDetails } from "../../redux/api/reservations";

import './timer.css'

// seconde to minite converter
const convertTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes} : ${seconds}`;
}

const Timer = () => {
    const step = useSelector(state => state.step);
    const dispatch = useDispatch();
    const [time, setTime] = useState(4*60);

    useEffect(() => {
        if (step >= 1) {
            const interval = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        
            return () => {
                clearInterval(interval);
            };
        } else {
            setTime(0);
        }
    }, [time]);

    if (time === 0) {
        dispatch({type: 'SET_STEP', payload: 0})
        dispatch(resetRervationDetails())
    }
    
    return (
        <div className="timer_container">
            <p>Il vous reste : <span className="timer">{convertTime(time)}</span></p>
        </div>
    );
}

export default Timer;