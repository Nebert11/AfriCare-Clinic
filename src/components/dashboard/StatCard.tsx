import React from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  color?: 'blue' | 'green' | 'red' | 'yellow';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  change,
  color = 'blue'
}) => {
  const colorStyles = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      icon: 'text-blue-500'
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-700',
      icon: 'text-green-500'
    },
    red: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      icon: 'text-red-500'
    },
    yellow: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-700',
      icon: 'text-yellow-500'
    }
  };
  
  const selectedColor = colorStyles[color];
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center">
        <div className={`w-12 h-12 rounded-lg ${selectedColor.bg} flex items-center justify-center mr-4`}>
          <span className={selectedColor.icon}>{icon}</span>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <h3 className="text-2xl font-semibold text-gray-900 mt-1">{value}</h3>
          
          {change && (
            <div className="flex items-center mt-1">
              <span className={change.type === 'increase' ? 'text-green-600' : 'text-red-600'}>
                {change.type === 'increase' ? '+' : '-'}{change.value}%
              </span>
              <span className="text-gray-500 text-sm ml-1">from last month</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;