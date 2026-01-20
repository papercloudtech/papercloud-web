export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  featured: boolean;
  category?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "SecureChat",
    description: "End-to-end encrypted real-time messaging platform with advanced security features, voice calls, and file sharing capabilities.",
    tags: ["Node.js", "Firebase", "WebRTC", "TypeScript"],
    githubUrl: "https://github.com/papercloudtech/securechat",
    featured: true,
    category: "Communication"
  },
  {
    id: "2",
    title: "E-Seva",
    description: "Comprehensive digital governance platform for citizen services, enabling seamless government-to-citizen interactions and service delivery.",
    tags: ["Java", "Spring Boot", "SQL", "React"],
    githubUrl: "https://github.com/papercloudtech/e-seva",
    featured: true,
    category: "Public Services"
  },
  {
    id: "3",
    title: "Crop Yield AI",
    description: "Machine learning-powered agricultural analytics platform that predicts crop yields using satellite imagery and weather data.",
    tags: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/papercloudtech/crop-yield-ai",
    featured: true,
    category: "AI/ML"
  },
  {
    id: "4",
    title: "CloudSync",
    description: "Distributed file synchronization system with real-time collaboration features and conflict resolution algorithms.",
    tags: ["Go", "Redis", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/papercloudtech/cloudsync",
    featured: false,
    category: "Infrastructure"
  },
  {
    id: "5",
    title: "HealthTrack Pro",
    description: "HIPAA-compliant health monitoring platform with wearable device integration and AI-powered health insights.",
    tags: ["Next.js", "MongoDB", "TypeScript", "AWS"],
    githubUrl: "https://github.com/papercloudtech/healthtrack-pro",
    featured: false,
    category: "Healthcare"
  },
  {
    id: "6",
    title: "EduLearn",
    description: "Open-source learning management system with interactive course creation, progress tracking, and gamification features.",
    tags: ["Vue.js", "Django", "MySQL", "WebSocket"],
    githubUrl: "https://github.com/papercloudtech/edulearn",
    featured: false,
    category: "Education"
  }
];
