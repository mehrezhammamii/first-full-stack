import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Classe from './classe';
import './classe.css';

const ClasseList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/classe/getAll');
        console.log('Response:', response.data); // Log the response data
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching students:', error); // Log any errors
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/classe/${id}`);
      setClasses(classes.filter(classe => classe.idclasse !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleUpdate = async (classe) => {
    const name = prompt('Enter new name:', classe.name);
    const subject = prompt('Enter new subject:', classe.subject);
    const image_link = prompt('Enter new image link:', classe.image_link);

    if (name && subject && image_link) {
      try {
        await axios.put(`http://localhost:3000/api/classe/${classe.idclasse}`, {
          name,
          subject,
          image_link
        });
        setClasses(classes.map(cl => (cl.idclasse === classe.idclasse ? { ...cl, name, subject, image_link } : cl)));
      } catch (error) {
        console.error('Error updating classe:', error);
      }
    }
  };

  const handleAdd = async () => {
    const name = prompt('Enter name:');
    const subject = prompt('Enter subject:');
    const image_link = prompt('Enter image link:');

    if (name && subject && image_link) {
      try {
        const response = await axios.post('http://localhost:3000/api/classe/add', {
          name,
          subject,
          image_link
        });
        setClasses([...classes, { idclasse: response.data.classeId, name, subject, image_link }]);
      } catch (error) {
        console.error('Error adding classe:', error);
      }
    }
  };

  return (
    <div>
      <h1>All classes</h1>
      <div className="cards-container">
        {classes.map(classe => (
            
          <Classe key={classe.idclasse} el={classe} onDelete={handleDelete} onUpdate={handleUpdate} />
        ))
        }
      </div>
      <button onClick={handleAdd} className="add-button">Add classe</button>
    </div>
  );
};

export default ClasseList;
