import React from 'react';
import './student.css';

function Student({ el, onDelete, onUpdate }) {
  return (
    <div className="card">
      <img src={el.image_link} alt="Avatar" style={{ width: '100%' }} />
      <div className="container">
        <h4><b>His name is: {el.name}</b></h4>
        <p>His age is: {el.age}</p>
        <button onClick={() => onDelete(el.idstudent)}>Delete</button>
        <button onClick={() => onUpdate(el)}>Update</button>
      </div>
    </div>
  );
}

export default Student;
