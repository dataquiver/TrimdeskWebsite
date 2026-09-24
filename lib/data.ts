import {
  CalendarCheck, Users, ReceiptText, BarChart3, UserRound, Star,
  Target, MessageSquareMore, type LucideIcon,
} from 'lucide-react';

export interface Feature {
  slug: string;
  name: string;
  icon: LucideIcon;
  iconImage: string;   // path to PNG icon from BrandingCreativess/Icons
  featureImage: string; // path to character webp from BrandingCreativess/Character_pics
  chip: string;      // tailwind bg for the icon chip
  chipText: string;  // tailwind text color for the icon
  short: string;
  long: string;
  bullets: string[];
}

export const features: Feature[] = [
  {
    slug: 'appointments',
    name: 'Appointment Booking',
    icon: CalendarCheck,
    iconImage: '/icons/appointments.png',
    featureImage: '/images/feat-appointments.webp',
    chip: 'bg-blue-100', chipText: 'text-blue-600',
    short: 'Schedule and manage all appointments with an easy-to-use calendar interface',
    long: 'Say goodbye to double bookings and paper diaries. QuiverDesk gives you a live calendar of every appointment across your business — bookable in seconds, visible to every staff member, and kept up to date automatically. Customers get confirmations and reminders without you lifting a finger.',
    bullets: [
      'Online appointment scheduling in seconds',
      'Calendar and day views for owners and staff',
      'Automated slot management — no double bookings',
      'Reschedule or cancel with automatic notifications',
      'Handles walk-ins and pre-booked visits together',
    ],
  },
  {
    slug: 'staff',
    name: 'Staff Management',
    icon: Users,
    iconImage: '/icons/staff.png',
    featureImage: '/images/feat-staff.webp',
    chip: 'bg-purple-100', chipText: 'text-purple-600',
    short: 'Add staff, assign roles, track performance and manage schedules effortlessly',
    long: 'Your team is your business. Add every staff member in minutes, give each person the right level of access, and see exactly who is delivering — from appointments handled to revenue generated. Working hours and schedules stay organised in one place.',
    bullets: [
      'Add and manage unlimited team members',
      'Roles for managers, staff and receptionists',
      'Staff-wise appointment and revenue reports',
      'Working hours configuration per staff member',
      'Each staff member sees their own daily schedule',
    ],
  },
  {
    slug: 'billing',
    name: 'Billing & Invoicing',
    icon: ReceiptText,
    iconImage: '/icons/billing.png',
    featureImage: '/images/feat-billing.webp',
    chip: 'bg-green-100', chipText: 'text-green-600',
    short: 'Create professional invoices, accept payments and track revenue in real-time',
    long: 'Turn completed work into professional invoices instantly. Record payments by cash, UPI or card, track what is paid, pending or partial, and keep a complete billing history for every customer. GST-ready tax configuration built in.',
    bullets: [
      'Professional invoices created instantly',
      'Cash, UPI and card payment recording',
      'Paid / pending / partial payment tracking',
      'Complete invoice history per customer',
      'GST-ready tax configuration',
    ],
  },
  {
    slug: 'analytics',
    name: 'Business Analytics',
    icon: BarChart3,
    iconImage: '/icons/analytics.png',
    featureImage: '/images/feat-analytics.webp',
    chip: 'bg-indigo-100', chipText: 'text-indigo-600',
    short: 'Get deep insights into your business with real-time dashboards and reports',
    long: 'Know your numbers without spreadsheets. The live dashboard shows revenue, appointments and customer activity the moment they happen, while reports reveal trends across days, weeks and months — so every decision is backed by real data.',
    bullets: [
      'Real-time business dashboard',
      'Daily, weekly and monthly revenue tracking',
      'Appointment statistics at a glance',
      'Staff performance reports',
      'Customer visit analytics and growth insights',
    ],
  },
  {
    slug: 'customers',
    name: 'Customer Management',
    icon: UserRound,
    iconImage: '/icons/customers.png',
    featureImage: '/images/feat-customers.webp',
    chip: 'bg-teal-100', chipText: 'text-teal-600',
    short: 'Build customer profiles, track visits and identify your most loyal customers',
    long: 'Every customer gets a complete profile — visit history, preferences, notes, birthdays and more. Spot your regulars, win back customers who have lapsed, and give everyone the personal touch that keeps them coming back.',
    bullets: [
      'Complete customer profiles with visit history',
      'Notes and preferences per customer',
      'Birthday and anniversary tracking',
      'Lapsed customer identification',
      'Loyalty and repeat-customer tracking',
    ],
  },
  {
    slug: 'feedback',
    name: 'Customer Feedback',
    icon: Star,
    iconImage: '/icons/feedback.png',
    featureImage: '/images/feat-feedback.webp',
    chip: 'bg-amber-100', chipText: 'text-amber-600',
    short: 'Collect ratings, monitor quality and build your business reputation automatically',
    long: 'Feedback is how good businesses become great ones. Collect ratings and reviews after every visit, watch service quality trends over time, celebrate your top-rated staff and act on complaints before they cost you customers.',
    bullets: [
      'Customer ratings and reviews after visits',
      'Service quality tracked over time',
      'Identify top-rated staff members',
      'Act on complaints quickly',
      'Build a reputation that brings referrals',
    ],
  },
  {
    slug: 'crm',
    name: 'CRM & Lead Management',
    icon: Target,
    iconImage: '/icons/crm.png',
    featureImage: '/images/feat-crm.webp',
    chip: 'bg-pink-100', chipText: 'text-pink-600',
    short: 'Track leads, follow up on time and convert more enquiries into paying customers',
    long: 'Enquiries are revenue waiting to happen. Capture every lead, schedule follow-up reminders so nothing slips through, and see the full communication history for each contact. Segment customers by visit frequency to focus your attention where it matters.',
    bullets: [
      'Lead tracking and management',
      'Convert leads into customers',
      'Follow-up reminders that keep you on time',
      'Customer communication history',
      'Segment customers by visit frequency',
    ],
  },
  {
    slug: 'notifications',
    name: 'Smart Notifications',
    icon: MessageSquareMore,
    iconImage: '/icons/notifications.png',
    featureImage: '/images/feat-notifications.webp',
    chip: 'bg-orange-100', chipText: 'text-orange-600',
    short: 'Send WhatsApp reminders, SMS and email confirmations to customers automatically',
    long: 'No-shows shrink dramatically when customers are reminded the right way. QuiverDesk sends WhatsApp reminders, SMS and email confirmations automatically — 24 hours and 1 hour before each appointment — plus invoices and even birthday greetings.',
    bullets: [
      'WhatsApp appointment reminders',
      'SMS and email confirmations',
      'Reminders 24 hours and 1 hour before visits',
      'Invoices delivered via WhatsApp or email',
      'Automatic birthday greetings to customers',
    ],
  },
];

