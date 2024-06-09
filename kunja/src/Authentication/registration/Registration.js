import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Registration = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    country: 'Africa',
    organizationEmail: '',
    firstName: '',
    lastName: '',
    contactEmail: '',
    password: '',
    authorized: false,
    organizationType: 'type1', 
    sdg: '',
    skills: '',
    linkedIn: '',
    twitter: '',
    facebook: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate({
      pathname: '/preview',
      state: { formData }
    });
  };

  return (
    <div className="registration-screen">
      
      <div className="left-side">
        <h2>{formData.organizationType === 'type1' ? 'Organisation Details' : 'Individual Details'}</h2>
      </div>
    
      <div className="right-side">
        <div className="header-container">
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="organizationType"
                value="type1"
                checked={formData.organizationType === 'type1'}
                onChange={handleChange}
              />
              Register as an Organiser
            </label>
            <label>
              <input
                type="radio"
                name="organizationType"
                value="type2"
                checked={formData.organizationType === 'type2'}
                onChange={handleChange}
              />
              Register as an Individual
            </label>
          </div>
        </div>
        <div className="divider"></div>
        <div className="content">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              {formData.organizationType === 'type1' && (
                <>
                  <div className="form-group">
                    <label>Organization Name <span className="required">(Required)</span></label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>What is your primary country of registration? <span className="required">(Required)</span></label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="Africa">Africa</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Organization E-Mail address <span className="required">(Required)</span></label>
                    <input
                      type="email"
                      name="organizationEmail"
                      value={formData.organizationEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <h3>Contact Person for Registration</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name <span className="required">(Required)</span></label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name <span className="required">(Required)</span></label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Id <span className="required">(Required)</span></label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Create Password <span className="required">(Required)</span></label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <div className="strength-indicator"></div>
                  </div>
                  <div className="form-group">
                    <h5>Authorized Representative <span className="required">(Required)</span></h5>
                  </div>
                  <div className='checkbox'>
                    <input
                      type="checkbox"
                      name="authorized"
                      checked={formData.authorized}
                      onChange={handleChange}
                      required
                    />
                    <label style={{color:'black'}}> I am authorized to represent this organization</label>
                  </div>
                </>
              )}
              {formData.organizationType === 'type2' && (
                <>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name <span className="required">(Required)</span></label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name <span className="required">(Required)</span></label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Country/Location <span className="required">(Required)</span></label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Create Password <span className="required">(Required)</span></label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <div className="strength-indicator"></div>
                    <div className="form-group">
                      <label>Sustainable Development Goals (SDGs) of focus<span className="required">(Required)</span></label>
                      <select
                        name="sdg"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option value="Africa">Africa</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Your Skills<span className="required">(Required)</span></label>
                      <select
                        name="sdg"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option value="Africa">Africa</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                      </select>
                    </div>
                    <div className="divider1"></div>
                    <h3 style={{ color: 'black', display: 'flex', justifyContent: 'center', fontFamily: "Roboto", fontSize: '24px' }}>Social Media Profiles</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <div className='label-icon'>
                          <i className="fab fa-linkedin"></i>
                          <label>LinkedIn</label>
                        </div>
                        <input
                          type="text"
                          name="linkedIn"
                          value={formData.linkedIn}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                      <div className='label-icon'>
                          <i className="fab fa-twitter"></i>
                          <label>Twitter</label>
                        </div>
                       
                        <input
                          type="text"
                          name="twitter"
                          value={formData.twitter}
                          onChange={handleChange}
                        />
                      </div>

                    </div>
                    <div className="form-row">
                      <div className="form-group">
                      <div className='label-icon'>
                          <i className="fab fa-facebook"></i>
                          <label>Facebook</label>
                        </div>
                        <input
                          type="text"
                          name="facebook"
                          value={formData.facebook}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        {/* <label>Facebook</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      /> */}
                      </div>
                    </div>
                  </div>
                </>
              )}
              <button type="submit" className="next-btn">NEXT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
