import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const courses = [
    {
      title: "VFX Fundamentals",
      duration: "6 Months",
      level: "Beginner",
      price: "₹85,000",
      description: "Master the basics of visual effects, compositing, and digital artistry",
      modules: ["Adobe After Effects", "Nuke Compositing", "3D Basics", "Color Theory", "Portfolio Development"],
      highlights: ["Industry Certification", "Live Projects", "Job Guarantee"],
      popular: false
    },
    {
      title: "Advanced 3D Animation",
      duration: "8 Months", 
      level: "Intermediate",
      price: "₹1,25,000",
      description: "Complete 3D animation pipeline from modeling to final rendering",
      modules: ["Maya/Blender", "Character Rigging", "Animation Principles", "Lighting & Rendering", "Advanced Texturing"],
      highlights: ["Industry Mentorship", "Studio Internship", "Placement Support"],
      popular: true
    },
    {
      title: "VFX Compositing Pro",
      duration: "10 Months",
      level: "Advanced",
      price: "₹1,50,000", 
      description: "Professional compositing for feature films and high-end productions",
      modules: ["Nuke Studio", "Flame Compositing", "Python Scripting", "Advanced Keying", "Pipeline Management"],
      highlights: ["Hollywood Projects", "Industry Tools", "Direct Placement"],
      popular: false
    },
    {
      title: "Game VFX Specialist",
      duration: "7 Months",
      level: "Intermediate",
      price: "₹1,00,000",
      description: "Create stunning visual effects for games and interactive media",
      modules: ["Unity VFX Graph", "Unreal Engine", "Real-time Rendering", "Particle Systems", "Shader Programming"],
      highlights: ["Game Studio Projects", "Real-time Portfolio", "Industry Connections"],
      popular: false
    },
    {
      title: "Motion Graphics Master",
      duration: "5 Months",
      level: "Beginner",
      price: "₹65,000",
      description: "Design compelling motion graphics for advertising and media",
      modules: ["Cinema 4D", "After Effects Advanced", "Typography Animation", "Brand Design", "Client Projects"],
      highlights: ["Creative Portfolio", "Brand Projects", "Freelance Training"],
      popular: false
    },
    {
      title: "VFX Director Program", 
      duration: "12 Months",
      level: "Expert",
      price: "₹2,00,000",
      description: "Complete leadership program for VFX supervisors and directors",
      modules: ["Project Management", "Team Leadership", "Creative Direction", "Budget Planning", "Industry Networking"],
      highlights: ["Executive Training", "Studio Partnerships", "Leadership Certification"],
      popular: false
    }
  ];

  const levelColors = {
    "Beginner": "bg-green-500/20 text-green-400 border-green-500/30",
    "Intermediate": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", 
    "Advanced": "bg-red-500/20 text-red-400 border-red-500/30",
    "Expert": "bg-purple-500/20 text-purple-400 border-purple-500/30"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose from our comprehensive range of VFX and animation programs. 
            Each course is designed with industry input and includes hands-on projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2">100% Placement Record</Badge>
            <Badge className="bg-gradient-accent text-accent-foreground px-4 py-2">Industry Certified</Badge>
            <Badge className="bg-muted text-muted-foreground px-4 py-2">Live Projects</Badge>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card 
                key={index}
                className={`bg-gradient-dark border-border hover:border-primary/50 transition-all duration-300 hover:glow-purple relative ${
                  course.popular ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${levelColors[course.level as keyof typeof levelColors]} border`}>
                      {course.level}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <CardTitle className="text-xl text-gradient-accent">{course.title}</CardTitle>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">{course.price}</div>
                    <p className="text-sm text-muted-foreground">Complete Program Fee</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Course Modules:</h4>
                    <div className="space-y-2">
                      {course.modules.map((module, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></span>
                          {module}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Program Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="border-border text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground border-0">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="text-gradient">Programs?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2 text-gradient-accent">Industry Curriculum</h3>
              <p className="text-muted-foreground">Updated every 6 months with latest industry trends</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold mb-2 text-gradient-accent">Expert Mentors</h3>
              <p className="text-muted-foreground">Learn from professionals with 10+ years experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2 text-gradient-accent">Job Guarantee</h3>
              <p className="text-muted-foreground">100% placement assistance with salary guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-gradient-accent">Live Projects</h3>
              <p className="text-muted-foreground">Work on real client projects during training</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;