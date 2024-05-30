import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Teacher from './teacher'; 
import './teacher.css'; 

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/teacher/getAll');
        console.log('Response:', response.data); // Log the response data
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teachers:', error); // Log any errors
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/teacher/${id}`);
      setTeachers(teachers.filter(teacher => teacher.idteacher !== id));
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  };

  const handleUpdate = async (teacher) => {
    const name = prompt('Enter new name:', teacher.name);
    const age = prompt('Enter new age:', teacher.age);
    const image_link = prompt('Enter new image link:', teacher.image_link);

    if (name && age && image_link) {
      try {
        await axios.put(`http://localhost:3000/api/teacher/${teacher.idteacher}`, {
          name,
          age,
          image_link
        });
        setTeachers(teachers.map(tch => (tch.idteacher === teacher.idteacher ? { ...tch, name, age, image_link } : tch)));
      } catch (error) {
        console.error('Error updating teacher:', error);
      }
    }
  };

  const handleAdd = async () => {
    const name = prompt('Enter name:');
    const age = prompt('Enter age:');
    const image_link = prompt('Enter image link:');

    if (name && age && image_link) {
      try {
        const response = await axios.post('http://localhost:3000/api/teacher/add', {
          name,
          age,
          image_link
        });
        setTeachers([...teachers, { idteacher: response.data.teacherId, name, age, image_link }]);
      } catch (error) {
        console.error('Error adding teacher:', error);
      }
    }
  };

  return (
    <div>
      <h1>All Teachers</h1>
      <div className="cards-container">
        {teachers.map(teacher => (
          <Teacher key={teacher.idteacher} el={teacher} onDelete={handleDelete} onUpdate={handleUpdate} />
        ))}
      </div>
      <button onClick={handleAdd} className="add-button">Add Teacher</button>
    </div>
  );
};

export default TeacherList;
