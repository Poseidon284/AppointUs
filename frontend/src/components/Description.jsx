import React, { useState } from "react";
import "./Description.css";

const Description = () => {
  const [description, setDescription] = useState(
    "Welcome to our professional service platform! Located in the heart of Tamil Nadu, we are committed to delivering top-notch solutions tailored to meet your needs. Whether you're looking for quality products or expert support, we strive to exceed expectations with every interaction. Your satisfaction is our priority."
  );

  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setDescription(newDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewDescription(description);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setNewDescription(e.target.value);
  };

  return (
    <div className="description-section">
      <div className="description-header">
        <h2>Description</h2>
        {!isEditing ? (
          <button className="update-button" onClick={handleUpdate}>
            Update
          </button>
        ) : (
          <>
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </>
        )}
      </div>
      <div className="description-content">
        {isEditing ? (
          <textarea
            className="description-textarea"
            value={newDescription}
            onChange={handleChange}
          />
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

export default Description;
