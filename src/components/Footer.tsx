import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Heritage Grand</h3>
            <p className="text-sm text-muted-foreground">
              Experience luxury and culture in perfect harmony
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/accommodations" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link to="/dining" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Dining
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Experiences
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone size={16} className="mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail size={16} className="mr-2" />
                info@heritagegrand.com
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <MapPin size={16} className="mr-2" />
                123 Heritage Lane
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Heritage Grand Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
