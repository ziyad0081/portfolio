
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Card className={`reveal ${isVisible ? 'active' : ''} overflow-hidden transition-all duration-300 my-8`}>
      <div className="flex flex-col md:flex-row">
        <div className={`md:w-1/2 ${!isEven && 'md:order-2'}`}>
          <div className="h-64 md:h-full overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-between h-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
            <CardDescription className="text-base text-muted-foreground">{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-3">
            <Button variant="default" size="sm" className="gap-1" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`}>
                <ExternalLink size={16} /> Live Demo
              </a>
            </Button>
            <Button variant="outline" size="sm" className="gap-1" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
                <Github size={16} /> GitHub
              </a>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with cart functionality, user authentication, and payment processing.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
      tech: ["TypeScript", "React", "Redux", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f7a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=739&q=80",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with location search, 7-day forecasts, and interactive weather maps.",
      tech: ["JavaScript", "React", "OpenWeather API", "Chart.js", "Geolocation"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 reveal">Featured Projects</h2>
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
