import React, { useState } from 'react';
import './eventGroup.css'
import EventCard from './EventCard';
import { Collapse } from 'reactstrap';
import {
    FaChevronDown
} from 'react-icons/fa';

const EventGroup = ({dateRange, events}) => {
  const [collapse, setCollapse] = useState(true);
  const toggle = () => setCollapse(!collapse);
 
  return (
    <div className='event_group'>
        <div className='event_group_title d-flex'>
            <h3>{dateRange}</h3>
            <FaChevronDown onClick={toggle} />
        </div>
      <hr />
        <Collapse isOpen={collapse}>
            <div className='event_group_content d-flex align-items-center'>
                {
                    events.map((e, index) => (
                        <EventCard key={index} evenement={ e }/>
                    ))
                }
            </div>
        </Collapse>
    </div>
  );
}

export default EventGroup;