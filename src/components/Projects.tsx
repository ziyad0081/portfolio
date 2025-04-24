
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
      title: "Conway's Game of Life",
      description: "Interactive simulation of Conway's Game of Life, a cellular automaton that evolves based on simple rules.",
      tech: ["JavaScript", "React", "NodeJS", "Tailwind"],
      image: "conway.png",
      demoUrl: "https://ziyad0081.github.io/conway-react/",
      githubUrl: "https://github.com/ziyad0081/conway-react"
    },
    {
      id: 2,
      title: "RV2ML : RV32I to ML",
      description: "A tool that converts RV32I assembly code to ML code, facilitating the understanding of assembly language and its applications.",
      tech: ["JavaScript", "React", "Tailwind CSS"],
      image: "rv2ml.png",
      demoUrl: "https://ziyad0081.github.io/rv2ml/",
      githubUrl: "https://github.com/ziyad0081/rv2ml/"
    },
    {
      id: 3,
      title: "SwiftRoute : AI Powered Pathfinder for Ambulances in Algiers",
      description: "An AI-powered pathfinding application that optimizes ambulance routes in Algiers, ensuring timely medical assistance.",
      tech: ["React", "Flask", "Python", "OSMNX", "Graph Theory", "OpenStreetMap"],
      image: "swift.png",
      demoUrl: "https://ziyad0081.github.io/swift-route/",
      githubUrl: "https://github.com/ziyad0081/swift-route/"
    },
    {
      id: 4,
      title: "BIND9 powered DNS server with DNSSEC",
      description: "A DNS server powered by BIND9, implementing DNSSEC for enhanced security and data integrity.",
      tech: ["BIND9", "DNSSEC", "Ubuntu Server", "SSH"],
      image: "dnssec.png",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Driving School Management System",
      description: "A comprehensive management system for driving schools, facilitating student enrollment, scheduling, progress tracking and exam scheduling for managers.",
      tech: ["React", "TypeScript", "Tailwind CSS", "NodeJS", "Express", "Electron"],
      image: "dsms.png",
      demoUrl: "#",
      githubUrl: "https://github.com/ENSIA-AI/dsms-electron"
    },
    {
      id: 6,
      title: "Djezzy Multi-SIM Owners AI Powered Detection",
      description: "An AI-powered detection system for identifying Djezzy multi-SIM owners in Algeria that relies on graph theory and SNA , enhancing telecom decisions in marketing and other aspects.",
      tech: ["Machine Learning", "Pandas", "NumPy", "Graph Theory"],
      image: "multisim.png",
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
