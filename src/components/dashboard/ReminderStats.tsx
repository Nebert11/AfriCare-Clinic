import React from 'react';
import { BarChart, CheckCircle, Clock, XCircle } from 'lucide-react';
import StatCard from './StatCard';
import { AnalyticsData } from '../../types';

interface ReminderStatsProps {
  analyticsData: AnalyticsData;
}

const ReminderStats: React.FC<ReminderStatsProps> = ({ analyticsData }) => {
  const { totalAppointments, missedAppointments, completedAppointments, upcomingAppointments } = analyticsData;
  
  // Calculate reminder effectiveness
  const missedRate = Math.round((missedAppointments / totalAppointments) * 100);
  const completionRate = Math.round((completedAppointments / totalAppointments) * 100);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard 
        title="Total Appointments" 
        value={totalAppointments}
        icon={<BarChart size={24} />}
        change={{ value: 8, type: 'increase' }}
        color="blue"
      />
      
      <StatCard 
        title="Completed" 
        value={`${completionRate}%`}
        icon={<CheckCircle size={24} />}
        change={{ value: 12, type: 'increase' }}
        color="green"
      />
      
      <StatCard 
        title="Missed Appointments" 
        value={missedAppointments}
        icon={<XCircle size={24} />}
        change={{ value: 3, type: 'decrease' }}
        color="red"
      />
      
      <StatCard 
        title="Upcoming" 
        value={upcomingAppointments}
        icon={<Clock size={24} />}
        color="yellow"
      />
    </div>
  );
};

export default ReminderStats;