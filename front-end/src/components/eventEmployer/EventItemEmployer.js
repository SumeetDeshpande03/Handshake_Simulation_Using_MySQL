import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';

import alt from '../../images/alt.png';

class EventItemEmployer extends React.Component {
    constructor() {
        super();
        this.state ={redirect:''};
    }
  onClickHandler = () => {
  this.setState({redirect: <Redirect to={{pathname: '/company/myevent', state: {post: this.props.event }}} />})
  };

  render() {
    return (
        <div>
            {this.state.redirect}

            <div className='item container'>
              <div
                className='ui tiny image'
                style={{ float: 'left', marginRight: '3%' }}>
                <img src={alt}/>
              </div>
              <div className='content'>
                  <Link to={{pathname: '/student/event', state: {event : this.props.event}}}>
                <button class='ui right floated primary button' >View Event</button>
                </Link>
                <a className='header'><h4>{this.props.event.event_name}</h4></a>
                <div className='meta'>
                  {/* <i className="university icon"></i> */}
                  <span className='cinema'>{this.props.event.event_description}</span>
                </div>
                <div className='meta'>
                {/* <i class="graduation cap icon"></i> */}
                  <span className='cinema'>{this.props.event.event_timing}</span>
                </div>
                <div className='description'>
                </div>
                <div className='extra'>
              </div>
            </div>
          </div>

          {/* <div className='item'>
            <div className='ui tiny image'>
              <img src={alt} />
            </div>
            <button
              className='ui right floated primary button'
              onClick={this.onClickHandler}
            >
              View Event
            </button>
            <div className='middle aligned content'>
              <div className='header'>{this.props.event.event_name}</div>
              <div className='description'>
                <p></p>
              </div>
              <div className='extra'></div>
            </div>
          </div> */}
        </div>
      );
  }
  
};

export default EventItemEmployer;
