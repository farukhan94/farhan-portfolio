
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'sawag',
    title: 'Sawag Logistics Ecosystem',
    description: 'A high-throughput logistics platform processing 10k+ concurrent driver GPS coordinates.',
    fullDescription: 'Sawag is a comprehensive logistics ecosystem designed for real-time dispatching and fleet management. The core challenge was handling high-frequency GPS pings without degrading database performance.',
    features: [
      'Real-time WebSocket integration for driver positioning',
      'Advanced geofencing for automated dispatching logic',
      'Distributed caching layer using Redis for driver state',
      'Scalable microservices architecture processing 10M+ monthly events'
    ],
    tags: ['Laravel', 'Redis', 'WebSockets', 'AWS'],
    imageUrl: '',
    link: '#',
    github: 'https://github.com/faru947'
  },
  {
    id: 'health-iot',
    title: 'WearOS Health Engine',
    description: 'Cloud-synced health monitoring system utilizing Samsung Health SDK and low-energy IoT protocols.',
    fullDescription: 'A wearable health engine that monitors vital signs and synchronizes with a cloud backend. Optimized specifically for battery longevity on WearOS devices while maintaining 99.9% data integrity.',
    features: [
      'Direct integration with Samsung Health SDK',
      'Custom delta-sync protocol reducing battery drain by 30%',
      'Encrypted health data storage and HIPAA compliant transmission',
      'Real-time emergency alert system via FCM'
    ],
    tags: ['WearOS', 'Flutter', 'Spring Boot', 'FCM'],
    imageUrl: '',
    link: '#',
    github: 'https://github.com/faru947'
  },
  {
    id: 'fin-ledger',
    title: 'Distributed Financial Ledger',
    description: 'Immutable transaction ledger system with strict idempotency and audit trailing.',
    fullDescription: 'Designed for financial accuracy, this project implements a double-entry ledger system that ensures transaction finality and auditability across distributed nodes.',
    features: [
      'Strict API Idempotency controls',
      'Event sourcing architecture for full audit history',
      'PostgreSQL optimized for high-volume write operations',
      'OAuth2 & JWT based security protocols'
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    imageUrl: '',
    link: '#',
    github: 'https://github.com/faru947'
  },
  {
    id: 'auto-ops',
    title: 'Ops-Automation Suite',
    description: 'Python and C++ based automation layer for internal enterprise resource planning.',
    fullDescription: 'An internal toolset designed to eliminate manual data entry bottlenecks in procurement and inventory management workflows.',
    features: [
      'High-performance C++ macros for legacy software interaction',
      'Python-based data parsing and transformation (Pandas)',
      'Automated reporting and alerting via Slack/Discord',
      'Cross-platform compatibility (Windows/Linux)'
    ],
    tags: ['Python', 'C++', 'Automation', 'Pandas'],
    imageUrl: '',
    link: '#',
    github: 'https://github.com/faru947'
  },
  {
    id: 'cloud-orchestrator',
    title: 'Multi-Cloud Orchestrator',
    description: 'Infrastructure-as-Code (IaC) templates for automated deployment of resilient microservices.',
    fullDescription: 'A collection of Terraform and CloudFormation modules that facilitate the deployment of auto-scaling, fault-tolerant applications on AWS.',
    features: [
      'Zero-downtime deployment strategies (Blue/Green)',
      'Automated VPC and Subnet configuration',
      'Serverless computing integration with AWS Lambda',
      'CI/CD pipeline automation via GitHub Actions'
    ],
    tags: ['Terraform', 'AWS', 'Docker', 'Actions'],
    imageUrl: '',
    link: '#',
    github: 'https://github.com/faru947'
  },
  {
    id: 'analytics-hub',
    title: 'Real-time Analytics Hub',
    description: 'Data ingestion pipeline for processing high-velocity user activity streams.',
    fullDescription: 'A data pipeline focused on gathering and visualizing real-time user behavior to drive business intelligence decisions.',
    features: [
      'Stream processing using RabbitMQ and Go consumers',
      'Visual dashboards built with Angular and D3.js',
      'Time-series data storage optimization',
      'Automated anomaly detection algorithms'
    ],
    tags: ['Go', 'Angular', 'RabbitMQ', 'PostgreSQL'],
    imageUrl: '',
    link: '#',
    github: 'https://github.com/faru947'
  }
];

export const SKILL_GROUPS = [
  {
    category: 'Frontend',
    icon: 'fa-code',
    skills: ['Angular (12-17)', 'Flutter', 'TypeScript', 'Ionic', 'Redux/NgRx', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    icon: 'fa-server',
    skills: ['Laravel (PHP 8+)', 'Spring Boot (Java)', 'Node.js (NestJS)', 'Python (Pandas)', 'Go']
  },
  {
    category: 'Architecture & DevOps',
    icon: 'fa-layer-group',
    skills: ['Microservices', 'Saga Pattern', 'Event-Driven (RabbitMQ)', 'AWS (ECS/ECR/RDS)', 'Docker', 'Terraform']
  },
  {
    category: 'Database & Security',
    icon: 'fa-shield-halved',
    skills: ['PostgreSQL', 'MySQL', 'Redis (Distributed Caching)', 'Firebase', 'OAuth2', 'JWT']
  }
];

// Helper function to normalize skill names (remove version numbers, parentheses, etc.)
const normalizeSkillName = (skill: string): string => {
  return skill
    .replace(/\s*\([^)]*\)/g, '') // Remove parentheses and content
    .replace(/\s*\/.*/g, '') // Remove after slash
    .trim();
};

