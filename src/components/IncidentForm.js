// src/components/IncidentForm.js
import React, { useState } from 'react';

const IncidentForm = ({ addIncident }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !description) {
      alert("Title and Description are required!");
      return;
    }

    const newIncident = {
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };

    addIncident(newIncident);
    setTitle("");
    setDescription("");
    setSeverity("Low");
  };

  return (
    <div className="incident-form">
      <h2>Report New Incident</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Incident Title"
          />
        </div>
        
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Incident Description"
          />
        </div>

        <div>
          <label>Severity</label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button type="submit">Report Incident</button>
      </form>
    </div>
  );
};

export default IncidentForm;
