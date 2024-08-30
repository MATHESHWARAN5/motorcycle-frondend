import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NotificationSystem.css';

const Feedback = () => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend
      const response = await axios.post('https://backend-capstone-motorcycle.onrender.com/api/feedback/submit', {
        rating,
        comment
      });
      // Show success notification
      toast.success(response.data.message);
      setComment(''); // Clear comment field after successful submission
    } catch (error) {
      // Show error notification
      console.error('Error submitting feedback:', error);
      toast.error('Error submitting feedback');
    }
  };

  // Function to handle rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="feedback-container">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <FontAwesomeIcon
                key={star}
                icon={faStar}
                className={`star ${star <= rating ? 'selected' : ''}`}
                onClick={() => handleRatingChange(star)}
              />
            ))}
          </div>
        </div>
        <div>
          <label>Comment:</label>
          <textarea 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            placeholder="Enter your feedback here"
            required
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
};

export default Feedback;








