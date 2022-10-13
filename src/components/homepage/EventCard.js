import './eventCard.css';

const EventCard = ({ evenement }) => {
    const { id, event, start_date, end_date, location, logo } = evenement;
    const handleClick = ()=> {
        window.location.href = `/reservation/${id}`
    };

    return(
        <div className="event_card">
            <img src={`${process.env.REACT_APP_PUBLIC_URL}/events/logo/` + logo} alt={event} />
            <p className='event_description'>
                { event } { ' '} <br />
                ( { start_date.split('T')[0] } : { end_date.split('T')[0] } * { location } )
            </p>
            <button 
                type="button"
                onClick={handleClick}
            >
                Reserver un Locker
            </button>
        </div>
    )
};

export default EventCard;
