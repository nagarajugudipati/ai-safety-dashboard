// src/components/IncidentList.js
import React from 'react';
import IncidentItem from './IncidentItem';

const IncidentList = ({ incidents }) => {
  return (
    <div className="incident-list">
      <h2>Incident List</h2>
      {incidents.length === 0 ? (
        <p>No incidents reported.</p>
      ) : (
        <ul>
          {incidents.map((incident) => (
            <li key={incident.id}>
              <IncidentItem incident={incident} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IncidentList;
