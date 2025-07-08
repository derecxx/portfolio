import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Trophy, Target } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Vice President",
      organization: "SPEC NITH",
      period: "Current",
      type: "Leadership",
      icon: <Users className="w-6 h-6" />,
      description: "Leading 80+ member tech club with exceptional results in event management and community building.",
      achievements: [
        "Launched 6 comprehensive workshops for skill development",
        "Mentored 25+ junior members in technical and leadership skills",
        "Drove record participation with 400+ attendees in Electrothon 7.0",
        "Successfully managed Rs.2.5L+ logistics and budget allocation",
        "Achieved 70+ project submissions in hackathon events"
      ],
      skills: ["Leadership", "Event Management", "Budget Management", "Mentoring", "Public Speaking"]
    },
    {
      title: "Lead Organizer",
      organization: "ELECTROTHON 7.0",
      period: "2024",
      type: "Event Management",
      icon: <Trophy className="w-6 h-6" />,
      description: "Organized a Major League Hacking (MLH) powered Global Level Hackathon with international participation.",
      achievements: [
        "Managed 2300+ registrations from global participants",
        "Coordinated 400+ in-person attendees successfully",
        "Established partnerships with major tech companies",
        "Implemented comprehensive judging and evaluation systems",
        "Created engaging workshops and networking sessions"
      ],
      skills: ["Event Planning", "Stakeholder Management", "Public Relations", "Team Coordination", "Problem Solving"]
    },
    {
      title: "Joint Secretary",
      organization: "Yoga Club NITH",
      period: "2023-2024",
      type: "Wellness & Organization",
      icon: <Target className="w-6 h-6" />,
      description: "Promoted wellness and cross-institute engagement through organized yoga tournaments and workshops.",
      achievements: [
        "Organized inter-NIT yoga tournaments",
        "Conducted wellness workshops for student community",
        "Built partnerships with other NITs for collaborative events",
        "Promoted mental health and physical wellness awareness",
        "Increased club membership by 150%"
      ],
      skills: ["Community Building", "Wellness Advocacy", "Inter-institutional Relations", "Workshop Facilitation"]
    },
    {
      title: "Class Representative",
      organization: "CSE Department, NIT Hamirpur",
      period: "2022-2023",
      type: "Academic Leadership",
      icon: <Calendar className="w-6 h-6" />,
      description: "Served as primary liaison between faculty and students, facilitating effective communication and problem resolution.",
      achievements: [
        "Coordinated academic discussions and feedback sessions",
        "Addressed student concerns effectively with faculty",
        "Organized study groups and peer learning sessions",
        "Facilitated communication for curriculum improvements",
        "Maintained 95% student satisfaction in feedback surveys"
      ],
      skills: ["Communication", "Conflict Resolution", "Academic Coordination", "Student Advocacy"]
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Leadership': return 'bg-accent/20 text-accent border-accent/30';
      case 'Event Management': return 'bg-primary/20 text-primary border-primary/30';
      case 'Wellness & Organization': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Academic Leadership': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey of leadership, innovation, and community building. Each role has shaped my ability to lead, 
            organize, and inspire others while delivering exceptional results.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover bg-card border-border overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg text-accent">
                      {exp.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                      <p className="text-lg text-muted-foreground">{exp.organization}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant="outline" className={getTypeColor(exp.type)}>
                      {exp.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-accent">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-accent">Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-muted/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="card-hover bg-card border-border text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">80+</div>
              <div className="text-sm text-muted-foreground">Team Members Led</div>
            </CardContent>
          </Card>
          <Card className="card-hover bg-card border-border text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">2300+</div>
              <div className="text-sm text-muted-foreground">Event Registrations</div>
            </CardContent>
          </Card>
          <Card className="card-hover bg-card border-border text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Mentees Guided</div>
            </CardContent>
          </Card>
          <Card className="card-hover bg-card border-border text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">₹2.5L+</div>
              <div className="text-sm text-muted-foreground">Budget Managed</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

