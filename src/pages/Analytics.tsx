import React from 'react';
import { BarChart, PieChart, LineChart } from 'lucide-react';
import Card from '../components/common/Card';
import { mockAnalytics, mockAppointments } from '../data/mockData';

const Analytics: React.FC = () => {
  const completionRate = Math.round((mockAnalytics.completedAppointments / mockAnalytics.totalAppointments) * 100);
  const missedRate = Math.round((mockAnalytics.missedAppointments / mockAnalytics.totalAppointments) * 100);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
        <Card>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <BarChart size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Completion Rate</p>
              <p className="text-2xl font-semibold text-gray-900">{completionRate}%</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
              <PieChart size={24} className="text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Missed Rate</p>
              <p className="text-2xl font-semibold text-gray-900">{missedRate}%</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <LineChart size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Appointments</p>
              <p className="text-2xl font-semibold text-gray-900">{mockAnalytics.totalAppointments}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Monthly Trends">
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart visualization coming soon
          </div>
        </Card>

        <Card title="Reminder Effectiveness">
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart visualization coming soon
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;