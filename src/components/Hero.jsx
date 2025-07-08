import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

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
          {/* Main Heading with Scroll Reveal */}
          <ScrollReveal direction="up" delay={200}>
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
          </ScrollReveal>

          {/* Description with Scroll Reveal */}
          <ScrollReveal direction="up" delay={400}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dynamic and results-driven organizer with deep expertise in organizational and representational strategies. 
              Specializing in real-world problem solving and excelling in recruiting, coordinating, and mobilizing communities 
              toward collective action.
            </p>
          </ScrollReveal>

          {/* Social Links with Scroll Reveal */}
          <ScrollReveal direction="up" delay={600}>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/derecxx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:bg-accent/20 transition-all duration-300 glow-effect hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/dikshant936/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:bg-accent/20 transition-all duration-300 glow-effect hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://leetcode.com/u/dikshantk121/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:bg-accent/20 transition-all duration-300 glow-effect hover:scale-110"
              >
                <Code className="w-6 h-6" />
              </a>
            </div>
          </ScrollReveal>

          {/* CTA Buttons with Scroll Reveal */}
          <ScrollReveal direction="up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                onClick={scrollToAbout}
              >
                Learn More About Me
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="glass-card hover:bg-accent/10 transition-all duration-300 hover:scale-105"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </ScrollReveal>

          {/* Scroll Indicator with Scroll Reveal */}
          <ScrollReveal direction="up" delay={1000}>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <button
                onClick={scrollToAbout}
                className="animate-bounce p-2 rounded-full hover:bg-card/20 transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronDown className="w-6 h-6" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;

