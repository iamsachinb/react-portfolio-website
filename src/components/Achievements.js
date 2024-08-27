import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Achievements = () => {
  const [achievements, setAchievements] = useState([
    'First place in a machine learning technical quiz',
    'Runner-up in the Caterpillar hackathon',
  ]);

  const [newAchievement, setNewAchievement] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddAchievement = () => {
    if (newAchievement.trim()) {
      setAchievements([...achievements, newAchievement.trim()]);
      setNewAchievement('');
    }
  };

  const handleEditAchievement = (index) => {
    setEditingIndex(index);
    setNewAchievement(achievements[index]);
  };

  const handleSaveAchievement = () => {
    const updatedAchievements = [...achievements];
    updatedAchievements[editingIndex] = newAchievement.trim();
    setAchievements(updatedAchievements);
    setEditingIndex(-1);
    setNewAchievement('');
  };

  const handleRemoveAchievement = (index) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(updatedAchievements);
  };

  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <InputGroup>
                <FormControl
                  value={newAchievement}
                  onChange={(e) => setNewAchievement(e.target.value)}
                />
                <Button variant="outline-secondary" onClick={handleSaveAchievement}>
                  Save
                </Button>
              </InputGroup>
            ) : (
              <span>
                {achievement}{' '}
                <Button variant="outline-secondary" size="sm" onClick={() => handleEditAchievement(index)}>
                  Edit
                </Button>{' '}
                <Button variant="outline-danger" size="sm" onClick={() => handleRemoveAchievement(index)}>
                  Remove
                </Button>
              </span>
            )}
          </li>
        ))}
      </ul>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Add a new achievement"
          value={newAchievement}
          onChange={(e) => setNewAchievement(e.target.value)}
        />
        <Button variant="outline-secondary" onClick={handleAddAchievement}>
          Add Achievement
        </Button>
      </InputGroup>
    </section>
  );
};

export default Achievements;
