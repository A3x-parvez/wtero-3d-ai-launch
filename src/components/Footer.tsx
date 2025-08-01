import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Website Development",
    "E-Commerce Solutions",
    "AI Integration",
    "Mobile Development",
    "Digital Marketing",
    "Branding & Design"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, hsl(210 100% 60%) 1px, transparent 1px),
                             radial-gradient(circle at 80% 20%, hsl(280 100% 65%) 1px, transparent 1px),
                             radial-gradient(circle at 40% 40%, hsl(160 100% 50%) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold font-poppins bg-gradient-primary bg-clip-text text-transparent mb-4">
                Wtero
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transforming businesses with cutting-edge technology solutions. 
                Your imagination, our code.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">hello@wtero.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Tech Hub, Innovation District</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Stay Updated</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe to our newsletter for the latest tech insights and updates.
              </p>
              <div className="space-y-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-background/50"
                />
                <Button variant="cta" className="w-full">
                  Subscribe
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-3">Follow us on:</p>
                <div className="flex gap-3">
                  {[
                    { name: "LinkedIn", icon: "🔗" },
                    { name: "Twitter", icon: "🐦" },
                    { name: "GitHub", icon: "💻" },
                    { name: "Instagram", icon: "📱" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-card border border-card-border rounded-lg flex items-center justify-center hover:border-primary/40 hover:scale-110 transition-all duration-300 hover:shadow-neon"
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-card-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Wtero. All rights reserved. Built with ❤️ for innovation.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Back to Top Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="hover:scale-110 transition-transform duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;