import React from 'react';
import { Alert } from 'antd';

interface ErrorProps {
  message: string;
  info: {
    statusCode: number;
    message: string;
  };
  status: number;
}

const ErrorAlert: React.FC<{ error: ErrorProps }> = ({ error }) => {
  return (
    <Alert
      message={error.message}
      description={error.info.message}
      type="error"
      showIcon
    />
  );
};

export default ErrorAlert;
