import React from 'react';
import './classe.css';

function Classe({ el, onDelete, onUpdate }) {



  return (
    <div className="card">
      <img src={el.image_link} alt="Avatar" style={{ width: '100%' }} />
      <div className="container">
        <h4><b>Classe name is: {el.name}</b></h4>
        <p>The subject is: {el.subject}</p>
        <button onClick={() => onDelete(el.idclasse)}>Delete</button>
        <button onClick={() => onUpdate(el)}>Update</button>
      </div>
    </div>
  );
}

export default Classe;
