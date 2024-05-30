import React, { useState } from 'react';
import './App.css';
import StudentList from './component/studentList';
import TeacherList from './component/teacherList';
import ClasseList from './component/classeList';
import HomePage from './component/home'; // Import the HomePage component

function App() {
  const [activeComponent, setActiveComponent] = useState("Home");

  const handleLinkClick = (component) => {
    setActiveComponent(component);
  };

  const renderView = () => {
    if (activeComponent === 'Home') {
      return <HomePage handleLinkClick={handleLinkClick} />; // Pass handleLinkClick as prop
    } else if (activeComponent === 'Students') {
      return <StudentList />;
    } else if (activeComponent === 'Teachers') {
      return <TeacherList />;
    } else if (activeComponent === 'Classes') {
      return <ClasseList />;
    } else {
      return <div>hello world</div>;
    }
  };

  return (
    <div>
      <ul>
        <li><button className={activeComponent === 'Home' ? 'active' : ''} onClick={() => handleLinkClick('Home')}>Home</button></li>
        <li><button className={activeComponent === 'Students' ? 'active' : ''} onClick={() => handleLinkClick('Students')}>prisoners</button></li>
        <li><button className={activeComponent === 'Teachers' ? 'active' : ''} onClick={() => handleLinkClick('Teachers')}>Teachers</button></li>
        <li><button className={activeComponent === 'Classes' ? 'active' : ''} onClick={() => handleLinkClick('Classes')}>Classes</button></li>
      </ul>

      {/* Render active component */}
      {renderView()}
    </div>
  );
}

export default App;
