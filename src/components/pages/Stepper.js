import { useSelector } from 'react-redux';
import './stepper.css';
import chartIcon from '../../assets/icons/chart.svg';
import dateIcon from '../../assets/icons/date.svg';
import identificationIcont from '../../assets/icons/identification.svg';
import creditcardIcon from '../../assets/icons/creditcard.svg';
import recapIcon from '../../assets/icons/recap.svg';
import elipseIcon from '../../assets/icons/elipse_.svg';
import elipseFullIcon from '../../assets/icons/elipseFull.svg';
import chartFullIcon from '../../assets/icons/chartFull.svg';
import identificationFullIcon from '../../assets/icons/identificationFull.svg';
import creditcardFullIcon from '../../assets/icons/creditCardFull.svg';
import recapFullIcon from '../../assets/icons/recapFull.svg';

const steps = ["Date", "Tailles & tarifs", "Identification", "Recapitulatif", "Paiement"];

const icons = [
    dateIcon,
    chartIcon,
    identificationIcont,
    creditcardIcon,
    recapIcon,
];

const fullIcone = [
    dateIcon,
    chartFullIcon,
    identificationFullIcon,
    creditcardFullIcon,
    recapFullIcon,
];

const Stepper = () => {

    const currentStep = useSelector(state => state.step);

    return(
        <div className="constainer d-flex stepper-div">
            {
                steps.map((step, index) => (
                    <div key={index} className="d-flex flex-column step-div">
                         <div className="d-flex gap-2 align-items-end">
                            <img src={ currentStep >= index ? fullIcone[index] : icons[index]} alt={step}/>
                            <p>{step}</p>
                        </div>
                        <img src={ currentStep >= index ? elipseFullIcon : elipseIcon} alt="elipse" className="elipse-div"/>
                    </div>
                ))
            }

        </div>
    )
}

export default Stepper;