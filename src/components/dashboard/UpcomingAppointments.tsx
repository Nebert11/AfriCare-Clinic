import React from 'react';
import { Calendar } from 'lucide-react';
import { Appointment } from '../../types';
import AppointmentCard from './AppointmentCard';
import { getRelativeDateLabel } from '../../utils/dateUtils';

interface UpcomingAppointmentsProps {
  appointments: Appointment[];
}

const UpcomingAppointments: React.FC<UpcomingAppointmentsProps> = ({ appointments }) => {
  // Group appointments by date
  const groupedAppointments = appointments.reduce((acc, appointment) => {
    if (!acc[appointment.date]) {
      acc[appointment.date] = [];
    }
    acc[appointment.date].push(appointment);
    return acc;
  }, {} as Record<string, Appointment[]>);
  
  // Sort dates chronologically
  const sortedDates = Object.keys(groupedAppointments).sort();
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <Calendar size={20} className="text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-800">Upcoming Appointments</h3>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
      </div>
      
      <div className="divide-y divide-gray-100">
        {sortedDates.length > 0 ? (
          sortedDates.map(date => (
            <div key={date} className="p-4">
              <h4 className="text-sm font-medium text-gray-500 mb-3">
                {getRelativeDateLabel(date)}
              </h4>
              <div className="space-y-3">
                {groupedAppointments[date].map(appointment => (
                  <AppointmentCard 
                    key={appointment.id} 
                    appointment={appointment} 
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">
            No upcoming appointments
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingAppointments;