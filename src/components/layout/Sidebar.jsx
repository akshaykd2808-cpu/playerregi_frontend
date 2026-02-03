import React from 'react';
import { Link } from 'react-router-dom';
import "../../all-css-files/Sidebar.css";
const Sidebar = ({ isOpen, toggleSidebar }) => {

  return (

    
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button className="close-btn" onClick={toggleSidebar}>×</button>
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="#add-product">Add Registration Form</Link></li>
          <li><Link to="#inventory">Add Custom Fields</Link></li>
          <li><Link to="#reports">Reports</Link></li>

        </ul>
      </div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
    </>
  );
};

export default Sidebar;
