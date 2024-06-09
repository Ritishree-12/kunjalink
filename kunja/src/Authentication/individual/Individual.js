import React from 'react';
import './Indiviual.css';

const Individual = () => {
  const firstName = "John";
  const lastName = "Doe";

  return (
    <div className="registration-screen">
      <div className="left-side">
        <h2>Organisation Details</h2>
      </div>
      <div className="right-side">
        <div className="header-container">
          <div className="radio-options">
            <label>
              <input type="radio" name="organizationType" value="type1" />
              Register as an Organiser
            </label>
            <label>
              <input type="radio" name="organizationType" value="type2" />
              Register as an Individual
            </label>
          </div>
        </div>
        <div className="divider"></div>
        <h3 style={{ color: 'black', display: 'flex', justifyContent: 'center', fontFamily: "Roboto", fontSize: '24px' }}>Preview</h3>
        <div className="strength"></div>
        <div className='preview-container'>
        <div className="form-group1">
            <div className="form-row2">
              <div className="box1">
                First Name: {firstName}
              </div>
              <div className="box1">
                Last Name: {lastName}
              </div>
            </div>
          </div>
          <div className='form-group1'>
            <div className="box">
              Email Id  :
            </div>
          </div>
          <div className='form-group1'>
            <div className="box">
              Password  :
            </div>
          </div>
          {/* <div className='form-group1'>
            <div className="box">
              Organization Name  :
            </div>
          </div>
          <div className='form-group1'>
            <div className="box">
              Primary country of registration  :
            </div>
          </div>
          <div className='form-group1'>
            <div className="box">
              Organisation Email Id  :
            </div>
          </div> */}
          <h3 style={{ color: 'black', display: 'flex', justifyContent: 'center', fontFamily: "Roboto", fontSize: '24px' }}>Contact Person for the Registration</h3>
          <div className="strength"></div>
          <div className="form-group1">
            <div className="form-row2">
              <div className="box1">
                First Name: {firstName}
              </div>
              <div className="box1">
                Last Name: {lastName}
              </div>
            </div>
          </div>
          <div className='form-group1'>
            <div className="box">
              Email Id  :
            </div>
          </div>
          <div className='form-group1'>
            <div className="box">
              Password  :
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <button onClick={() => console.log('Back button clicked')}>Back</button>
          <button onClick={() => console.log('Submit button clicked')}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Individual;
