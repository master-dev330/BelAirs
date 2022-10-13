import { useSelector } from 'react-redux';
import PrevNextBtn from './PrevNextBtn';
import './recapitulatif.css';

const Recapitulatif = () => {
    const reservation = useSelector((state) => state.reservation)

    return(
        <div className='d-flex flex-column recap-div'>
            <div className='d-flex justify-content-between sub-recap-div'>
                <section>
                    <h4>COMMANDE</h4>
                    <hr />
                    <div className='d-flex flex-column'>
                        <div className='recap-info'>
                            <p>Date choisie :</p>
                            <strong>{ reservation.start_date}</strong>
                        </div>
                        <div className='recap-info'>
                            <p>Taille :</p>
                            <strong>{reservation.locker_type}</strong>
                        </div>
                        <div className='recap-info'>
                            <p>Tarif :</p>
                            <strong>{reservation.tarif_type}</strong>
                        </div>
                        <div className='recap-info'>
                            <p>Code promo :</p>
                            <strong>80886768</strong>
                        </div>
                        <div className='recap-info'>
                            <p>Total TTC :</p>
                            <strong>{reservation.service_fee} €</strong>
                        </div>
                        <div className='recap-info'>
                            <p>Montant à payer :</p>
                            <strong>83.00 €</strong>
                        </div>
                        <div className='recap-info'>
                            <p>Frais de service :</p>
                            <strong>83.00 €</strong>
                        </div>
                    </div>
                </section>
                <section>
                    <h4>CONTACT PRINCIPAL</h4>
                    <hr />
                    <div className='d-flex flex-column'>
                        <div className='recap-info'>
                            <p>Nom :</p>
                            <strong>{reservation.client_name}</strong>
                        </div>
                        <div className='recap-info'>
                            <p>Prénom :</p>
                            <strong>{reservation.client_last_name}</strong>
                        </div>
                        <div className='recap-info'>
                            <p>Email :</p>
                            <strong>{reservation.client_email}</strong>
                        </div>
                        <div className='recap-info'>
                            <p>Téléphone :</p>
                            <strong>{reservation.client_phone}</strong>
                        </div>
                    </div>
                    <section>
                        <h4>CONTACT 1</h4>
                        <hr />
                        <div className='d-flex flex-column'>
                            <div className='recap-info'>
                                <p>Nom :</p>
                                <strong>{reservation.friend1_name}</strong>
                            </div>
                            <div className='recap-info'>
                                <p>Téléphone : :</p>
                                <strong>{reservation.friend1_phone}</strong>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h4>CONTACT 1</h4>
                        <hr />
                        <div className='recap-info'>
                            <p>Nom :</p>
                            <strong>{reservation.friend2_name}</strong>
                        </div>
                        <div className='recap-info'>
                            <p>Téléphone : :</p>
                            <strong>{reservation.friend2_phone}</strong>
                        </div>
                    </section>
                </section>
            </div>
            <PrevNextBtn />
        </div>
    )
}


export default Recapitulatif;