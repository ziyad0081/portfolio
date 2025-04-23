
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500}
          className="text-xl font-bold cursor-pointer text-foreground"
        >
          <span className="text-primary">Dev</span>Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Button 
              key={item.name} 
              variant="ghost" 
              className="hover:bg-primary/10"
              asChild
            >
              <Link 
                to={item.to} 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}
                className="cursor-pointer"
              >
                {item.name}
              </Link>
            </Button>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-md p-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.to} 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}
                className="px-4 py-2 hover:bg-primary/10 rounded-md cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
