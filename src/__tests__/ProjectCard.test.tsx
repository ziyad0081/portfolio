
import { render, screen } from '@testing-library/react';
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
  const isEven = index % 2 === 0;

  return (
    <Card className="overflow-hidden transition-all duration-300 my-8">
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

// Mock project data for testing
const mockProject = {
  id: 1,
  title: "Test Project",
  description: "A test project description",
  tech: ["React", "TypeScript"],
  image: "/test-image.jpg",
  demoUrl: "https://example.com/demo",
  githubUrl: "https://github.com/example/project"
};

describe('ProjectCard Component', () => {
  test('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    
    // Check if title and description are rendered
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description')).toBeInTheDocument();
    
    // Check if tech stack badges are rendered
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    
    // Check if buttons are rendered with correct links
    const demoLink = screen.getByRole('link', { name: /Live demo of Test Project/i });
    expect(demoLink).toHaveAttribute('href', 'https://example.com/demo');
    
    const githubLink = screen.getByRole('link', { name: /GitHub repository for Test Project/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/example/project');
    
    // Check if image is rendered with correct alt text
    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });
  
  test('applies correct layout based on index', () => {
    // Even index (standard layout)
    const { rerender } = render(<ProjectCard project={mockProject} index={0} />);
    
    // For even index, the image should be on the left (no order-2 class)
    let imageContainer = document.querySelector('.md\\:w-1/2');
    expect(imageContainer).not.toHaveClass('md:order-2');
    
    // Odd index (reversed layout)
    rerender(<ProjectCard project={mockProject} index={1} />);
    
    // For odd index, the image should be on the right (has order-2 class)
    imageContainer = document.querySelector('.md\\:w-1/2');
    expect(imageContainer).toHaveClass('md:order-2');
  });
});
