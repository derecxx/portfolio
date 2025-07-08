import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Users, Mic, Dumbbell, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "Python", level: 80, color: "bg-blue-500" },
        { name: "C++", level: 75, color: "bg-purple-500" },
        { name: "SQL", level: 70, color: "bg-green-500" }
      ]
    },
    {
      title: "Technical Skills",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 85, color: "bg-cyan-500" },
        { name: "DevOps", level: 70, color: "bg-orange-500" },
        { name: "AWS", level: 65, color: "bg-amber-500" },
        { name: "Docker", level: 60, color: "bg-blue-600" }
      ]
    },
    {
      title: "Leadership & Communication",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Team Leadership", level: 95, color: "bg-accent" },
        { name: "Public Speaking", level: 90, color: "bg-primary" },
        { name: "Event Management", level: 90, color: "bg-green-600" },
        { name: "Stakeholder Engagement", level: 85, color: "bg-purple-600" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Problem Solving", level: 90, color: "bg-indigo-500" },
        { name: "Strategic Planning", level: 85, color: "bg-pink-500" },
        { name: "Mentoring", level: 85, color: "bg-teal-500" },
        { name: "Adaptability", level: 88, color: "bg-red-500" }
      ]
    }
  ];

  const tools = [
    "Visual Studio Code", "Git/GitHub", "MongoDB", "MySQL", "Adobe Premiere Pro", 
    "Adobe Photoshop", "Red Hat Linux", "Docker", "AWS", "Generative AI"
  ];

  const achievements = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Public Speaking Excellence",
      description: "Strong presentation skills demonstrated through leading workshops and stakeholder meetings",
      highlight: "Led 10+ workshops"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Management",
      description: "Successfully directed 80+ member teams with effective task management and coordination",
      highlight: "80+ team members"
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Fitness & Discipline",
      description: "Advanced Streetlifting Athlete with exceptional 80kg dip and 45kg pullup achievements",
      highlight: "GNC Sponsored"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive blend of technical expertise, leadership capabilities, and soft skills 
            that enable me to tackle complex challenges and lead successful projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover bg-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="text-accent">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Key <span className="gradient-text">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-hover bg-card border-border text-center">
                <CardContent className="p-6">
                  <div className="text-accent mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                    {achievement.highlight}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Tools & <span className="gradient-text">Technologies</span>
          </h3>
          <Card className="card-hover bg-card border-border">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-muted/50 hover:bg-accent/20 transition-colors duration-200 px-4 py-2"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coursework */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">
            Relevant <span className="gradient-text">Coursework</span>
          </h3>
          <Card className="card-hover bg-card border-border">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">OOPs</div>
                  <div className="text-sm text-muted-foreground">Object Oriented Programming</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">DSA</div>
                  <div className="text-sm text-muted-foreground">Data Structures & Algorithms</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">OS</div>
                  <div className="text-sm text-muted-foreground">Operating Systems</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">DBMS</div>
                  <div className="text-sm text-muted-foreground">Database Management</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Skills Highlight */}
        <div className="mt-16">
          <Card className="card-hover bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">What Sets Me Apart</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                My unique combination of technical expertise, leadership experience, and commitment to fitness and wellness 
                creates a well-rounded professional profile. I bring not just coding skills, but also the ability to lead teams, 
                communicate effectively, and maintain the discipline and energy needed for high-performance work environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

