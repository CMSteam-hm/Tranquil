
export enum FormType {
  INTAKE = 'INTAKE',
  BOOKING = 'BOOKING',
  CONTACT = 'CONTACT',
  SCREENING = 'SCREENING',
  FEEDBACK = 'FEEDBACK'
}

export interface Submission {
  id: string;
  type: FormType;
  data: any;
  timestamp: string;
  status: 'pending' | 'reviewed' | 'archived';
  notificationSent?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export interface AnalyticsData {
  visits: number;
  formSubmissions: number;
  averageRating: number;
  bookings: number;
}
