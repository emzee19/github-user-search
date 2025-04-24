import React from 'react';
import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="error-message">
      <div className="error-icon">⚠️</div>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;