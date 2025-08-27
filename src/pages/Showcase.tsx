import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const Showcase = () => {
  const projects = [
    {
      title: "Epic Fantasy Battle",
      category: "VFX Compositing",
      description: "Student project featuring complex particle systems and magical effects",
      year: "2024"
    },
    {
      title: "Cyberpunk City Chase",
      category: "3D Animation",
      description: "Futuristic vehicle chase sequence with dynamic lighting",
      year: "2024"
    },
    {
      title: "Dragon Flight Sequence",
      category: "Character Animation",
      description: "Photorealistic dragon with advanced rigging and simulation",
      year: "2023"
    },
    {
      title: "Space Station Explosion", 
      category: "Destruction FX",
      description: "Large-scale destruction with debris and fire simulations",
      year: "2023"
    },
    {
      title: "Underwater World",
      category: "Environment Design",
      description: "Immersive underwater ecosystem with volumetric lighting",
      year: "2024"
    },
    {
      title: "Robot Transformation",
      category: "Mechanical Animation",
      description: "Complex mechanical transformation with detailed rigging",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Student <span className="text-gradient">Showcase</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the incredible work created by our students. From beginners to industry professionals, 
            see the transformation in their VFX and animation skills.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-gradient-dark border-border hover:border-primary/50 transition-all duration-300 group hover:glow-purple overflow-hidden"
              >
                <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                  <span className="text-6xl opacity-50">🎬</span>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View Project</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gradient-accent font-medium">{project.category}</span>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-gradient mb-2">500+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gradient-accent mb-2">95%</h3>
              <p className="text-muted-foreground">Industry Placement Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gradient mb-2">50+</h3>
              <p className="text-muted-foreground">Industry Partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;