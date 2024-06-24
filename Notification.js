import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notifications = useSelector((state) => state.notifications);

  // Render notification if message exists
  if (notifications.message) {
    return <div className={`notification ${notifications.type}`}>{notifications.message}</div>;
  }

  return null;
};

export default Notification;
