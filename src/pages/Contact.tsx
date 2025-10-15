import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      subContent: "Available 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@heritagegrand.com",
      subContent: "reservations@heritagegrand.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Heritage Lane",
      subContent: "Cultural District, City 12345",
    },
    {
      icon: Clock,
      title: "Front Desk",
      content: "24 Hours",
      subContent: "Check-in: 3:00 PM | Check-out: 11:00 AM",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            We're here to help make your stay unforgettable
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-soft animate-scale-in text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                  <p className="text-muted-foreground text-xs mt-1">{info.subContent}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card className="shadow-luxury animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-hero text-lg py-6">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-bold mb-4">Visit Us</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Located in the heart of the cultural district, Heritage Grand Hotel is easily accessible 
                  from the airport and major attractions. Our concierge team is happy to assist with 
                  transportation arrangements.
                </p>
              </div>

              {/* Map Placeholder */}
              <Card className="shadow-luxury overflow-hidden">
                <div className="w-full h-96 bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">123 Heritage Lane, Cultural District</p>
                  </div>
                </div>
              </Card>

              <Card className="shadow-soft mt-6 animate-scale-in">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Getting Here</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• 20 minutes from International Airport</li>
                    <li>• 5 minutes walk from Central Station</li>
                    <li>• Valet parking available</li>
                    <li>• Complimentary airport shuttle service</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
