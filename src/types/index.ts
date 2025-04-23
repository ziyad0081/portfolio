
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}
