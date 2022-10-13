import { useDispatch, useSelector } from "react-redux";


const PrevNextBtn = () => {
    const reservation = useSelector((state) => state.reservation);
    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch({type: "NEXT_STEP"});
        console.log(reservation);
    }

    const handleBack = () => {
        dispatch({type: "PREVIOUS_STEP"});
    }

    return(
        <div className='d-flex align-items-center action_buton'>
                <button 
                        onClick={handleBack}
                        className='prev_btn'
                >Précédent</button>
                <button 
                    onClick={handleNext}
                    className='next_btn'
                >Suivant</button>
        </div>  
    )
}

export default PrevNextBtn;
