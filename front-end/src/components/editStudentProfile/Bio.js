import React from 'react';
import img from '../../images/matthew.png';

const Bio = props => {
  console.log(props);
  
  return (
    <div class='ui cards'>
      <div class='card'>
        <div className='ui circular image'>
          <img src={img}/>
        </div>
        <div class='content'>
        <i className='pencil alternate icon' style={{ float: 'right' }}></i>
          <div class='header'>{props.bio.student_name}</div>
          <div class='meta'>
          </div>
          <div class='description'>
            College Name: {props.bio.student_college_name}
            <br></br>
            Location: {props.bio.city_name} | {props.bio.state_name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
