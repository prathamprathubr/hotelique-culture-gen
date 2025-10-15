import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Wifi, Coffee, Dumbbell, Utensils } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import restaurant from "@/assets/restaurant.jpg";
import cultural from "@/assets/cultural-performance.jpg";

const Home = () => {
  const rooms = [
    {
      title: "Deluxe Room",
      image: roomDeluxe,
      price: "$299",
      description: "Elegant comfort with city views",
    },
    {
      title: "Executive Suite",
      image: roomSuite,
      price: "$599",
      description: "Spacious luxury with cultural charm",
    },
  ];

  const amenities = [
    { icon: Wifi, title: "Free WiFi" },
    { icon: Coffee, title: "24/7 Room Service" },
    { icon: Dumbbell, title: "Fitness Center" },
    { icon: Utensils, title: "Fine Dining" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "An unforgettable experience. The cultural performances and authentic hospitality made our stay truly special.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Perfect blend of luxury and tradition. Every detail reflects the rich cultural heritage.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6">
            Experience Heritage & Luxury
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Where timeless culture meets modern elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-hero text-lg px-8">
              Book Your Stay
            </Button>
            <Link to="/experiences">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-card/80 backdrop-blur-sm">
                Explore Experiences
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Accommodations</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover rooms designed with cultural elegance and modern comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden shadow-luxury hover:scale-105 transition-smooth animate-scale-in">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif font-semibold">{room.title}</h3>
                    <span className="text-2xl font-bold text-accent">{room.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  <Link to="/accommodations">
                    <Button className="w-full gradient-hero">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-4">World-Class Amenities</h2>
            <p className="text-muted-foreground text-lg">Everything you need for a perfect stay</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <amenity.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold">{amenity.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Experience Preview */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img
                src={cultural}
                alt="Cultural Performance"
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-serif font-bold mb-4">Immerse in Culture</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Experience authentic cultural performances, traditional workshops, and local artisan encounters. 
                Our hotel celebrates heritage through curated experiences that connect you to centuries of tradition.
              </p>
              <Link to="/experiences">
                <Button size="lg" className="gradient-hero">
                  Explore Cultural Experiences
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-4">Guest Experiences</h2>
            <p className="text-muted-foreground text-lg">What our guests say about us</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft animate-scale-in">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-accent text-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Preview */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 animate-fade-in-up">
              <h2 className="text-4xl font-serif font-bold mb-4">Culinary Excellence</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Savor authentic local cuisine and international delicacies prepared by award-winning chefs. 
                Our restaurants offer a journey through flavors, blending traditional recipes with contemporary techniques.
              </p>
              <Link to="/dining">
                <Button size="lg" className="gradient-hero">
                  Explore Dining Options
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <img
                src={restaurant}
                alt="Restaurant"
                className="rounded-lg shadow-luxury w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Experience Heritage Grand?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay today and immerse yourself in luxury and culture
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-card text-foreground hover:bg-card/90 text-lg px-8">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
