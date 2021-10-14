import React from 'react';
import propTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: propTypes.string,
};

export default Notification;
