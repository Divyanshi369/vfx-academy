import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full glow-cyan animate-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full glow-purple animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full glow-cyan animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient">VFX Academy</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Master the art of Visual Effects and Animation. Create stunning cinematic experiences with industry-leading techniques.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/courses">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 glow-purple px-8 py-6 text-lg font-semibold"
            >
              Start Your Journey
            </Button>
          </Link>
          <Link to="/showcase">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border bg-background/20 backdrop-blur-sm hover:bg-background/30 px-8 py-6 text-lg font-semibold"
            >
              View Showcase
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;