import React, { useState } from "react";
import "./Review.css";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [questions, setQuestions] = useState({
    "How satisfied are you with the service?": "",
    "Would you recommend this service to others?": "",
    "How easy was it to communicate with the service provider?": "",
    "How would you rate the value for money?": "",
  });

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const handleTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleQuestionChange = (e, question) => {
    setQuestions({
      ...questions,
      [question]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Review submitted successfully!");
  };

  return (
    <div className="review-container">
      <h2>Leave Your Review</h2>
      <form onSubmit={handleSubmit} className="review-form">
        {/* Star Rating */}
        <div className="rating">
          <p>Rate the service: </p>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < rating ? "filled" : ""}`}
              onClick={() => handleRating(index)}
            >
              ★
            </span>
          ))}
        </div>

        {/* Review Questions */}
        {Object.keys(questions).map((question, index) => (
          <div key={index} className="question">
            <label>{question}</label>
            <select
              value={questions[question]}
              onChange={(e) => handleQuestionChange(e, question)}
              required
            >
              <option value="">Select an answer</option>
              <option value="Very Satisfied">Very Satisfied</option>
              <option value="Satisfied">Satisfied</option>
              <option value="Neutral">Neutral</option>
              <option value="Dissatisfied">Dissatisfied</option>
              <option value="Very Dissatisfied">Very Dissatisfied</option>
            </select>
          </div>
        ))}

        {/* Additional Review Text */}
        <div className="review-text">
          <label>Your Review:</label>
          <textarea
            value={reviewText}
            onChange={handleTextChange}
            placeholder="Write your review here..."
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Review;
