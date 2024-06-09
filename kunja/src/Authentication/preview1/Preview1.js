import React from 'react';
import './Preview1.css';

const PreView = () => {
  const orgName = "Abcdefghijk";
  const country = "Africa";
  const orgEmail = "abcd@gmail.com";
  const firstName = "Abcd";
  const lastName = "Lmnop";
  const email = "abcd@gmail.com";
  const password = "Abchdet@1263544";

  return (
    <div className="registration-screen">
      <div className="content-container">
        <div className="left-side">
          <h2>Organization Details</h2>
        </div>
        <div className="right-side">
          <div className="header-container">
            <div className="radio-options">
              <label>
                <input type="radio" name="organizationType" value="type1" checked />
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
          <div className="preview-container">
            <div className="form-group">
              <div className="box">
                Organization Name : {orgName}
              </div>
            </div>
            <div className="form-group">
              <div className="box">
                Primary country of registration : {country}
              </div>
            </div>
            <div className="form-group">
              <div className="box">
                Organization Email Id : {orgEmail}
              </div>
            </div>
            <h3 className="preview-title">Contact Person for Registration</h3>
            <div className="form-group">
              <div className="form-row">
                <div className="box half-width">
                  First Name: {firstName}
                </div>
                <div className="box half-width">
                  Last Name: {lastName}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="box">
                Email Id : {email}
              </div>
            </div>
            <div className="form-group">
              <div className="box">
                Password : {password}
              </div>
            </div>
          </div>
          <div className="buttons-container">
            <button onClick={() => console.log('Back button clicked')}>Back</button>
            <button onClick={() => console.log('Submit button clicked')}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreView;
