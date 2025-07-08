import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Mic, Trophy, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership Excellence",
      description: "Led 80+ member tech club as Vice President, managing Rs.2.5L+ logistics and driving record participation."
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Public Speaking",
      description: "Strong public speaking skills with experience in technical documentation and stakeholder engagement."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Event Organization",
      description: "Organized MLH-powered Global Level Hackathon with 2300 registrations and 400 in-person participants."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Fitness & Wellness",
      description: "Advanced Streetlifting Athlete and GNC Sponsored Content Creator, trained 5+ clients in fitness and nutrition."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a Computer Science student at NIT Hamirpur with a passion for technology, leadership, and community building. 
              My journey combines technical expertise with strong organizational skills and a commitment to making a positive impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal info */}
          <div className="space-y-6">
            <ScrollReveal direction="left" delay={200}>
              <Card className="card-hover glass-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-accent">Personal Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span>Jaipur, Rajasthan</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Education:</span>
                      <span>NIT Hamirpur (CSE)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">CGPA:</span>
                      <span>7.35/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Graduation:</span>
                      <span>June 2026</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={400}>
              <Card className="card-hover glass-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-accent">What Drives Me</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in the power of technology to solve real-world problems and the importance of strong leadership 
                    in driving meaningful change. My experience in organizing large-scale events and leading diverse teams has 
                    taught me the value of effective communication, strategic planning, and collaborative problem-solving.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <ScrollReveal key={index} direction="right" delay={200 + index * 100}>
                <Card className="card-hover glass-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-accent mb-4 flex justify-center">
                      {highlight.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-3">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <ScrollReveal direction="up" delay={600}>
          <div className="mt-16">
            <Card className="card-hover glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center text-accent">My Philosophy</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Innovation</h4>
                    <p className="text-muted-foreground">
                      Constantly seeking new ways to solve problems and improve processes through technology and creative thinking.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Collaboration</h4>
                    <p className="text-muted-foreground">
                      Building strong teams and fostering environments where everyone can contribute their best work.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Growth</h4>
                    <p className="text-muted-foreground">
                      Committed to continuous learning and helping others develop their skills and reach their potential.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;

