import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreView = () => {
  const firstName = "Abcd";
  const lastName = "Lmnop";
  const countryLocation = "Africa";
  const emailId = "abcd@gmail.com";
  const password = "Abchdet@1263544";
  const sdgFocus = "Zero hunger";
  
  // Example skills array
  const skills = ["Marketing", "Marketing"];
  const socialMedia = [
    { platform: "LinkedIn", link: "https://abcdesfd.cbhk" },
  ];

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('Submit button clicked');
    navigate('/add-skill');
  };

  return (
    <div className="preview-screen">
      <div className="left-side">
        <h2>Individual Details</h2>
      </div>
      <div className="right-side">
        <div className="header-container">
          <div className="radio-options">
            <label>
              <input type="radio" name="organizationType" value="type1" />
              Register as an Organization
            </label>
            <label>
              <input type="radio" name="organizationType" value="type2" defaultChecked />
              Register as an Individual
            </label>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <h3 className="preview-title">Preview</h3>
          <div className="strength-hr"></div>
          <div style={{margin:'10px auto',marginLeft:'22%'}}>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px', width: '80%' }}>
              <div className="box" style={{ marginRight: '50px' }}>
                First Name: <span className='spanStyle'>{firstName}</span>
              </div>
              <div className="box">
                Last Name: <span className='spanStyle'>{lastName}</span>
              </div>
            </div>
          </div>

          <div className="form-group1 box">
            Country / Location: <span className='spanStyle'>{countryLocation}</span>
          </div>
          <div className="form-group1 box">
            Email Id: <span className='spanStyle'>{emailId}</span>
          </div>
          <div className="form-group1 box">
            Password: <span className='spanStyle'>{password}</span>
          </div>
          <div className="form-group1 box large-box">
            Sustainable Development Goals (SDGs) of focus: <span className='spanStyle'>{sdgFocus}</span>
          </div>
          <div className="form-group1 box large-box">
            Your Skills:
            <ul>
              {skills.map((skill, index) => (
                <li key={index} className='spanStyle'>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="form-group1 box large-box">
            <div style={{ padding: '10px', fontFamily: 400, fontSize: '18px' }}>Social Media Profiles</div>
            <div>
              {socialMedia.map((media, index) => (
                <div key={index}>
                  {media.platform}: <a href={media.link} target="_blank" rel="noopener noreferrer">{media.link}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <button onClick={() => console.log('Back button clicked')}>Back</button>
          <button onClick={handleSubmit}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default PreView;
