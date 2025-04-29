import React from 'react';
import './SafetyTips.css';

const SafetyTips = () => {
  return (
    <div className="tips-container">
      <h2 className="tips-title">Essential Safety Tips</h2>
      <ul className="tips-list">
        <li>🌙 Always share your location when going out at night.</li>
        <li>📱 Keep emergency contacts on speed dial.</li>
        <li>🚕 Use trusted transportation and track your rides.</li>
        <li>🔐 Keep doors locked, even when you're home.</li>
        <li>💻 Be cautious while sharing personal info online.</li>
      </ul>
    </div>
  );
};

export default SafetyTips;
