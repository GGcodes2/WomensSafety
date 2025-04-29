import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReportIncident from './pages/ReportIncident';
import SafetyTips from './pages/SafetyTips';
import NearbyHelp from './pages/NearbyHelp'; // Import NearbyHelp
import 'leaflet/dist/leaflet.css'; // Add this line

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/ReportIncident" element={<ReportIncident />} />
        <Route path="/safety-tips" element={<SafetyTips />} />
        <Route path="/nearby-help" element={<NearbyHelp />} /> {/* New Route */}
      </Routes>
    </>
  );
};

export default App;
