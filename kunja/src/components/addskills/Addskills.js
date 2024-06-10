import React, { useState } from 'react';
import { Button } from '@mui/material';
import Modal from '../addskills/Modal';
import './addskills.css';

const Skills = () => {
  const [skills, setSkills] = useState(['Marketing', 'Management', 'Marketing', 'Marketing', 'Marketing']);
  const [modalOpen, setModalOpen] = useState(false);

  const removeSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="skills-container">
      <button className="back-button1">BACK</button>
      <div className="skills-box">
        <div className="skills-header">Your Skills</div>
        <div className="hr"></div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              {skill} <button onClick={() => removeSkill(index)}>X</button>
            </div>
          ))}
        </div>
        <div className="hr"></div>
        <button className="add-skills-button" onClick={openModal}>Add Skills</button>
      </div>
      <Modal open={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Skills;
