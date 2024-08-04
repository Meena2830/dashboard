import React from 'react';
import LineChartComponent from '../components/LineChartComponent';
import PieChartComponent from '../components/PieChartComponent';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <h1 className="dash-heading">Dashboard</h1>
        <ul >
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#inventory">Inventory</a></li>
          <li><a href="#orders">Orders</a></li>
          <li><a href="#returns">Returns</a></li>
          <li><a href="#customers">Customers</a></li>
          <li><a href="#shipping">Shipping</a></li>
          <li><a href="#channel">Channel</a></li>
          <li><a href="#integrations">Integrations</a></li>
          <li><a href="#calculators">Calculators</a></li>
          <li><a href="#reports">Reports </a></li>
          <li><a href="#account">Account </a></li>
        </ul>
      </div>
    

      
      <div className="content">
        <div className="chart-section">
          <h2>Sales vs Orders</h2>
          <LineChartComponent />
        </div>
        <div className="chart-section">
          <h2>Portion of Sales</h2>
          <PieChartComponent />
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
