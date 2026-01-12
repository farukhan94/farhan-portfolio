
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  tags: string[];
  imageUrl: string;
  link: string;
  github: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
