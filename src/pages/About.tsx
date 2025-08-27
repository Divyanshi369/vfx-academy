import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Creative Director",
      experience: "15+ years at ILM, Marvel Studios",
      emoji: "🎬"
    },
    {
      name: "Priya Sharma", 
      role: "Head of Animation",
      experience: "12+ years at Pixar, DreamWorks",
      emoji: "✨"
    },
    {
      name: "Arjun Patel",
      role: "VFX Supervisor",
      experience: "10+ years at Weta Digital, DNEG",
      emoji: "🔥"
    },
    {
      name: "Sneha Reddy",
      role: "Technical Director",
      experience: "8+ years at MPC, Framestore",
      emoji: "⚡"
    }
  ];

  const milestones = [
    { year: "2015", event: "VFX Academy Founded", description: "Started with a vision to democratize VFX education in India" },
    { year: "2017", event: "First 100 Graduates", description: "Our inaugural batch lands jobs at top studios worldwide" },
    { year: "2019", event: "Industry Recognition", description: "Awarded 'Best VFX Training Institute' by FICCI" },
    { year: "2021", event: "International Expansion", description: "Partnerships with studios in Hollywood and London" },
    { year: "2023", event: "500+ Placements", description: "Milestone achievement in student career success" },
    { year: "2024", event: "AI Integration", description: "First to integrate AI tools in VFX curriculum" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-gradient">VFX Academy</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Founded in 2015, VFX Academy has grown from a small studio to India's premier 
                visual effects and animation training institute. We've trained over 1,000 students 
                who now work at leading studios worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gradient-dark p-4 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-gradient">1000+</h3>
                  <p className="text-muted-foreground">Students Trained</p>
                </div>
                <div className="bg-gradient-dark p-4 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-gradient-accent">9</h3>
                  <p className="text-muted-foreground">Years Excellence</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-full opacity-20 absolute -top-8 -right-8 w-64 h-64 animate-float"></div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden border border-border">
                <span className="text-8xl opacity-50">🎭</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-background/5 border-border">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gradient">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To bridge the gap between artistic vision and technical excellence, 
                  empowering the next generation of VFX artists with industry-relevant 
                  skills and hands-on experience.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/5 border-border">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gradient-accent">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the global leader in VFX and animation education, 
                  setting new standards in creative and technical training while 
                  fostering innovation in visual storytelling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn from industry veterans who've worked on blockbuster films and award-winning projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gradient-dark border-border hover:border-primary/50 transition-all duration-300 hover:glow-purple">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.emoji}</div>
                  <h3 className="text-xl font-bold mb-2 text-gradient-accent">{member.name}</h3>
                  <p className="font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-gradient-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-background/10 p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm text-gradient font-bold">{milestone.year}</span>
                      <h3 className="text-xl font-bold">{milestone.event}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;