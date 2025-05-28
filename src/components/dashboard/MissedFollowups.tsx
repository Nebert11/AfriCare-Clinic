import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Appointment } from '../../types';
import { mockPatients } from '../../data/mockData';
import Button from '../common/Button';

interface MissedFollowupsProps {
  appointments: Appointment[];
}

const MissedFollowups: React.FC<MissedFollowupsProps> = ({ appointments }) => {
  const missedAppointments = appointments.filter(a => a.status === 'missed');
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center">
        <AlertCircle size={20} className="text-red-600 mr-2" />
        <h3 className="text-lg font-medium text-gray-800">Missed Follow-ups</h3>
      </div>
      
      <div className="divide-y divide-gray-100">
        {missedAppointments.length > 0 ? (
          missedAppointments.map(appointment => {
            const patient = mockPatients.find(p => p.id === appointment.patientId);
            
            return (
              <div key={appointment.id} className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{patient?.name}</p>
                  <p className="text-sm text-gray-600">{appointment.purpose}</p>
                  <p className="text-xs text-gray-500">Missed on {appointment.date}</p>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Call
                  </Button>
                  <Button variant="primary" size="sm">
                    Reschedule
                  </Button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-6 text-center text-gray-500">
            No missed follow-ups
          </div>
        )}
      </div>
    </div>
  );
};

export default MissedFollowups;