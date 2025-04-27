// src/components/Dashboard.js
import React, { useState } from 'react';
import IncidentForm from './IncidentForm';
import IncidentList from './IncidentList';

// Mock data
const initialIncidents = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics...",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information...",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata...",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
];

const Dashboard = () => {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  // Add new incident
  const addIncident = (newIncident) => {
    setIncidents([...incidents, { ...newIncident, id: incidents.length + 1 }]);
  };

  // Filter incidents
  const filteredIncidents = incidents.filter(incident =>
    severityFilter === "All" || incident.severity === severityFilter
  );

  // Sort incidents
  const sortedIncidents = filteredIncidents.sort((a, b) => {
    if (sortOrder === "Newest") {
      return new Date(b.reported_at) - new Date(a.reported_at);
    } else {
      return new Date(a.reported_at) - new Date(b.reported_at);
    }
  });

  return (
    <div className="dashboard-container">
      <h1>AI Safety Incident Dashboard</h1>

      {/* Filter Controls */}
      <div className="controls">
        <select value={severityFilter} onChange={(e) => setSeverityFilter(e.target.value)}>
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>

      {/* Incident List */}
      <IncidentList incidents={sortedIncidents} />

      {/* Form to Add New Incident */}
      <IncidentForm addIncident={addIncident} />
    </div>
  );
};

export default Dashboard;
