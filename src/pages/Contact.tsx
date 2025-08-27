import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours."
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Our Campus",
      details: ["Film City Complex, Sector 16A", "Noida, Uttar Pradesh 201301", "India"]
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211", "Mon-Sat: 9 AM - 7 PM"]
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["admissions@vfxacademy.in", "info@vfxacademy.in", "careers@vfxacademy.in"]
    },
    {
      icon: "🌐",
      title: "Follow Us",
      details: ["@VFXAcademyIndia", "LinkedIn: VFX Academy", "YouTube: VFX Academy"]
    }
  ];

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "12th grade completion and basic computer knowledge. Portfolio review for advanced courses."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes! We have 100% placement record with salary packages ranging from ₹3-15 LPA."
    },
    {
      question: "Can I pay the fees in installments?",
      answer: "Absolutely! We offer flexible EMI options and scholarship programs for deserving candidates."
    },
    {
      question: "What software will I learn?",
      answer: "Industry-standard tools like Maya, Nuke, After Effects, Houdini, and more based on your course."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your VFX journey? Contact us for admissions, course information, 
            or any questions about our programs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <Card className="bg-gradient-dark border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient-accent">Send us a Message</CardTitle>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input 
                      id="firstName"
                      placeholder="Enter your first name"
                      className="bg-background/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input 
                      id="lastName"
                      placeholder="Enter your last name"
                      className="bg-background/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="course" className="text-foreground">Course Interest</Label>
                  <Input 
                    id="course"
                    placeholder="Which course are you interested in?"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your goals and questions..."
                    className="bg-background/50 border-border focus:border-primary min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 glow-purple"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & FAQs */}
          <div className="space-y-8">
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-dark border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{info.icon}</div>
                    <h3 className="text-lg font-bold mb-3 text-gradient-accent">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="bg-gradient-dark border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gradient">Find Us</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Film City Complex, Noida</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick FAQs */}
            <Card className="bg-gradient-dark border-border">
              <CardHeader>
                <CardTitle className="text-xl text-gradient">Quick FAQs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-b-0">
                    <h4 className="font-semibold mb-2 text-foreground">{faq.question}</h4>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;