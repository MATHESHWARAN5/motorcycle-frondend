import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = async () => {
    try {
      const response = await axios.post('/api/add-notification', {
        message: 'This is a sample notification.',
        type: 'info'
      });
      setNotifications([...notifications, response.data]);
    } catch (error) {
      console.error('Error adding notification:', error);
    }
  };

  const removeNotification = async (id) => {
    try {
      await axios.delete(`/api/remove-notification/${id}`);
      setNotifications(notifications.filter(notification => notification.id !== id));
    } catch (error) {
      console.error('Error removing notification:', error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary mb-3" onClick={addNotification}>Add Notification</button>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Notifications</h2>
          {notifications.map(notification => (
            <div key={notification.id} className={`alert alert-${notification.type} alert-dismissible fade show`} role="alert">
              {notification.message}
              <button type="button" className="btn-close" aria-label="Close" onClick={() => removeNotification(notification.id)}></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationSystem;
