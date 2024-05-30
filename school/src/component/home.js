import React from 'react';
import "./home.css"

function HomePage({ handleLinkClick }) {
  return (
    <div>
      <h2>Welcome to our school</h2>
      <div className="home-options">
        <div className="home-option" onClick={() => handleLinkClick('Students')}>
          <img src="https://i0.wp.com/prismreports.org/wp-content/uploads/2023/04/iStock-1138187706.jpg?fit=2060%2C1456&ssl=1" alt="Students" />
          <p>prisoners</p>
        </div>
        <div className="home-option" onClick={() => handleLinkClick('Teachers')}>
          <img src="https://louderthanwar.com/wp-content/uploads/2023/09/Blizzard-guild-hall-promo-Middleham.jpg" alt="Teachers" />
          <p>Teachers</p>
        </div>
        <div className="home-option" onClick={() => handleLinkClick('Classes')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWB2XfcILK6BkA_0aLDseRs3xOqVgHLfRpg&s" alt="Classes" />
          <p>Classes</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
