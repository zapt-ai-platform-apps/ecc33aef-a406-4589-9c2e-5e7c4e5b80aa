import React from 'react';

const PieChart = ({ tokenomics, total }) => {
  let accumulated = 0;

  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        {tokenomics.map((item, index) => {
          const start = accumulated;
          accumulated += item.percentage;
          return (
            <circle
              key={index}
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="10"
              strokeDasharray={`${item.percentage} ${total}`}
              strokeDashoffset={-start}
              className={`text-${['purple-500', 'blue-500', 'pink-500', 'yellow-500'][index % 4]}`}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
        {total}%
      </div>
    </div>
  );
};

export default PieChart;