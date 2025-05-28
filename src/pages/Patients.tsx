import React from 'react';
import { User, Phone, Mail } from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { mockPatients } from '../data/mockData';

const Patients: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Patient List</h2>
        <Button variant="primary" size="md">
          Add New Patient
        </Button>
      </div>

      <div className="grid gap-4">
        {mockPatients.map((patient) => (
          <Card key={patient.id} className="hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{patient.name}</h3>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center text-gray-600">
                    <Mail size={16} className="mr-2" />
                    {patient.email}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone size={16} className="mr-2" />
                    {patient.phone}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <User size={16} className="mr-2" />
                    Born: {patient.dateOfBirth}
                  </div>
                </div>
              </div>
              <Badge variant="info" className="capitalize">
                {patient.preferredContact}
              </Badge>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" size="sm">View History</Button>
              <Button variant="primary" size="sm">Schedule Appointment</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Patients;