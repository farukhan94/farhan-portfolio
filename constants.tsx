
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'sawag',
    title: 'Sawag Logistics Ecosystem',
    description: 'Engineered a high-throughput logistics platform capable of processing 10k+ concurrent driver GPS coordinates in real-time. This ecosystem leverages an event-driven architecture to maintain sub-nanosecond latency in tracking, ensuring 99.9% uptime for critical delivery operations.',
    fullDescription: 'Sawag is a comprehensive logistics ecosystem designed for real-time dispatching and fleet management. The core challenge was eliminating bottlenecks in processing high-velocity GPS telemetry data while maintaining live dashboard updates.',
    features: [
      'Problem: Eliminating bottlenecks in processing high-velocity GPS telemetry data while maintaining live dashboard updates',
      'Architecture: Implemented a Redis-backed WebSocket layer to handle stateful connections without overloading the relational database',
      'Tech Stack: Laravel, Redis, WebSockets, and AWS Auto-scaling groups',
      'Impact: Achieved a 40% reduction in server-side overhead and supported a fleet expansion of 300% without performance degradation'
    ],
    tags: ['Laravel', 'Redis', 'WebSockets', 'AWS'],
    imageUrl: '',
    link: '#',
    github: 'https://github.com/faru947',
    seoKeywords: [
      'Real-time logistics tracking with Laravel and Redis',
      'High-throughput GPS telemetry processing',
      'Event-driven logistics architecture',
      'Scalable WebSocket implementation for delivery fleets'
    ]
  },
  {
    id: 'health-iot',
    title: 'WearOS Health Engine',
    description: 'Developed an end-to-end cloud-synced health monitoring system that integrates Samsung Health SDK with a robust Spring Boot backend. The engine ensures seamless data consistency across WearOS devices and mobile applications, handling millions of health metrics daily via Firebase Cloud Messaging (FCM).',
    fullDescription: 'A wearable health engine that monitors vital signs and synchronizes with a cloud backend. The core challenge was synchronizing intermittent health data from wearable sensors with high reliability and low battery drain.',
    features: [
      'Problem: Synchronizing intermittent health data from wearable sensors with high reliability and low battery drain',
      'Architecture: Utilized an asynchronous polling strategy with Flutter and FCM to batch data uploads and preserve device longevity',
      'Tech Stack: Flutter, Spring Boot, Samsung Health SDK, FCM, and PostgreSQL',
      'Impact: Sustained 99.99% data integrity across 500k+ active sync events'
    ],
    tags: ['WearOS', 'Flutter', 'Spring Boot', 'FCM'],
    imageUrl: '',
    link: '#',
    github: 'https://github.com/faru947',
    seoKeywords: [
      'WearOS health data synchronization',
      'Flutter and Spring Boot health app development',
      'Wearable sensor integration with Samsung Health SDK',
      'Cloud-native health monitoring systems'
    ]
  },
  {
    id: 'fin-ledger',
    title: 'Distributed Financial Ledger',
    description: 'Architected an immutable transaction ledger designed for mission-critical financial operations, enforcing strict idempotency and comprehensive audit trails. The system provides a "single source of truth" for high-volume transactions, ensuring zero data loss during peak loads.',
    fullDescription: 'Designed for financial accuracy, this project implements a double-entry ledger system that ensures transaction finality and auditability across distributed nodes. The core challenge was preventing duplicate transactions and ensuring absolute consistency in a distributed financial environment.',
    features: [
      'Problem: Preventing duplicate transactions and ensuring absolute consistency in a distributed financial environment',
      'Architecture: Leveraged PostgreSQL\'s ACID compliance coupled with Java Spring Boot\'s transactional management to ensure atomic operations',
      'Tech Stack: Java, Spring Boot, PostgreSQL, Docker, and RESTful APIs',
      'Impact: Successfully processed $1M+ in daily transaction volume with zero reconciliation errors'
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    imageUrl: '',
    link: '#',
    github: 'https://github.com/faru947',
    seoKeywords: [
      'Immutable financial ledger architecture',
      'Java Spring Boot fintech development',
      'Idempotent distributed transaction management',
      'Financial audit trail implementation in Java'
    ]
  },
  {
    id: 'auto-ops',
    title: 'Ops-Automation Suite',
    description: 'Built a high-performance automation layer for complex ERP systems using Python and C++ to streamline data processing and resource allocation. By implementing custom Pandas pipelines, the suite reduced manual operational tasks by over 70%.',
    fullDescription: 'An internal toolset designed to eliminate manual data entry bottlenecks in procurement and inventory management workflows. The core challenge was manual data entry and reconciliation between disparate ERP modules causing significant operational delays.',
    features: [
      'Problem: Manual data entry and reconciliation between disparate ERP modules causing significant operational delays',
      'Architecture: Used C++ for performance-critical calculation engines and Python for high-level data manipulation and API orchestration',
      'Tech Stack: Python, C++, Pandas, and RESTful ERP connectors',
      'Impact: Saved 100+ man-hours per week through automated reporting and reconciliation'
    ],
    tags: ['Python', 'C++', 'Automation', 'Pandas'],
    imageUrl: '',
    link: '#',
    github: 'https://github.com/faru947',
    seoKeywords: [
      'Python and C++ ERP automation',
      'Pandas data processing pipelines',
      'Automated resource allocation systems',
      'Enterprise operations automation suite'
    ]
  },
  {
    id: 'cloud-orchestrator',
    title: 'Multi-Cloud Orchestrator',
    description: 'Designed a resilient CI/CD and infrastructure orchestration layer that automates the deployment of microservices across multiple AWS regions. This setup ensures rapid recovery and consistent environment parity through strictly managed Infrastructure-as-Code (IaC).',
    fullDescription: 'A collection of Terraform and CloudFormation modules that facilitate the deployment of auto-scaling, fault-tolerant applications on AWS. The core challenge was managing environment drift and reducing deployment downtime across a complex multi-region microservices architecture.',
    features: [
      'Problem: Managing environment drift and reducing deployment downtime across a complex multi-region microservices architecture',
      'Architecture: Adopted Terraform for declarative infrastructure management and GitHub Actions for automated, containerized build-to-deploy pipelines',
      'Tech Stack: Terraform, AWS (EC2, EKS, RDS), Docker, and GitHub Actions',
      'Impact: Reduced deployment time from hours to 8 minutes while maintaining 100% environment consistency'
    ],
    tags: ['Terraform', 'AWS', 'Docker', 'Actions'],
    imageUrl: '',
    link: '#',
    github: 'https://github.com/faru947',
    seoKeywords: [
      'Terraform multi-cloud infrastructure orchestration',
      'AWS microservices deployment automation',
      'Containerized CI/CD with GitHub Actions',
      'Infrastructure as Code (IaC) for cloud-native apps'
    ]
  },
  {
    id: 'analytics-hub',
    title: 'Real-time Analytics Hub',
    description: 'Constructed a high-velocity analytics pipeline using Go and RabbitMQ to ingest and visualize user activity streams in real-time. The hub processes millions of events per hour, providing millisecond-level visibility into user behavior patterns.',
    fullDescription: 'A data pipeline focused on gathering and visualizing real-time user behavior to drive business intelligence decisions. The core challenge was ingesting and analyzing massive bursts of user activity data without dropping events or slowing down the UI.',
    features: [
      'Problem: Ingesting and analyzing massive bursts of user activity data without dropping events or slowing down the UI',
      'Architecture: Implemented a message-broker pattern using RabbitMQ to decouple data ingestion from the processing layer for maximum horizontal scalability',
      'Tech Stack: Go (Golang), Angular, RabbitMQ, and PostgreSQL',
      'Impact: Capable of handling peaks of 5,000+ events per second with sub-100ms processing latency'
    ],
    tags: ['Go', 'Angular', 'RabbitMQ', 'PostgreSQL'],
    imageUrl: '',
    link: '#',
    github: 'https://github.com/faru947',
    seoKeywords: [
      'Real-time data pipeline with Go and RabbitMQ',
      'Scalable user activity analytics hub',
      'Event-driven analytics with Golang and Angular',
      'High-velocity stream processing architecture'
    ]
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
