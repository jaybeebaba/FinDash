import React from 'react';
import { Bar } from 'react-chartjs-2';
import './dataVisualization.css';

const DataVisualizationChart = ({ data, title }) => {
return (
    <div className="chart-container">
    <h2 className="chart-title">{title}</h2>
    <div className="chart">
        <Bar data={data} />
    </div>
    </div>
);
};

export default DataVisualizationChart;
