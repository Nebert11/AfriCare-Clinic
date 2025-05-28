import React from 'react';
import { Bell, CheckCircle, XCircle, Clock } from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { mockAppointments, mockPatients } from '../data/mockData';
import { formatTime } from '../utils/dateUtils';

const Reminders: React.FC = () => {
  const upcomingReminders = mockAppointments
    .filter(apt => apt.status === 'scheduled' && !apt.reminderSent)
    .map(apt => ({
      ...apt,
      patient: mockPatients.find(p => p.id === apt.patientId)
    }));

  const sentReminders = mockAppointments
    .filter(apt => apt.reminderSent)
    .map(apt => ({
      ...apt,
      patient: mockPatients.find(p => p.id === apt.patientId)
    }));

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Reminder Queue</h2>
        <div className="grid gap-4">
          {upcomingReminders.map(reminder => (
            <Card key={reminder.id}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <Clock size={16} className="text-blue-500 mr-2" />
                    <span className="font-medium">{reminder.patient?.name}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{reminder.purpose}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Scheduled for {reminder.date} at {formatTime(reminder.time)}
                  </p>
                </div>
                <Button variant="primary" size="sm">Send Reminder</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sent Reminders</h2>
        <div className="grid gap-4">
          {sentReminders.map(reminder => (
            <Card key={reminder.id}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="font-medium">{reminder.patient?.name}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{reminder.purpose}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Appointment: {reminder.date} at {formatTime(reminder.time)}
                  </p>
                </div>
                <Badge variant="success">Sent</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reminders;