export interface Industry {
  slug: string;
  name: string;
  emoji: string;
  color: string;
  types: string[];
  keyFeatures: string[];
}

export const industries: Industry[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    emoji: '🏥',
    color: 'bg-blue-50',
    types: ['Clinics', 'Dental Clinics', 'Eye Clinics', 'Skin Clinics', 'Hospitals', 'Veterinary', 'Physiotherapy', 'Diagnostic Centers'],
    keyFeatures: [
      'Patient appointment scheduling with automated reminders',
      'Visit history and treatment notes per patient',
      'GST-ready billing with payment tracking',
    ],
  },
  {
    slug: 'beauty-wellness',
    name: 'Beauty & Wellness',
    emoji: '✂️',
    color: 'bg-pink-50',
    types: ['Salons', 'Barbershops', 'Spas', 'Nail Studios', 'Tattoo Studios', 'Makeup Studios', 'Beauty Parlours', 'Massage Centers'],
    keyFeatures: [
      'Stylist-wise bookings and daily schedules',
      'WhatsApp reminders that cut no-shows',
      'Repeat-customer and loyalty tracking',
    ],
  },
  {
    slug: 'fitness',
    name: 'Fitness',
    emoji: '🏋️',
    color: 'bg-green-50',
    types: ['Gyms', 'Yoga Centers', 'CrossFit', 'Dance Studios', 'Personal Training Studios'],
    keyFeatures: [
      'Session and class scheduling for trainers',
      'Member profiles with attendance history',
      'Trainer performance reports',
    ],
  },
  {
    slug: 'education',
    name: 'Education',
    emoji: '🎓',
    color: 'bg-indigo-50',
    types: ['Coaching Centers', 'Tutoring', 'Music Schools', 'Driving Schools', 'Language Institutes'],
    keyFeatures: [
      'Batch and session scheduling',
      'Student records with fee tracking',
      'Automated class reminders to students',
    ],
  },
  {
    slug: 'legal-financial',
    name: 'Legal & Financial',
    emoji: '⚖️',
    color: 'bg-amber-50',
    types: ['Law Firms', 'CA Firms', 'Tax Consultancy', 'Accounting Firms'],
    keyFeatures: [
      'Client consultation scheduling',
      'Professional invoicing with GST',
      'Client communication history in one place',
    ],
  },
  {
    slug: 'creative',
    name: 'Photography & Creative',
    emoji: '📷',
    color: 'bg-purple-50',
    types: ['Photography Studios', 'Design Studios', 'Event Planning'],
    keyFeatures: [
      'Shoot and session bookings with reminders',
      'Lead tracking for enquiries',
      'Advance and balance payment tracking',
    ],
  },
  {
    slug: 'repair',
    name: 'Automotive & Repair',
    emoji: '🔧',
    color: 'bg-slate-100',
    types: ['Repair Shops', 'Auto Services', 'Electronics Repair'],
    keyFeatures: [
      'Job bookings with status tracking',
      'Customer vehicle / device history',
      'Instant invoices on completion',
    ],
  },
  {
    slug: 'other',
    name: 'Other Services',
    emoji: '💼',
    color: 'bg-teal-50',
    types: ['Consulting Firms', 'Wellness Centers', 'Any appointment-based business'],
    keyFeatures: [
      'Flexible services and duration setup',
      'Works for any appointment-led business',
      'Simple enough for non-tech teams',
    ],
  },
];

