import React from 'react';
import { Bell, Mail, MessageSquare, Clock, Shield } from 'lucide-react';
import Card from '../components/common/Card';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import Button from '../components/common/Button';

const Settings: React.FC = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Notification Settings">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <Bell size={20} className="text-gray-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Default Reminder Time</h4>
                <p className="text-sm text-gray-500 mb-2">Set when reminders should be sent before appointments</p>
                <Select
                  options={[
                    { value: '24', label: '24 hours before' },
                    { value: '48', label: '48 hours before' },
                    { value: '72', label: '72 hours before' }
                  ]}
                />
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <Mail size={20} className="text-gray-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Email Templates</h4>
                <p className="text-sm text-gray-500 mb-2">Customize reminder email content</p>
                <textarea
                  className="w-full h-32 p-2 border rounded-md"
                  placeholder="Dear {patient_name}, this is a reminder for your appointment..."
                />
              </div>
            </div>
          </div>
        </Card>

        <Card title="Communication Channels">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <Mail size={20} className="text-blue-500 mr-3" />
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-gray-500">Send reminders via email</p>
                </div>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-12 h-6 bg-blue-600 rounded-full"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform translate-x-6"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <MessageSquare size={20} className="text-green-500 mr-3" />
                <div>
                  <h4 className="font-medium">SMS Notifications</h4>
                  <p className="text-sm text-gray-500">Send reminders via SMS</p>
                </div>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-12 h-6 bg-green-600 rounded-full"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform translate-x-6"></div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-6">
        <Card title="Account Settings">
          <div className="space-y-4">
            <Input
              label="Clinic Name"
              defaultValue="MediRemind Clinic"
            />
            <Input
              label="Email Address"
              defaultValue="ngarinebert2020@gmail.com"
            />
            <Input
              label="Phone Number"
              defaultValue="+1 (555) 123-4567"
            />
            <div className="flex justify-end">
              <Button variant="primary">Save Changes</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;