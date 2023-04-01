import React from 'react';
import logo from '../assets/reg.svg';
import '../CSS/Registration.css';
function Registration() {
  return (
    <div className='reg-cont'>
      <div className='reg-inv-div-1'></div>
      <div className='reg-inv-div-2'></div>
      <div className='reg-left'>
        <div className='reg-txt'>
          <div className='reg-txt-1'>Join the RSET Alumni</div>
          <div className='reg-txt-2'> Network now!</div>
        </div>
        <div className='reg-logo'>
          <img src={logo} alt='reg-logo' className='reg-logo' />
        </div>
      </div>
      <div className='reg-right'>Test</div>
    </div>
  );
}

export default Registration;
