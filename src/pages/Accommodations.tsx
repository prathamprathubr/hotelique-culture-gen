import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Maximize, Users, Wifi } from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";

const Accommodations = () => {
  const rooms = [
    {
      title: "Deluxe Room",
      image: roomDeluxe,
      price: "$299",
      size: "35 m²",
      capacity: "2 Guests",
      features: [
        "King size bed with premium linens",
        "Panoramic city views",
        "Marble bathroom with rain shower",
        "Traditional cultural artwork",
        "High-speed WiFi",
        "Smart TV with streaming services",
        "Minibar and coffee maker",
        "24/7 room service",
      ],
    },
    {
      title: "Executive Suite",
      image: roomSuite,
      price: "$599",
      size: "65 m²",
      capacity: "4 Guests",
      features: [
        "Separate living area and bedroom",
        "Premium furnishings with cultural elements",
        "Two bathrooms with luxury amenities",
        "Private balcony",
        "Work desk with ergonomic chair",
        "High-speed WiFi",
        "Smart home controls",
        "Complimentary breakfast",
        "Priority check-in/out",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            Our Accommodations
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Elegant rooms and suites designed for comfort and cultural immersion
          </p>
        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden shadow-luxury animate-scale-in">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-auto">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-xl">
                      {room.price}/night
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-serif font-bold mb-4">{room.title}</h2>
                    
                    <div className="flex gap-6 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <Maximize size={20} className="mr-2" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users size={20} className="mr-2" />
                        <span>{room.capacity}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Wifi size={20} className="mr-2" />
                        <span>Free WiFi</span>
                      </div>
                    </div>

                    <h3 className="font-semibold mb-4 text-lg">Room Features:</h3>
                    <ul className="space-y-2 mb-6">
                      {room.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full gradient-hero text-lg py-6">
                      Book This Room
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6 animate-fade-in">All Rooms Include</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="animate-scale-in">
                <h3 className="font-semibold text-lg mb-3">Premium Comfort</h3>
                <p className="text-muted-foreground">
                  Luxury bedding, climate control, and soundproofing for perfect rest
                </p>
              </div>
              <div className="animate-scale-in">
                <h3 className="font-semibold text-lg mb-3">Modern Technology</h3>
                <p className="text-muted-foreground">
                  High-speed WiFi, smart TVs, and USB charging stations
                </p>
              </div>
              <div className="animate-scale-in">
                <h3 className="font-semibold text-lg mb-3">Cultural Touches</h3>
                <p className="text-muted-foreground">
                  Authentic artwork, traditional decor, and cultural amenities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodations;
