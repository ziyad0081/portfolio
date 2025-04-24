
import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const About = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: "2023",
      title: "Undergraduate Degree in AI/ML", 
      description: "Pursuing a degree in Artificial Intelligence and Machine Learning at ENSIA."
    },
    {
      year: "2022",
      title: "High School Diploma",
      description: "Graduated with honors, Experimental Sciences Branch."
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
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 reveal">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="reveal">
            <Card className="p-8 h-full">
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <p className="mb-4 text-muted-foreground">
                I'm a CompSci student with three years of hands-on project work, moving easily from theory to practice. I build web applications with React and Tailwind and NodeJS, but I'm just as comfortable debugging network traffic or writing performance critical C++ close to the metal. Whether it's a course assignment or a client demo, I focus on clean code, solid fundamentals, and user focused results.
              </p>
            </Card>
          </div>
          
          <div className="relative reveal">
            <h3 className="text-xl font-semibold mb-6">Career Highlights</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-primary/30">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary z-10">
                      <span className="text-xs font-semibold text-white">{item.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1">
                    <div className="p-4">
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