/** Business types per industry for the register wizard; codes match the backend BusinessCategory. */
export const businessTypesByIndustry: Record<string, { label: string; code: string }[]> = {
  healthcare: [
    { label: 'Clinic', code: 'CLINIC' },
    { label: 'Dental Clinic', code: 'DENTAL' },
    { label: 'Eye Clinic', code: 'CLINIC' },
    { label: 'Skin Clinic', code: 'CLINIC' },
    { label: 'Physiotherapy', code: 'CLINIC' },
    { label: 'Veterinary', code: 'CLINIC' },
    { label: 'Diagnostic Center', code: 'CLINIC' },
  ],
  'beauty-wellness': [
    { label: 'Salon', code: 'SALON' },
    { label: 'Barbershop', code: 'BARBERSHOP' },
    { label: 'Spa', code: 'SPA' },
    { label: 'Nail Studio', code: 'NAIL' },
    { label: 'Beauty Parlour', code: 'BEAUTY' },
    { label: 'Makeup Studio', code: 'BEAUTY' },
    { label: 'Massage Center', code: 'SPA' },
  ],
  fitness: [
    { label: 'Gym', code: 'GYM' },
    { label: 'Yoga Center', code: 'WELLNESS' },
    { label: 'CrossFit', code: 'GYM' },
    { label: 'Dance Studio', code: 'GYM' },
    { label: 'Personal Training Studio', code: 'GYM' },
  ],
  education: [
    { label: 'Coaching Center', code: 'OTHER' },
    { label: 'Tutoring', code: 'OTHER' },
    { label: 'Music School', code: 'OTHER' },
    { label: 'Driving School', code: 'OTHER' },
    { label: 'Language Institute', code: 'OTHER' },
  ],
  'legal-financial': [
    { label: 'Law Firm', code: 'OTHER' },
    { label: 'CA Firm', code: 'OTHER' },
    { label: 'Tax Consultancy', code: 'OTHER' },
    { label: 'Accounting Firm', code: 'OTHER' },
  ],
  other: [
    { label: 'Photography Studio', code: 'OTHER' },
    { label: 'Repair Shop', code: 'OTHER' },
    { label: 'Consulting Firm', code: 'OTHER' },
    { label: 'Event Planning', code: 'OTHER' },
    { label: 'Other', code: 'OTHER' },
  ],
};

export const testimonials = [
  {
    quote: 'QuiverDesk completely transformed how we manage our clinic. Appointment booking is so smooth now and our staff loves the simple interface.',
    name: 'Dr. Priya Sharma',
    role: 'Founder, Smile Dental Clinic, Bangalore',
  },
  {
    quote: 'We used to maintain registers for everything. Now billing, appointments and customer records are all in one place. Saved us 2 hours every day.',
    name: 'Anand Kumar',
    role: 'Owner, Glamour Salon & Spa, Chennai',
  },
  {
    quote: 'The WhatsApp reminder feature alone reduced our no-shows by 60%. Our customers love getting reminders automatically.',
    name: 'Meera Nair',
    role: 'Director, FitLife Gym, Hyderabad',
  },
];
