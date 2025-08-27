import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Transform Your <span className="text-gradient">Future?</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover our comprehensive programs designed to take you from beginner to industry professional.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/courses">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 glow-purple px-8 py-6 text-lg font-semibold"
            >
              Explore Courses
            </Button>
          </Link>
          <Link to="/about">
            <Button 
              size="lg" 
              variant="outline"
              className="border-border bg-background/20 backdrop-blur-sm hover:bg-background/30 px-8 py-6 text-lg font-semibold"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;