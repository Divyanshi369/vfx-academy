import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "500+ Students Placed",
      description: "Our graduates work at top studios worldwide"
    },
    {
      icon: "👨‍🏫",
      title: "Industry Experts",
      description: "Learn from professionals with real-world experience"
    },
    {
      icon: "💻",
      title: "Cutting-Edge Technology",
      description: "Access to the latest VFX and animation software"
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">VFX Academy?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join India's premier institute for visual effects and animation education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-dark border-border hover:border-primary/50 transition-all duration-300 group hover:glow-purple"
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gradient-accent">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;