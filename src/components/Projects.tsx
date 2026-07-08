
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
      title: "Business Performance Analytics Dashboard",
      description: "Built an end-to-end analytics pipeline to analyze retail sales, customer behavior, and product profitability. Developed interactive executive dashboards tracking key business KPIs including revenue, profit margins, customer lifetime value, RFM segmentation, and regional sales performance.",
      tech: ["Python", "SQL", "Power BI", "Data Analytics", "Predictive Analytics"],
      image: "analytics.png",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "QoS-Aware Reinforcement Learning for SDN Routing",
      description: "Designed and implemented a tabular Q-learning routing agent for adaptive path selection in Software-Defined Networks (SDNs). Developed the complete SDN experimentation framework using Ryu, Mininet, and OpenFlow, with automated traffic generation and QoS monitoring pipeline.",
      tech: ["Python", "Reinforcement Learning", "Ryu", "Mininet", "OpenFlow", "QoS Monitoring"],
      image: "sdn.png",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "NABA2: Multi-Class Misinformation Detection Corpus for Algerian Darija",
      description: "Co-led a research team to build the largest multi-class Algerian Darija misinformation corpus with 22,391 annotated instances. Designed a hybrid data pipeline combining social media collection with LLM-assisted augmentation and benchmarked 8 models across classical ML, neural, and transformer architectures.",
      tech: ["NLP", "Machine Learning", "Transformers", "Python", "Data Annotation", "BiLSTM", "BERT"],
      image: "naba2.png",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Djezzy Dual-SIM Owners Detection",
      description: "Developed a graph-based dual-SIM detection framework over a telecom call network containing 1M subscribers and 2M directed interactions. Engineered behavioral similarity features and designed a probabilistic scoring model combining graph-derived signals with CRM attributes.",
      tech: ["Machine Learning", "Graph Theory", "NetworkX", "Python", "Data Mining", "Social Network Analysis"],
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
