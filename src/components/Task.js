import React from "react";
import "./Task.scss"; // Import the corresponding CSS file

const TaskComponent = ({ tasks, isOpen, onClose }) => {
  if (!isOpen) {
    return null; 
  }

  return (

    <div className="task-component">
      <h3 style={{color:"white"}}>Daily Tasks </h3>
     <ul class="progress">
    <li class="progress__item progress__item--completed">
      <p class="progress__title">Watch a Romantic Movies </p>
      <p class="progress__info">Watch The Love Story</p>
      <p class="progress__info">Earned 80 Points</p>
      <p class="progress__info">Completed</p>
    </li>
    <li class="progress__item progress__item--active">
      <p class="progress__title">Watch a Horror Movie</p>
      <p class="progress__info">Watch Evil Dead</p>
      <p class="progress__info">Earn 120 Points</p>
      <p class="progress__info">Current or Active</p>
    </li>
    <li class="progress__item">
      <p class="progress__title">Daily Spend 30 minutes in our App</p>
      <p class="progress__info">Earn 200 Points</p>
     
    </li>
  </ul>
    </div>
  );
};

export default TaskComponent;
