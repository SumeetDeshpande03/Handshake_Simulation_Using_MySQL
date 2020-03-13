import React from 'react';
import axios from 'axios';
import Header from './Header';
import alt from '../images/alt.png';

const EventPageStudent = (props) => {
    console.log(props);

    const onClickHandler = () => {
        const id = 16
        axios
      .post(`http://35.166.32.0:8080/api/event/registered/${id}`, {
        event_id: props.location.state.event.event_id,
        company_id: props.location.state.event.company_id
      }, {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        if (res.status === 200) {
            console.log(res.data.result);
        }
      })
      .catch(err => {
        console.log(err);
      });
    }
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='ui container segment' style={{height:'300px'}} >
            <div style={{float:'left', width:'20%'}}>
            <div className='ui small image' style={{ float: 'left', marginRight: '3%' }}>
              <img src={alt}/>
              
            </div>
            </div>
            <div style={{float:'left', width:'40%'}}>
              <h3>Event Name: {props.location.state.event.event_name}</h3>
              <p>Event Description: {props.location.state.event.event_description}</p>
              <p>Event Timing: {props.location.state.event.event_timing}</p>
              <p>Event From Date: {props.location.state.event.event_from_date}</p>
              <p>Event To Date: {props.location.state.event.event_to_date}</p>
              <p>Event Location: {props.location.state.event.event_location}</p>
              <p>Event Eligibility Criteria: {props.location.state.event.event_eligibility_criteria}</p>
              <p>Event Major: {props.location.state.event.event_eligibility_major}</p>
            {/* <EventItem key={event.event_id} event={event} /> */}
            </div>
            <button className='ui basic primary button' style={{float: 'right'}} onClick={onClickHandler}>Register</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default EventPageStudent;