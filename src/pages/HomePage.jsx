import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Women's Safety App</h1>
        <p>Your safety is our priority. Stay informed, stay prepared.</p>
      </header>

      <div className="home-features">
        <div className="feature-card" onClick={() => navigate('/ReportIncident')}>
          <h3>Report an Incident</h3>
          <p>Quickly report a safety concern in your area.</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/safety-tips')}>
          <h3>Safety Tips</h3>
          <p>Read useful tips to protect yourself in public or at home.</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/nearby-help')}>
          <h3>Nearby Help</h3>
          <p>Find nearby hospitals, shelters, and police stations.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
