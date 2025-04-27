// src/components/IncidentItem.js
import React, { useState } from 'react';

const IncidentItem = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="incident-item">
      <h3>{incident.title}</h3>
      <p><strong>Severity:</strong> {incident.severity}</p>
      <p><strong>Reported On:</strong> {new Date(incident.reported_at).toLocaleDateString()}</p>

      <button onClick={toggleDetails}>
        {isExpanded ? "Hide Details" : "View Details"}
      </button>

      {isExpanded && (
        <div className="incident-description">
          <p>{incident.description}</p>
        </div>
      )}
    </div>
  );
};

export default IncidentItem;
