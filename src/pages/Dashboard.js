import React from 'react';
import LineChartComponent from '../components/LineChartComponent';
import PieChartComponent from '../components/PieChartComponent';
/*import './Dashboard.css';*/
const Dashboard = () => (
  <div className="dashboard">
    <div className="chart-section">
      <h2>Sales vs Orders</h2>
      <LineChartComponent />
    </div>
    <div className="chart-section">
      <h2>Portion of Sales</h2>
      <PieChartComponent />
    </div>
  </div>
);

export default Dashboard;
