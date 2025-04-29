import React from 'react';
import alarmSound from '../../assets/alarm.mp3';

const VoiceAlert = ({ message }) => {
  const playAlert = () => {
    // Speak message
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);

    // Play alarm sound
    const audio = new Audio(alarmSound);
    audio.volume = 1; // Max volume
    audio.play();
  };

  return (
    <button onClick={playAlert} className="voice-alert-button">
      🔊 Voice Alert
    </button>
  );
};

export default VoiceAlert;
