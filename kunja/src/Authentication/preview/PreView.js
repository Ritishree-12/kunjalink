import React from 'react';
import { useNavigate } from 'react-router-dom';
import './preview.css';

const PreView = () => {
  const organizationName = "Example Organization";
  const primaryCountry = "Example Country";
  const organizationEmail = "example@organization.com";
  const firstName = "John";
  const lastName = "Doe";
  const contactEmail = "john.doe@example.com";
  const password = "******";

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('Submit button clicked');
    navigate('/add-skill');
  }

  return (
    <div className="registration-screen">
      <div className="left-side">
        <h2>Organization Details</h2>
      </div>
      <div className="right-side">
        <div className="header-container">
          <div className="radio-options">
            <label>
              <input type="radio" name="organizationType" value="type1" />
              Register as an Organization
            </label>
            <label>
              <input type="radio" name="organizationType" value="type2" />
              Register as an Individual
            </label>
          </div>
        </div>
        <div className="divider"></div>
        <h3 style={{ color: 'black', display: 'flex', justifyContent: 'center', fontFamily: "Roboto", fontSize: '24px', }}>Preview</h3>
        <div className="strength"></div>
        <div className='preview-container'>
          <div className='form-group1'>
            <div className="box">
              Organization Name: {organizationName}
            </div>
          </div>
          <div className='form-group1'>
            <div className="box">
              Primary country of registration: {primaryCountry}
            </div>
          </div>
          <div className='form-group1'>
            <div className="box">
              Organization Email Id: {organizationEmail}
            </div>
          </div>
          <h3 style={{ color: 'black', display: 'flex', justifyContent: 'center', fontFamily: "Roboto", fontSize: '24px' }}>Contact Person for Registration</h3>
          <div className="strength" style={{marginBottom:'10px'}}></div>
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
              Email Id: {contactEmail}
            </div>
          </div>
          <div className='form-group1'>
            <div className="box">
              Password: {password}
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <button onClick={() => console.log('Back button clicked')}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default PreView;
