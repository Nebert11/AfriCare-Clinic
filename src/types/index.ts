export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  preferredContact: 'sms' | 'whatsapp' | 'email';
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  purpose: string;
  status: 'scheduled' | 'completed' | 'missed' | 'canceled';
  reminderSent: boolean;
  notes?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  email: string;
}

export interface Reminder {
  id: string;
  appointmentId: string;
  type: 'sms' | 'whatsapp' | 'email';
  scheduledTime: string;
  message: string;
  status: 'pending' | 'sent' | 'failed';
}

export interface AnalyticsData {
  totalAppointments: number;
  missedAppointments: number;
  completedAppointments: number;
  upcomingAppointments: number;
}