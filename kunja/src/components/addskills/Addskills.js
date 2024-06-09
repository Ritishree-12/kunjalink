import React, { useState } from 'react';
import './addskills.css';

const Skills = () => {
  const [skills, setSkills] = useState(['Marketing', 'Management', 'Marketing', 'Marketing', 'Marketing']);

  const removeSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  return (
    <div className="skills-container">
      <button className="back-button">BACK</button>
      {/* <h1 className="skills-title">Skills</h1> */}
      <div className="skills-box">
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              {skill} <button onClick={() => removeSkill(index)}>X</button>
            </div>
          ))}
        </div>
        <button className="add-skills-button">Add Skills</button>
      </div>
    </div>
  );
};

export default Skills;
