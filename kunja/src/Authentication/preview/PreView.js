// PreView.js
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
  };

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
        <h3 className="preview-title">Preview</h3>
        <div className="strength-hr"></div>
        <div className="preview-container">
          <div className="form-group1">
            <div className="box">
              Organization Name: <span className='spanStyle'>{organizationName}</span> 
            </div>
          </div>
          <div className="form-group1">
            <div className="form-group1 box">
              Primary country of registration: <span className='spanStyle'>{primaryCountry}</span> 
            </div>
          </div>
          <div className="form-group1">
            <div className="box">
              Organization Email Id: <span className='spanStyle'>{organizationEmail}</span> 
            </div>
          </div>
          <div className="strength-hr"></div>
          <h3 className="contact-person">Contact Person for Registration</h3>
          <div style={{margin:'10px auto',marginLeft:'20%'}}>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px', width: '80%' }}>
              <div className="box" style={{ marginRight: '50px' }}>
                First Name: <span className='spanStyle'>{firstName}</span>
              </div>
              <div className="box">
                Last Name: <span className='spanStyle'>{lastName}</span>
              </div>
            </div>
          </div>
          <div className="form-group1">
            <div className="box">
              Email Id: <span className='spanStyle'>{contactEmail}</span>
            </div>
          </div>
          <div className="form-group1">
            <div className="box">
              Password: <span className='spanStyle'>{password}</span> 
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <button onClick={() => console.log('Back button clicked')}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PreView;
