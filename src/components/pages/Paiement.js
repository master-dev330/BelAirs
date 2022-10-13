import PrevNextBtn from "./PrevNextBtn";
import './paiement.css';

const Paiement = () => {
    return(
        <div className='d-flex flex-column payment-div'>
            <div className='d-flex justify-content-between sub-payment-div'>
                <section>
                    <div className='d-flex flex-column'>
                        <div className="payment-info">
                            <p>Sout total</p>
                            <strong>83.00 €</strong>
                        </div>
                        <div className="payment-info">
                            <p>Taxe</p>
                            <strong>8 €</strong>
                        </div>
                        <div className="payment-info">
                            <p>Remise (10%)</p>
                            <strong>-13.00 €</strong>
                        </div>
                        <hr />
                        <div className="payment-info">
                            <p>Total</p>
                            <strong>51.00 €</strong>
                        </div>
                    </div>
                </section>
                <section>
                    <h4>PAIEMENT FORM</h4>
                </section>
            </div>
            <PrevNextBtn />
        </div>
    )
};

export default Paiement;