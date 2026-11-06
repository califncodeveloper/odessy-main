import { ParallaxProject, Testimonial } from '../types';

export const PROJECTS: ParallaxProject[] = [
  {
    id: 'project-1',
    title: 'The Luminary Penthouse Executive Suite',
    subtitle: 'Private Family Office & Sanctum',
    client: 'Vanguard Capital',
    location: 'Chennai, Tamil Nadu',
    year: '2026',
    image: '/images/grand_standing_desk.jpg',
    description: '2,400 sq.ft executive fitout featuring bespoke solid American Walnut motorized standing desks, Sovereign Tuscan leather seating, and soundproof private phone booths.',
    tags: ['Custom Motorized Desks', 'Executive Leather', 'Acoustic Pods'],
    highlightMetric: '98% Acoustic Attenuation • Zero Fatigue',
    productsUsed: ['Grand Dual-Motor Desk', 'Sovereign Executive Chair', 'Silentium Solo Pod']
  },
  {
    id: 'project-2',
    title: 'Aura AI Engineering Labs',
    subtitle: 'High-Density Deep Learning Research',
    client: 'Aura AI Labs',
    location: 'Silicon Oasis Tech Park',
    year: '2026',
    image: '/images/nexus_collaboration_pod.jpg',
    description: 'Fitout of 180 Odessy Apex Grand seating suites and dual-arm heavy-duty screen mounts tailored for 14-hour deep development sprints.',
    tags: ['180 Apex Chairs', 'Dual Monitor Arms', '140W GaN Hubs'],
    highlightMetric: '+42% Sustained Focus Cadence',
    productsUsed: ['Apex Grand Chair', 'Precision Dual Arm', 'Stealth GaN Hub']
  },
  {
    id: 'project-3',
    title: 'Kavita & Associates Architecture Studio',
    subtitle: 'Biophilic Minimalist CAD Atelier',
    client: 'Kavita Architects',
    location: 'Anna Nagar, Chennai',
    year: '2025',
    image: '/images/horizon_curved_desk.jpg',
    description: 'Custom curved white oak desks with solid brass MagTower phone docks and asymmetric glare-free Lumina screenbars for CAD precision.',
    tags: ['Horizon Curved Desks', 'Lumina ScreenBars', 'Brass Phone Rests'],
    highlightMetric: 'BIFMA Gold Certified Workspace',
    productsUsed: ['Horizon Curved Desk', 'Lumina ScreenBar', 'Apex Brass Rest']
  },
  {
    id: 'project-4',
    title: 'Nexus Venture Boardroom & Pod Sanctum',
    subtitle: 'Confidential Executive Negotiation Suite',
    client: 'Nexus Global Ventures',
    location: 'Financial District',
    year: '2026',
    image: '/images/silentium_acoustic_pod.jpg',
    description: '4-person Nexus Collaboration Pod paired with Sovereign seating for confidential global hybrid video negotiations with STC 34dB speech security.',
    tags: ['Nexus 4-Person Pod', 'Sovereign Leather Chairs', 'GaN Matrix Hubs'],
    highlightMetric: 'STC 34dB Certified Speech Isolation',
    productsUsed: ['Nexus 4-Person Pod', 'Sovereign Executive Chair']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Vikramaditya Sen',
    role: 'Chief Spine Surgeon & Orthopedic Consultant',
    company: 'Manipal Health',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80',
    quote: 'In 22 years of surgery practice, Odessy Apex is the only chair I prescribe that actively decompresses the L4-L5 lumbar matrix rather than forcing rigid posture.',
    rating: 5,
    productExperience: 'Odessy Apex Grand Chair',
    location: 'Chennai'
  },
  {
    id: 'test-2',
    name: 'Ananya Deshmukh',
    role: 'Principal Partner & Architect',
    company: 'Studio Form & Light',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    quote: 'The solid American Walnut standing desks are museum grade. Motors adjust so smoothly and silently that clients never notice height shifts during design reviews.',
    rating: 5,
    productExperience: 'Grand Dual-Motor Desk & Lumina Light',
    location: 'Chennai'
  },
  {
    id: 'test-3',
    name: 'Rajesh Menon',
    role: 'Managing Director & Angel Investor',
    company: 'Aether Capital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'The Sovereign leather chair and Butterfly Mesh chair transformed our executive floor. Unmatched comfort, and same-day delivery in Chennai.',
    rating: 5,
    productExperience: 'Sovereign Leather & Butterfly Mesh',
    location: 'Chennai'
  },
  {
    id: 'test-4',
    name: 'Elena Rostova',
    role: 'VP of Product Design',
    company: 'Fintech NeoBank',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    quote: 'Between the MagSafe stands and Marvel Mesh chair, my workspace is complete. Working 12 hours feels effortless.',
    rating: 5,
    productExperience: 'Marvel Mesh Chair',
    location: 'Chennai'
  }
];

export const TRUST_METRICS = [
  { label: 'Workspaces Transformed', value: '15,000+' },
  { label: 'Comprehensive Warranty', value: '10 Years' },
  { label: 'Posture Relief Rating', value: '99.4%' },
  { label: 'BIFMA & ANSI Certified', value: '100%' }
];
