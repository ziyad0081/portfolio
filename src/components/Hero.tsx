
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Decorative blob */}
      <div className="absolute -top-20 -right-20 w-96 h-96 blob opacity-30 z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 blob opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left md:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="text-primary">Chaalel O. Ziyad</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              I craft open-source, academic and learner-centric apps and demos—spanning AI, algorithms, and full stack tech that turn computer science concepts into engaging, real-world experiences.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link 
                to="projects" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}
              >
                <Button size="lg" className="rounded-full px-8">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-primary/20 absolute -top-4 -left-4 animate-pulse"></div>
              <img 
                src="me.jpg" 
                alt="Developer portrait" 
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-background shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
