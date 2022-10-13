import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import VerifyModal from './VerifyModel';
import { sendOptVerify } from '../../redux/api/optVerify';
import { setClientDetails } from '../../redux/api/reservations';

import {
    FaCheckCircle,
} from 'react-icons/fa';
import './identification.css';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
} from "reactstrap";

const Identification = () => {
    const optCode = useSelector((state) => state.opt);
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
    const [otpVerify, setOtpVerify] = useState(false);
    const toggle = () => setModal(!modal);
    const [value, setValue] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [reCap, setReCap] = useState(false)
    const [info, setInfo] = useState({})
    const [errors, setErrors] = useState({});

    const options = useMemo(() => countryList().getData(), [])
    
    const dispatch = useDispatch();
    
    const onRecapTch = (v) => {
        if(v) {
            return setReCap(true)
        }
    }
    
    const changeHandler = value => {
        setValue(value)
        setInfo((prev) => ({...prev, client_country: value.label}));
    }

    const optSubmit = (e) => {
        e.preventDefault()
        if(info.client_phone){
            dispatch(sendOptVerify(info.client_phone))
            toggle()
        }
    }
    console.log(`optCode : ${optCode}`)
    const verifyCode = (code) => {
        if(parseInt(code, 10) === parseInt(optCode)) {
            console.log('verified')
            setOtpVerify(true)
        }
        toggle()
    }

    const handleChange = (e) => {
        setInfo((prev) => ({...prev, [e.target.id]: e.target.value}));
        const { id, value } = e.target;
        switch (id) {
            case "client_email":
                setErrors((prev) => ({ ...prev, email: value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? "" : "Email invalide" }));
                break;
            case "client_name":
                setErrors((prev) => ({...prev, client_name: value.length < 1 ? "Le nom doit contenir être renseigné" : ""}));
                break;
            case "client_last_name":
                setErrors((prev) => ({...prev, client_last_name: value.length < 1 ? "Le prénom doit contenir être renseigné" : ""}));
                break;
            default:
                break;
        }
    }

    const handleNext = () => {
        if(info.client_name === "" || info.client_last_name === "" 
            || info.client_country === "" || info.client_email === ""){
            return NotificationManager.error('Veuillez vos informaiions', 'Erreur', 5000);
        }
        if(reCap === false) {
            return NotificationManager.error('Veuillez résoudre le recaptcha. Au besoin, veuillez actualisez la page', 'Erreur', 5000);
        }
        if(info.client_phone === "" || otpVerify === false){
            return NotificationManager.error('Veuillez vérifier votre numero de téléphone', 'Erreur', 5000);
        }
        dispatch(setClientDetails(info))
        dispatch({type: "NEXT_STEP"});
    }

    const handleBack = () => {
        dispatch({type: "PREVIOUS_STEP"});
    }

    console.log(info)
    return(
        <div className="ident-div d-flex flex-column ml-2">
            <section>
                <h4>Identification</h4>
                <hr />
                <div className="d-flex ident-section">
                <Form>
                    <Row>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="Nom">Nom</Label>
                            <input
                                id="client_name"
                                placeholder="Nom"
                                onChange={handleChange}
                                type="text"
                            />
                            <small className="error text-danger">
                                {errors["client_name"]}
                            </small>

                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="lastName">Prénom</Label>
                            <input
                                id="client_last_name"
                                placeholder="Prénom"
                                type="text"
                                onChange={handleChange}
                            />
                            <small className="error text-danger">
                                {errors["client_last_name"]}
                            </small>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="exampleSelect">Pays</Label>
                            <Select 
                                options={options} 
                                value={value} 
                                onChange={changeHandler} 
                                className="select-country"
                            />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="lastName">email</Label>
                            <Input
                                id="client_email"
                                placeholder="@gmail.com"
                                type="email"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        </Col>
                    </Row>
                </Form>
                </div>
            <hr />
            </section>
            <section className='d-flex align-items-center justify-content-center'>
                {
                    reCap ? (
                        <form onSubmit={optSubmit}>
                            <Row>
                                <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
                                    <FormGroup>
                                        <Label for="Nom">Numéro de téléphone</Label>
                                        <PhoneInput
                                            country={'fr'}
                                            value={info.client_phone}
                                            onChange={(e) =>  setInfo((prev) => ({...prev, client_phone: e}))}
                                        />
                                    </FormGroup>
                                    {
                                        !otpVerify ? (
                                            <button type='submit'>Vérifier mon identité</button>
                                        ) : (
                                            <button type='button' className='btn-verify'>
                                                Identité vérifiée 
                                                <FaCheckCircle />
                                            </button>
                                        )
                                    }
                                </Col>
                            </Row>
                        </form>
                    ) : (
                        <ReCAPTCHA
                            sitekey="6LcFKQMiAAAAAKwTVFIYwK1MwhlYHAlthqXp8urb"
                            onChange={onRecapTch}
                        />
                    )
                }

            </section>
            {
                otpVerify && (
                    <section className='mt-4'>
                    <h4>PARTAGER ET DONNER L’ACCÈS À VOTRE LOCKER</h4>
                    <hr />
                        <Form>
                            <p className='contactFriend-p'>Contact 1</p>
                            <Row className='contactFriend d-flex flex-column'>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                    Nom complet
                                    </Label>
                                    <Input
                                    id="friend1_name"
                                    onChange={handleChange}
                                    placeholder="Nom"
                                    type="text"
                                    />
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                <Label for="phone1">
                                    Numéro de téléphone
                                    </Label>
                                    <PhoneInput
                                        country={'fr'}
                                        value={info.friend1_phone}
                                        onChange={(e) => setInfo((prev) => ({...prev, friend1_phone: e}))}
                                    />
                                </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                        <Form>
                            <p className='contactFriend-p'>Contact 2</p>
                            <Row className='contactFriend d-flex flex-column'>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                    Nom complet
                                    </Label>
                                    <Input
                                    id="friend2_name"
                                    onChange={handleChange}
                                    placeholder="Nom"
                                    type="text"
                                    />
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                <Label for="phone1">
                                    Numéro de téléphone
                                    </Label>
                                    <PhoneInput
                                        country={'fr'}
                                        value={info.friend2_phone}
                                        onChange={(e) => setInfo((prev) => ({...prev, friend2_phone: e}))}
                                    />
                                </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </section>
                )
            }
            <VerifyModal modal={modal} toggle={toggle} unmountOnClose={unmountOnClose} verifyCode={verifyCode} />
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
        </div>
    )
}

export default Identification;
