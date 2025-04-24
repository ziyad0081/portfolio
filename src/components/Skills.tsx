
import React, { useEffect } from 'react';
import { 
  Code, 
  Globe, 
  Database, 
  Server, 
  Terminal, 
  GitBranch,
  Settings, 
  LayoutDashboard,
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <Code /> },
        { name: "TypeScript", icon: <Code /> },
        { name: "JavaScript", icon: <Code /> },
        { name: "HTML5/CSS3", icon: <Code /> },
        { name: "Tailwind CSS", icon: <Code /> },
        { name: "Flutter", icon: <Code /> },
        { name: "MaterialUI", icon: <Code /> },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <Server /> },
        { name: "PHP", icon: <Server /> },
        { name: "Express", icon: <Server /> },
        { name: "Python", icon: <Code /> },
        { name: "REST APIs", icon: <Globe /> },
        { name: "SQL", icon: <Database /> },
      ]
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", icon: <GitBranch /> },
        { name: "Redis", icon: <Database /> },
        { name: "BIND9", icon: <Server /> },
        { name: "SSH", icon: <Server /> },
        { name: "VS Code", icon: <Terminal /> },
        { name: "Figma", icon: <LayoutDashboard /> },
        { name: "Postman", icon: <Settings /> },
        { name: "Docker", icon: <Server /> },
        { name: "Linux", icon: <Terminal /> },
      ]
    },
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 reveal">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name} 
              className="reveal" 
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="bg-card p-4 rounded-lg flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <span className="text-primary">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
