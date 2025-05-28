import React, { useState } from 'react';
import { Calendar, Clock, User, Search } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import { mockAppointments, mockPatients, mockDoctors } from '../data/mockData';
import { formatTime } from '../utils/dateUtils';
import AppointmentCard from '../components/dashboard/AppointmentCard';

const Appointments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredAppointments = mockAppointments.filter(appointment => {
    const patient = mockPatients.find(p => p.id === appointment.patientId);
    const matchesSearch = patient?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.purpose.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Appointments</h2>
        <Button variant="primary" size="md">
          New Appointment
        </Button>
      </div>

      <Card className="mb-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search appointments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search size={18} />}
            />
          </div>
          <div className="w-48">
            <Select
              value={statusFilter}
              onChange={(value) => setStatusFilter(value)}
              options={[
                { value: 'all', label: 'All Status' },
                { value: 'scheduled', label: 'Scheduled' },
                { value: 'completed', label: 'Completed' },
                { value: 'missed', label: 'Missed' },
                { value: 'canceled', label: 'Canceled' }
              ]}
            />
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        {filteredAppointments.map(appointment => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            showPatient={true}
            showDoctor={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Appointments;