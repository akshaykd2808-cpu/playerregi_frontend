import React, { use } from 'react';
import '../../all-css-files/Dashboard.css';


const Dashboard = () => {

  
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome to Naksh Sports Dashboard</h1>
        <p>Manage your sports equipment and track your business performance</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-content">
            <h3>Total Products</h3>
            <p className="stat-number">1,247</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-content">
            <h3>In Stock</h3>
            <p className="stat-number">892</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>Revenue</h3>
            <p className="stat-number">$45,230</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h3>Growth</h3>
            <p className="stat-number">+12.5%</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>Popular Sports Categories</h2>
          <div className="sports-grid">
            <div className="sport-card">
              <div className="sport-icon">⚽</div>
              <h3>Football</h3>
              <p>Premium footballs, shin guards, and training equipment for all skill levels.</p>
            </div>

            <div className="sport-card">
              <div className="sport-icon">🏀</div>
              <h3>Basketball</h3>
              <p>High-quality basketballs, hoops, and accessories for indoor and outdoor play.</p>
            </div>

            <div className="sport-card">
              <div className="sport-icon">🎾</div>
              <h3>Tennis</h3>
              <p>Professional tennis rackets, balls, and gear for competitive and recreational players.</p>
            </div>

            <div className="sport-card">
              <div className="sport-icon">🏓</div>
              <h3>Table Tennis</h3>
              <p>Complete table tennis sets, paddles, and accessories for home and club use.</p>
            </div>

            <div className="sport-card">
              <div className="sport-icon">🏸</div>
              <h3>Badminton</h3>
              <p>Lightweight rackets, shuttlecocks, and nets for indoor badminton enthusiasts.</p>
            </div>

            <div className="sport-card">
              <div className="sport-icon">🏐</div>
              <h3>Volleyball</h3>
              <p>Official size volleyballs and equipment for beach and indoor volleyball.</p>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Recent Activities</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">📦</div>
              <div className="activity-content">
                <p>New football shipment received</p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">💰</div>
              <div className="activity-content">
                <p>Large order completed - $1,250</p>
                <span className="activity-time">4 hours ago</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">👥</div>
              <div className="activity-content">
                <p>New customer registered</p>
                <span className="activity-time">6 hours ago</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">📊</div>
              <div className="activity-content">
                <p>Monthly sales report generated</p>
                <span className="activity-time">1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
