import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Skills = () => {
  const [skills, setSkills] = useState(['React.js', 'JavaScript', 'Python', 'Machine Learning']);
  const [newSkill, setNewSkill] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleEditSkill = (index) => {
    setEditingIndex(index);
    setNewSkill(skills[index]);
  };

  const handleSaveSkill = () => {
    const updatedSkills = [...skills];
    updatedSkills[editingIndex] = newSkill.trim();
    setSkills(updatedSkills);
    setEditingIndex(-1);
    setNewSkill('');
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <InputGroup>
                <FormControl
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                />
                <Button variant="outline-secondary" onClick={handleSaveSkill}>
                  Save
                </Button>
              </InputGroup>
            ) : (
              <span>
                {skill}{' '}
                <Button variant="outline-secondary" size="sm" onClick={() => handleEditSkill(index)}>
                  Edit
                </Button>{' '}
                <Button variant="outline-danger" size="sm" onClick={() => handleRemoveSkill(index)}>
                  Remove
                </Button>
              </span>
            )}
          </li>
        ))}
      </ul>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Add a new skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <Button variant="outline-secondary" onClick={handleAddSkill}>
          Add Skill
        </Button>
      </InputGroup>
    </section>
  );
};

export default Skills;