// Extract all skills from SKILL_GROUPS, normalize them, and extract technologies from parentheses
const getAllSkillsFromGroups = (): string[] => {
  const allSkills = SKILL_GROUPS.flatMap(group => group.skills);
  const normalized = allSkills.map(normalizeSkillName);
  
  // Extract technologies from parentheses (e.g., "Event-Driven (RabbitMQ)" -> "RabbitMQ")
  const extracted: string[] = [];
  allSkills.forEach(skill => {
    const match = skill.match(/\(([^)]+)\)/);
    if (match) {
      extracted.push(match[1]);
    }
  });
  
  // Combine normalized skills with extracted technologies, remove duplicates
  const combined = [...normalized, ...extracted];
  return Array.from(new Set(combined)).filter(Boolean);
};

// Technologies to show in hero marquee (concrete technologies, excluding generic concepts)
const HERO_TECH_PRIORITY = [
  'Angular', 'Laravel', 'Spring Boot', 'AWS', 'Flutter', 'PostgreSQL', 
  'Docker', 'Redis', 'TypeScript', 'Node.js', 'Terraform', 'RabbitMQ'
];

// Derive TECH_STACK from SKILL_GROUPS - filtered to show main technologies in hero
export const TECH_STACK = getAllSkillsFromGroups()
  .filter(tech => HERO_TECH_PRIORITY.includes(tech))
  .sort((a, b) => HERO_TECH_PRIORITY.indexOf(a) - HERO_TECH_PRIORITY.indexOf(b));


export const EXPERIENCES: Experience[] = [
  {
    company: 'Ahlan Technologies W.L.L',
    role: 'IT Supervisor / Lead Developer',
    period: '2023 - Present',
    description: [
      'Directing the technical roadmap for a marketplace platform serving 250K+ active users.',
      'Orchestrated the migration of mission-critical legacy services to Spring Boot microservices.',
      'Optimized backend services to handle 10M+ daily requests with sub-200ms latency via Redis caching.',
      'Engineered robust API Idempotency and Rate Limiting mechanisms for financial transactions.',
      'Spearheaded transition to AWS ECS/ECR with GitHub Actions, reducing infrastructure overhead by 30%.'
    ]
  },
  {
    company: 'Ahlan Technologies W.L.L',
    role: 'Software Engineer / Programmer',
    period: '2021 - 2023',
    description: [
      'Designed core dispatch engine using custom Geofencing logic (Google Distance Matrix API).',
      'Implemented Saga Pattern (Orchestration) using RabbitMQ for distributed transactions.',
      'Built operational dashboards using Angular and Firebase for live GPS tracking.',
      'Led migration from legacy Android Native (Java) to Flutter, reducing overhead by 40%.',
      'Managed AWS security configurations including IAM, VPC subnets, and Security Groups.'
    ]
  },
  {
    company: 'Telp',
    role: 'Junior Frontend Developer',
    period: '2019 - 2021',
    description: [
      'Developed a scalable UI component library using Angular and Ionic.',
      'Integrated third-party booking APIs (Calendly) and payment processors.',
      'Implemented real-time error tracking using Sentry, reducing critical crashes by 50%.'
    ]
  }
];

export const BIO_CONTEXT = `
You are the AI Assistant for Mohammad Farhan Khan, a Senior Full Stack Engineer based in Muharraq, Bahrain.
Farhan has 6+ years of professional experience, specialized in high-availability distributed systems processing 10M+ daily API requests.
Key Expertise:
- Frontend: Angular (12-17), Flutter, TypeScript.
- Backend: Laravel, Spring Boot (Hexagonal Architecture), NestJS.
- DevOps: AWS (ECS, ECR, RDS, Lambda), Docker, GitHub Actions, Terraform.
Education: B.Sc. in Computer Science from University of Bahrain.
Known for leading monolith-to-microservices migrations and optimizing cloud-native environments.
Contact: faru947@gmail.com | +973 340 480 36.
`;

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_cii48i9',      // Replace with your EmailJS Service ID
  TEMPLATE_ID: 'template_z87k7i2',    // Replace with your EmailJS Template ID
  PUBLIC_KEY: '_Iwtlzv-mk17g2YNO'       // Replace with your EmailJS Public Key
};

// reCAPTCHA v3 Configuration
// Get your site key from: https://www.google.com/recaptcha/admin
export const RECAPTCHA_CONFIG = {
  SITE_KEY: '6LdbCUgsAAAAAPqQ5Coa5doz0PJbzVcbjVJX3BeU'  // Replace with your reCAPTCHA v3 Site Key
};
