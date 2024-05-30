import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Student from './student';
import './student.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/student/getAll');
        console.log('Response:', response.data); // Log the response data
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error); // Log any errors
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/student/${id}`);
      setStudents(students.filter(student => student.idstudent !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleUpdate = async (student) => {
    const name = prompt('Enter new name:', student.name);
    const age = prompt('Enter new age:', student.age);
    const image_link = prompt('Enter new image link:', student.image_link);

    if (name && age && image_link) {
      try {
        await axios.put(`http://localhost:3000/api/student/${student.idstudent}`, {
          name,
          age,
          image_link
        });
        setStudents(students.map(st => (st.idstudent === student.idstudent ? { ...st, name, age, image_link } : st)));
      } catch (error) {
        console.error('Error updating student:', error);
      }
    }
  };

  const handleAdd = async () => {
    const name = prompt('Enter name:');
    const age = prompt('Enter age:');
    const image_link = prompt('Enter image link:');

    if (name && age && image_link) {
      try {
        const response = await axios.post('http://localhost:3000/api/student/add', {
          name,
          age,
          image_link
        });
        setStudents([...students, { idstudent: response.data.studentId, name, age, image_link }]);
      } catch (error) {
        console.error('Error adding student:', error);
      }
    }
  };

  return (
    <div>
      <h1>All Students</h1>
      <div className="cards-container">
        {students.map(student => (
          <Student key={student.idstudent} el={student} onDelete={handleDelete} onUpdate={handleUpdate} />
        ))}
      </div>
      <button onClick={handleAdd} className="add-button">Add Student</button>
    </div>
  );
};

export default StudentList;
