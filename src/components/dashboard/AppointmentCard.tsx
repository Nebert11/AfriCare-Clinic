import React from 'react';
import { Clock, MapPin, User } from 'lucide-react';
import Badge from '../common/Badge';
import { formatTime } from '../../utils/dateUtils';
import { Appointment } from '../../types';
import { mockPatients, mockDoctors } from '../../data/mockData';

interface AppointmentCardProps {
  appointment: Appointment;
  showPatient?: boolean;
  showDoctor?: boolean;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ 
  appointment, 
  showPatient = true,
  showDoctor = false
}) => {
  const patient = mockPatients.find(p => p.id === appointment.patientId);
  const doctor = mockDoctors.find(d => d.id === appointment.doctorId);
  
  const getStatusBadge = () => {
    switch (appointment.status) {
      case 'scheduled':
        return <Badge variant="info">Scheduled</Badge>;
      case 'completed':
        return <Badge variant="success">Completed</Badge>;
      case 'missed':
        return <Badge variant="danger">Missed</Badge>;
      case 'canceled':
        return <Badge variant="warning">Canceled</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-medium text-gray-900">
            {appointment.purpose}
          </h3>
          {showPatient && patient && (
            <div className="flex items-center mt-1 text-gray-600">
              <User size={16} className="mr-1" />
              <span>{patient.name}</span>
            </div>
          )}
          {showDoctor && doctor && (
            <div className="text-gray-600 mt-1">
              <span className="font-medium">{doctor.name}</span>
            </div>
          )}
        </div>
        <div>{getStatusBadge()}</div>
      </div>
      
      <div className="flex items-center text-gray-600 mt-2">
        <Clock size={16} className="mr-1" />
        <span>{formatTime(appointment.time)}</span>
      </div>
      
      {appointment.notes && (
        <div className="mt-3 text-sm text-gray-600 border-t border-gray-100 pt-2">
          {appointment.notes}
        </div>
      )}
      
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm">
          {appointment.reminderSent ? (
            <span className="text-green-600">Reminder sent</span>
          ) : (
            <span className="text-gray-500">Reminder pending</span>
          )}
        </div>
        
        {appointment.status === 'scheduled' && (
          <div className="flex space-x-2">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              Reschedule
            </button>
            <button className="text-sm text-red-600 hover:text-red-800">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;