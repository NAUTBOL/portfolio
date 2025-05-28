export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}