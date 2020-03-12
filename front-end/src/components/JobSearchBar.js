import React from 'react';

const JobSearchBar = () => {
  return (
    <div
      className='ui segment'
      style={{
        marginLeft: '40px',
        marginRight: '40px',
        marginTop: '20px',
        height: '24%'
      }}
    >
      <div>
        <div style={{ width: '50%', float: 'left' }}>
          <div className='ui icon input' style={{ width: '100%' }}>
            <input
              type='text'
              placeholder='Job titles, employers, or keywords'
            />
            <i className='search icon'></i>
          </div>
        </div>
        {/* <div
          style={{
            width: '48%',
            float: 'right',
            marginLeft: '20px'
          }}
        >
          <div className='ui icon input' style={{ width: '100%' }}>
            <input
              type='text'
              placeholder='City, State, Zip Code, or Address'
            />
            <i className='search icon'></i>
          </div>
        </div> */}
      </div>
      <div>
        <div
          role='list'
          className='ui bulleted horizontal link list'
          style={{ marginTop: '10px'}}
        >
          <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
            Software
          </a>
          <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
            Computer Science
          </a>
          <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
            Developer
          </a>
          <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
            Information Technology
          </a>
          <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
            Data Science
          </a>
          <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
            Machine Learning
          </a>
        </div>
      </div>
      <div style={{marginTop: '10px', marginBottom: '10px'}}>
        Filters:
        <button className='ui primary button' style={{marginLeft:'20px', borderRadius: '25px'}}>Full-Time Job</button>
        <button className='ui primary button' style={{marginLeft: '10px', borderRadius: '25px'}}>Part-Time</button>
        <button className='ui primary button' style={{marginLeft: '10px', borderRadius: '25px'}}>Internship</button>
        <button className='ui primary button' style={{marginLeft: '10px', borderRadius: '25px'}}>On-Campus</button>
        {/* <button className='ui primary button' style={{marginLeft: '10px', borderRadius: '25px'}}>
            <i class="filter icon"></i>
                Filters
        </button> */}
        {/* <button className='ui blue right floated basic button' style={{marginLeft: '10px', borderRadius: '25px'}}>My Favorite Jobs</button> */}
      </div>
    </div>
  );
};

export default JobSearchBar;
