import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full Stack Developer', 'Tech Leader', 'Public Speaker', 'Content Creator'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center float-animation">
            <span className="text-4xl font-bold text-primary-foreground">DK</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="gradient-text">Dikshant</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
                I'm a <span className="text-accent">{displayText}</span>
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dynamic and results-driven organizer with deep expertise in organizational and representational strategies. 
            Specializing in real-world problem solving and excelling in recruiting, coordinating, and mobilizing communities 
            toward collective action.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/derecxx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full hover:bg-accent transition-colors duration-300 glow-effect"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/dikshant936/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full hover:bg-accent transition-colors duration-300 glow-effect"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/u/dikshantk121/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full hover:bg-accent transition-colors duration-300 glow-effect"
            >
              <Code className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={scrollToAbout}
            >
              Learn More About Me
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToAbout}
              className="animate-bounce p-2 rounded-full hover:bg-card transition-colors duration-300"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

