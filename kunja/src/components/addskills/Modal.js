import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import './addskills.css'; 

const AddSkillsModal = ({ open, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 10,
    backgroundColor: 'lightgray', 
    '&:hover': {
      backgroundColor: 'lightgray',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%', 
    '& .MuiInputBase-input': {
      padding: theme.spacing(1),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      paddingRight: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('lg')]: {
        width: '20ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const skills = [
    "Marketing", "Marketing", "Marketing", 
    "JavaScript", "Graphic Design", "Machine Learning",
    "Content Writing", "SEO", "Cybersecurity",
    "Product Management", "Sales", "Customer Service"
  ];

  const handleSkillClick = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="addSkillsModal"> 
        <div className="skills-add-box">
          <h2 className='skills-header'>Add Skills</h2>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Skills (e.g., Data Analysis)"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Typography sx={{ marginLeft: 2, marginTop: 2 }}>Suggested skills based on your profile</Typography>
          <div className="skill-list-modal">
            {skills.map((skill, index) => (
              <div className="skill-modal" key={index}  onClick={() => handleSkillClick(skill)}
                style={{
                  backgroundColor: selectedSkills.includes(skill) ? '#5C4B53' : 'initial',
                  color: selectedSkills.includes(skill) ? 'white' : 'initial',
                //   cursor: 'pointer',
                
                }}>
                {skill}
              </div>
            ))}
          </div>
          <div className="buttons">
            <Button variant="contained" color="primary" className="back-button">BACK</Button>
            <Button variant="contained" color="primary" className="save-button">SAVE</Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default AddSkillsModal;
