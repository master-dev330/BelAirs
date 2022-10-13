import './tarifcard.css';
import PrevNextBtn from './PrevNextBtn';
import {
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTarif } from '../../redux/api/reservations'


const TarifCard = ({event}) => {
  const containers = JSON.parse(localStorage.getItem("containers"));
  const stocks = useSelector(state => state.locker);
  
  const [info, setInfo] = useState({});
  const dispatch = useDispatch();

  const tarifPromo = containers.tarif_promo.map((p) => p[1])
  const tarifNormal = containers.tarif_normal.map((p) => p[1])
  const tarifLastMinute = containers.tarif_dm.map((p) => p[1])
  
  const tarifS = [tarifPromo[0], tarifNormal[0], tarifLastMinute[0]]
  const tarifM = [tarifPromo[1], tarifNormal[1], tarifLastMinute[1]]
  const tarifL = [tarifPromo[2], tarifNormal[2], tarifLastMinute[2]]
  const tarifXL = [tarifPromo[3], tarifNormal[3], tarifLastMinute[3]]
  const tarifMB = [tarifPromo[4], tarifNormal[4], tarifLastMinute[4]]
  
  const lockerType = ['s', 'm', 'l', 'xl', 'mb'];
  const tarifs = [tarifS, tarifM, tarifL, tarifXL, tarifMB]

  const handleChange = (e, index, id) => {
    const tartifType = [ 'tarif promo', 'tarif normal', 'tarif dernière minute' ]
    // disable other checkbox?
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox !== e.target) {
        checkbox.checked = false;
      }
    })
    const info = {service_fee: parseInt(e.target.value), tarif_type: tartifType[id], locker_type: lockerType[index] }
    dispatch(setTarif(info))
  }

  return (
    <div className='d-flex flex-column tarif-div ml-2'>
      <section>
        <h4>TARIFS VALABLES POUR 1 JOURNÉE DE 24H</h4>
        <hr />
        <div className='d-flex tarif-section'>
          <div className='tarif-detail'>
            <p>TARIFS PROMOS</p>
            <p>TARIF NORMAL</p>
            <p>TARIF DERNIERES MINUTE</p>
          </div>
          {
            tarifs.map((tarif, index) => (
              <div key={index} className='d-flex flex-column'>
                {lockerType[index] === 'MB' ? <p className='nouveau-badge'>NOUVEAU</p> : <p className='empty-badge'></p>}
                <Form className='d-flex flex-column align-items-center mt-2'>
                  <div className='locker-details'>
                    <div className='stock-pink-box'>
                      <div className='locker-type-box'>
                        <p className='locker-type-p'>{lockerType[index].toUpperCase()}</p>
                        <p className='locker_stock'>{stocks[lockerType[index]]} {' '} Disponibles</p>
                      </div>
                      <p className='text-white tf'>L34,2 / H19,9 / P46</p>
                    </div>
                    <p className='locker-description mt-2'>LOCKER + PRISE USB</p>
                  </div>
                  {
                    tarif.map((item, id) => (
                      <div key={id} className='checkbox-group'>
                        <FormGroup check inline key={index}>

                          <Label check>
                            {item}{' €'}
                            <Input type="checkbox" onChange={(e) => handleChange(e, index, id)} value={item} />
                          </Label>
                        </FormGroup>
                      </div>
                    ))
                  }
                </Form>
              </div>
            ))
          }
        </div>
      </section>
      <PrevNextBtn />
    </div>
  )
};

export default TarifCard;