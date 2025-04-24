import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Searching GitHub...</p>
    </div>
  );
};

export default LoadingSpinner;