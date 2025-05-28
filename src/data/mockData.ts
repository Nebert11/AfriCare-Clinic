import { Appointment, Patient, Doctor, AnalyticsData } from '../types';

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    dateOfBirth: '1985-06-15',
    preferredContact: 'sms'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '(555) 234-5678',
    dateOfBirth: '1990-03-22',
    preferredContact: 'whatsapp'
  },
  {
    id: '3',
    name: 'Robert Williams',
    email: 'rwilliams@example.com',
    phone: '(555) 345-6789',
    dateOfBirth: '1978-11-30',
    preferredContact: 'email'
  },
  {
    id: '4',
    name: 'Maria Garcia',
    email: 'mgarcia@example.com',
    phone: '(555) 456-7890',
    dateOfBirth: '1992-08-04',
    preferredContact: 'sms'
  },
  {
    id: '5',
    name: 'James Brown',
    email: 'jbrown@example.com',
    phone: '(555) 567-8901',
    dateOfBirth: '1965-12-17',
    preferredContact: 'email'
  }
];

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Emily Chen',
    specialty: 'Cardiology',
    email: 'dr.chen@example.com'
  },
  {
    id: '2',
    name: 'Dr. Michael Rodriguez',
    specialty: 'Pediatrics',
    email: 'dr.rodriguez@example.com'
  },
  {
    id: '3',
    name: 'Dr. Samantha Wilson',
    specialty: 'Dermatology',
    email: 'dr.wilson@example.com'
  }
];

// Create dates relative to the current date
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
const dayAfterTomorrow = new Date();
dayAfterTomorrow.setDate(today.getDate() + 2);
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const lastWeek = new Date();
lastWeek.setDate(today.getDate() - 7);

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '1',
    date: tomorrow.toISOString().split('T')[0],
    time: '09:00',
    purpose: 'Follow-up checkup',
    status: 'scheduled',
    reminderSent: true,
    notes: 'Check blood pressure'
  },
  {
    id: '2',
    patientId: '2',
    doctorId: '2',
    date: dayAfterTomorrow.toISOString().split('T')[0],
    time: '14:30',
    purpose: 'Annual examination',
    status: 'scheduled',
    reminderSent: false
  },
  {
    id: '3',
    patientId: '3',
    doctorId: '3',
    date: today.toISOString().split('T')[0],
    time: '11:15',
    purpose: 'Skin consultation',
    status: 'scheduled',
    reminderSent: true
  },
  {
    id: '4',
    patientId: '4',
    doctorId: '1',
    date: yesterday.toISOString().split('T')[0],
    time: '10:00',
    purpose: 'Heart examination',
    status: 'completed',
    reminderSent: true,
    notes: 'Prescribed medication'
  },
  {
    id: '5',
    patientId: '5',
    doctorId: '2',
    date: lastWeek.toISOString().split('T')[0],
    time: '15:45',
    purpose: 'Vaccination',
    status: 'missed',
    reminderSent: true,
    notes: 'Need to reschedule'
  }
];

export const mockAnalytics: AnalyticsData = {
  totalAppointments: 150,
  missedAppointments: 12,
  completedAppointments: 128,
  upcomingAppointments: 10
};