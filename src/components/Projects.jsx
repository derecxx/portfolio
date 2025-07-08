import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Globe News - Dynamic News Website",
      description: "A comprehensive news website that dynamically fetches and displays news articles based on user queries. Features category-based navigation and an engaging user interface for improved news consumption experience.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML", "CSS", "JavaScript", "News API"],
      features: [
        "Dynamic news fetching from multiple sources",
        "Category-based navigation system",
        "Responsive design for all devices",
        "Real-time news updates",
        "Search functionality for specific topics",
        "Visually engaging article presentation"
      ],
      type: "Web Development",
      status: "Completed",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Team SPEC/Electrothon Website",
      description: "A dynamic and visually appealing website for Team SPEC and ELECTROTHON that showcases activities, achievements, and fosters community engagement. Provides comprehensive event information and registration capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "TailwindCSS", "HTML"],
      features: [
        "Interactive event showcase and timeline",
        "Community member profiles and achievements",
        "Event registration and query system",
        "News and updates section",
        "Responsive design with modern UI/UX",
        "Integration with social media platforms"
      ],
      type: "Full Stack",
      status: "Live",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills, projects, and professional journey. Built with React and featuring a dark theme with red accents, smooth animations, and interactive elements.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "TailwindCSS", "Framer Motion", "Lucide Icons"],
      features: [
        "Responsive design with dark theme",
        "Smooth scrolling and animations",
        "Interactive project showcases",
        "Contact form integration",
        "SEO optimized structure",
        "Performance optimized loading"
      ],
      type: "Frontend",
      status: "In Progress",
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Live': return 'bg-accent/20 text-accent border-accent/30';
      case 'In Progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Web Development': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Full Stack': return 'bg-primary/20 text-primary border-primary/30';
      case 'Frontend': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that demonstrate my technical skills, creativity, and problem-solving abilities. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover bg-card border-border overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 bg-muted/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Code className="w-16 h-16 text-muted-foreground/50" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="text-xl font-bold leading-tight">{project.title}</CardTitle>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className={getTypeColor(project.type)}>
                      {project.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-accent">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-accent">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-muted/50 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <Globe className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-16 text-center">
          <Card className="card-hover bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-accent">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm constantly working on new projects and exploring emerging technologies. 
                Stay tuned for more exciting developments in web development, mobile apps, and innovative solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="bg-muted/20">Machine Learning</Badge>
                <Badge variant="outline" className="bg-muted/20">Mobile Development</Badge>
                <Badge variant="outline" className="bg-muted/20">DevOps</Badge>
                <Badge variant="outline" className="bg-muted/20">Cloud Computing</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;

