import Timer from './Timer.js';
import { useSelector } from 'react-redux';

const EventImage = ({event}) => {
    const step = useSelector(state => state.step);

    return(
        <div className='d-flex flex-column event-img-div'>
            {
                event && (
                    <>
                        <img src={`${process.env.REACT_APP_PUBLIC_URL}/events/logo/` + event.logo} alt={event.event}></img>
                        <small className='event-description'>
                        { event.title } 
                        ( { event.start_date.split('T')[0]} - { event.end_date.split('T')[0]} . { event.event } )
                        </small>
                        {
                            step >= 2 && (
                                <Timer />
                            )

                        }
                    </>

                )
            }
        </div>
    )
}

export default EventImage;
