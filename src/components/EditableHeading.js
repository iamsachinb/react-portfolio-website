import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const EditableHeading = ({ initialText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="editable-heading">
      {isEditing ? (
        <InputGroup>
          <FormControl
            value={text}
            onChange={handleChange}
            aria-label="Edit Heading"
          />
          <Button variant="outline-secondary" onClick={handleSaveClick}>
            Save
          </Button>
        </InputGroup>
      ) : (
        <div className="heading-content">
          <p>{text}</p>
          <Button variant="outline-secondary" onClick={handleEditClick}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default EditableHeading;
