import React from 'react';
import ReminderStats from '../components/dashboard/ReminderStats';
import UpcomingAppointments from '../components/dashboard/UpcomingAppointments';
import MissedFollowups from '../components/dashboard/MissedFollowups';
import { mockAppointments, mockAnalytics } from '../data/mockData';
import { isUpcoming } from '../utils/dateUtils';

const Dashboard: React.FC = () => {
  // Filter appointments
  const upcomingAppointments = mockAppointments
    .filter(appointment => 
      appointment.status === 'scheduled' && isUpcoming(appointment.date)
    )
    .sort((a, b) => {
      // Sort by date, then by time
      if (a.date !== b.date) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return a.time.localeCompare(b.time);
    });
    
  return (
    <div className="p-6">
      <div className="mb-8">
        <ReminderStats analyticsData={mockAnalytics} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <UpcomingAppointments appointments={upcomingAppointments} />
        </div>
        
        <div>
          <MissedFollowups appointments={mockAppointments} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard