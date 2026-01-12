import React, { useState } from 'react';

// Utility function to get tech icon URL
export const getTechIconUrl = (techName: string): string => {
  // Normalize tech names to match Simple Icons format
  const techMap: { [key: string]: string } = {
    'Angular': 'angular',
    'Laravel': 'laravel',
    'Spring Boot': 'springboot',
    'Spring': 'spring',
    'AWS': 'amazonaws',
    'Flutter': 'flutter',
    'PostgreSQL': 'postgresql',
    'MySQL': 'mysql',
    'Docker': 'docker',
    'Redis': 'redis',
    'TypeScript': 'typescript',
    'Node.js': 'nodedotjs',
    'Node': 'nodedotjs',
    'Terraform': 'terraform',
    'RabbitMQ': 'rabbitmq',
    'Python': 'python',
    'Go': 'go',
    'Java': 'java',
    'JavaScript': 'javascript',
    'React': 'react',
    'Vue': 'vuedotjs',
    'Tailwind CSS': 'tailwindcss',
    'Tailwind': 'tailwindcss',
    'Ionic': 'ionic',
    'Redux': 'redux',
    'NgRx': 'ngrx',
    'Firebase': 'firebase',
    'NestJS': 'nestjs',
    'PHP': 'php',
    'WebSockets': 'socketdotio',
    'FCM': 'firebase',
    'WearOS': 'android',
    'GitHub Actions': 'githubactions',
    'Actions': 'githubactions',
    'Pandas': 'pandas',
    'Microservices': null, // Will use fallback
    'Saga Pattern': null,
    'Event-Driven': null,
    'OAuth2': null,
    'JWT': null,
  };

  // Extract base tech name (remove version numbers, parentheses, etc.)
  const normalizedName = techName
    .replace(/\s*\([^)]*\)/g, '') // Remove parentheses and content
    .replace(/\s*\/.*/g, '') // Remove after slash
    .trim();

  const iconName = techMap[normalizedName] || techMap[techName];
  
  if (!iconName) {
    return ''; // Return empty string to trigger fallback
  }
  
  // Use Simple Icons CDN
  return `https://cdn.simpleicons.org/${iconName}/818cf8`;
};

// Component to render tech icon with fallback
export const TechIcon: React.FC<{ techName: string; className?: string }> = ({ techName, className = "w-4 h-4" }) => {
  const [useFallback, setUseFallback] = useState(false);
  const iconUrl = getTechIconUrl(techName);
  
  if (!iconUrl || useFallback) {
    return <i className="fa-solid fa-screwdriver-wrench text-gray-400" style={{ fontSize: className.includes('w-4') ? '0.875rem' : '1rem' }}></i>;
  }
  
  return (
    <img 
      src={iconUrl}
      alt={techName}
      className={className}
      onError={() => setUseFallback(true)}
    />
  );
};
